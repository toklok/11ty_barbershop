---
layout: layouts/default.liquid
title: Conscientious cleaning service family owned | Massachusetts
---

# Welcome to {{ siteData.name }}

## We strive to give you the best service

providing service in south eastern massachusetts and rhode island

* residential
* real estate
* commercial
* movie in / move out

### Schedule you're appointment.

<p [text]="'Thanks, ' + subscribe +'! You have successfully made an appointment for ' + date + ''"></p>
<form method="post" action-xhr="/"  on="submit-success: AMP.setState({'subscribe': event.response.name, 'date': event.response.date})" target="_blank">
  <input type="text" name="name" placeholder="Your Name" required />
  <amp-date-picker
    type="single"
    mode="overlay"
    layout="container"
    input-selector="[name=date]"
  >
    <input type="text" name="date" placeholder="Your Date" />
  </amp-date-picker>
  <input type="submit" value="Book Appointment" />
</form>

<amp-carousel 
  layout="responsive" 
  width="1200" 
  height="400" 
  controls
  data-next-button-aria-label="Go to next slide"
  data-previous-button-aria-label="Go to previous slide"
  type="slides">
  <amp-img src="https://i.picsum.photos/id/164/1200/400.jpg" alt="an image" width="1200" height="400"></amp-img>
  <amp-img src="https://i.picsum.photos/id/164/1200/400.jpg" alt="an image" width="1200" height="400"></amp-img>
  <amp-img src="https://i.picsum.photos/id/164/1200/400.jpg" alt="an image" width="1200" height="400"></amp-img>
  <amp-img src="https://i.picsum.photos/id/164/1200/400.jpg" alt="an image" width="1200" height="400"></amp-img>
</amp-carousel>


<amp-accordion id="my-accordion" disable-session-states>
  <section expanded>
    <h2>Why should I trust Joe?
      <span class="accordion-header-indicator"></span>
    </h2>
    <p>I empathize with individuals and want to produce a great product, a great result, a measurable action when two parties get what they want. You should see it in my actions, the way I carry myself.  I hire everyone on my time with that same mentality, you're actions are a direct correlation to your being.</p>
  </section>
  <section>
    <h2>Do I need to be home for every cleaning service?
      <span class="accordion-header-indicator"></span>
    </h2>
    <p>Absolutely not!  We have great insurance and we wouldn't ever dream of stealing.</p>
  </section>
  <section>
    <h2>How do I pay?
    </h2>
    <p>You can pay with Cash, Debit, Credit, anything except checks!</p>
  </section>
  <section>
    <h2>Are you okay with pets being in the home during a cleaning service?
      <span class="accordion-header-indicator"></span>
    </h2>
    <p>
    Heck yeah!  We are lovable dog and cat people, so we totally understand! 
    </p>
  </section>
</amp-accordion>