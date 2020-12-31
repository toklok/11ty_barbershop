import {
  getAssetFromKV,
  mapRequestToAsset,
} from '@cloudflare/kv-asset-handler';

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false;

async function handlePostRequest(request) {
  let reqBody = await readRequestBody(request);

  let myHeaders = new Headers();

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: reqBody,
    redirect: 'follow',
  };

  let hookResponse = await fetch(
    FORM_ENDPOINT,
    requestOptions
  );

  if (hookResponse.ok) {
    return new Response(reqBody, {
      status: 200,
    });
  } else {
    return new Response('Error', {
      status: 500,
    });
  }
}

addEventListener('fetch', (event) => {
  const { request } = event;
  try {
    if (request.method === 'POST') {
      return event.respondWith(handlePostRequest(request));
    } else if (request.method === 'GET') {
      return event.respondWith(handleEvent(event));
    }
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        })
      );
    }
    event.respondWith(new Response('Internal Error', { status: 500 }));
  }
});

async function readRequestBody(request) {
  const { headers } = request;
  const contentType = headers.get('content-type');
  if (contentType.includes('application/json')) {
    const body = await request.json();
    return JSON.stringify(body);
  } else if (contentType.includes('application/text')) {
    const body = await request.text();
    return body;
  } else if (contentType.includes('text/html')) {
    const body = await request.text();
    return body;
  } else if (contentType.includes('form')) {
    const formData = await request.formData();
    let body = {};
    for (let entry of formData.entries()) {
      body[entry[0]] = entry[1];
    }
    return JSON.stringify(body);
  } else {
    let myBlob = await request.blob();
    var objectURL = URL.createObjectURL(myBlob);
    return objectURL;
  }
}

async function handleEvent(event) {
  const url = new URL(event.request.url);
  let options = {};

  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  options.mapRequestToAsset = handlePrefix(/^\/docs/);
  console.log(url.pathname);
  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      };
    }
    if (url.pathname === '/') {
      return Response.redirect(`${url}/en-US/`, 301)
    }
    if (url.pathname.endsWith('.html')) {
      options.cacheControl = {
        edgeTTL: 8640000,
        browserTTL: 0,
        mustRevalidate: true,
        public: true,
      };
    } else {
      options.cacheControl = {
        edgeTTL: 8640000,
        browserTTL: 8640000,
        public: true,
      };
    }
    const extension = url.pathname.split('.').pop();
    let immutableFiles = ['js', 'css', 'webp', 'png', 'jpg', 'gif'];
    if (immutableFiles.includes(extension)) {
      options.cacheControl = {
        edgeTTL: 31536000,
        browserTTL: 31536000,
        public: true,
        immutable: true,
      };
    }
    return await getAssetFromKV(event, options);
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: (req) =>
            new Request(`${new URL(req.url).origin}/404.html`, req),
        });

        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 404,
        });
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 });
  }
}

/**
 * Here's one example of how to modify a request to
 * remove a specific prefix, in this case `/docs` from
 * the url. This can be useful if you are deploying to a
 * route on a zone, or if you only want your static content
 * to exist at a specific path.
 */
function handlePrefix(prefix) {
  return (request) => {
    // compute the default (e.g. / -> index.html)
    let defaultAssetKey = mapRequestToAsset(request);
    let url = new URL(defaultAssetKey.url);

    // strip the prefix from the path for lookup
    url.pathname = url.pathname.replace(prefix, '/');

    // inherit all other props from the default request
    return new Request(url.toString(), defaultAssetKey);
  };
}
