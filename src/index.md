---
layout: layouts/default.liquid
title: MA pool services residential and commercial pools and spas | Eventide Aquatics
---

<amp-animation id="showAnim" layout="nodisplay">
  <script type="application/json">
    {
      "duration": "200ms",
       "fill": "both",
       "iterations": "1",
       "direction": "alternate",
       "animations": [
         {
           "selector": "#scrollToTopButton",
           "keyframes": [
             { "opacity": "1", "visibility": "visible" }
           ]
         }
       ]
    }
  </script>
</amp-animation>

<amp-animation id="hideAnim" layout="nodisplay">
  <script type="application/json">
    {
     "duration": "200ms",
       "fill": "both",
       "iterations": "1",
       "direction": "alternate",
       "animations": [
         {
           "selector": "#scrollToTopButton",
           "keyframes": [
             { "opacity": "0", "visibility": "hidden" }
           ]
         }
       ]
   }
  </script>
</amp-animation>
<section>

  <h1>
    <a class="target-anchor" id="top"></a>
    {{ siteData.name }}
    <amp-position-observer on="enter:hideAnim.start; exit:showAnim.start" layout="nodisplay"></amp-position-observer>
  </h1>

  ## Pushing the limits of pool technology.

  <section class="parallax-image-window">
    <amp-animation id="parallaxTransition"
      layout="nodisplay">
      <script type="application/json">
        {
          "duration": "1",
          "fill": "both",
          "direction": "reverse",
          "animations": [
            {
              "selector": "#parallaxImage",
              "keyframes": [
                { "transform": "translateY(-30%)" }
              ]
            }
          ]
        }
      </script>
    </amp-animation>
    <amp-position-observer on="scroll:parallaxTransition.seekTo(percent=event.percent)"
      intersection-ratios="0"
      layout="nodisplay">
    </amp-position-observer>
    <amp-img id="parallaxImage" data-hero src="/img/hero_image.jpg" width="1645" height="925" layout="intrinsic" alt="an image"></amp-img>
  </section>

<!--
<section>
<form class="multistep-form"
  method="get"
  action="#"
  target="_top">
  <div class="stepper vertical">
    <button class="step-title step-active"
      [class]="currentStep > 0 ? 'step-title' : 'step-title step-active'"
      on="tap:AMP.pushState({ currentStep: 0 })">
      <i class="step-incomplete"
        [class]="animalSelected ? 'step-complete' : 'step-incomplete'"
        data-step-nr="1"></i>
      Animal
    </button>
    <section [hidden]="currentStep > 0">
      <div class="content">
        <p>What's your favorite animal?</p>
        <amp-selector on="select:AMP.setState({animalSelected: true})"
          class="poll"
          name="animal-poll">
          <div option="cat">Cat</div>
          <div option="dog">Dog</div>
          <div option="horse">Horse</div>
        </amp-selector>
        <button disabled
          [disabled]="!animalSelected"
          on="tap:AMP.pushState({ currentStep: currentStep + 1 })">
          continue
        </button>
      </div>
    </section>
    <button class="step-title"
      [class]="currentStep != 1 ? 'step-title' : 'step-title step-active'"
      disabled
      [disabled]="!animalSelected"
      on="tap:AMP.pushState({ currentStep: 1 })">
      <i class="step-incomplete"
        [class]="colorSelected ? 'step-complete' : 'step-incomplete'"
        data-step-nr="2"></i>
      Color
    </button>
    <section hidden
      [hidden]="currentStep != 1">
      <div class="content">
        <p>What's your favorite color?</p>
        <amp-selector on="select:AMP.setState({colorSelected: true})"
          class="poll"
          name="color-poll">
          <div option="blue">Blue</div>
          <div option="green">Green</div>
          <div option="yellow">Yellow</div>
        </amp-selector>
        <button disabled
          [disabled]="!colorSelected"
          on="tap:AMP.pushState({ currentStep: currentStep + 1 })">
          continue
        </button>
      </div>
    </section>
    <button class="step-title"
      [class]="currentStep != 2 ? 'step-title' : 'step-title step-active'"
      disabled
      [disabled]="!colorSelected"
      on="tap:AMP.pushState({ currentStep: 2 })">
      <i class="step-incomplete"
        [class]="fruitSelected ? 'step-complete' : 'step-incomplete'"
        data-step-nr="3"></i>
      Fruit
    </button>
    <section hidden
      [hidden]="currentStep != 2">
      <div class="content">
        <p>What's your favorite fruit?</p>
        <amp-selector on="select:AMP.setState({fruitSelected: true})"
          class="poll"
          name="fruit-poll">
          <div option="apple">Apple</div>
          <div option="banana">Banana</div>
          <div option="cheery">Cherry</div>
        </amp-selector>
        <button disabled
          [disabled]="!fruitSelected"
          on="tap:AMP.pushState({ currentStep: currentStep + 1 })">
          continue
        </button>
      </div>
    </section> 
  </div>
  <input type="submit"
    value="Submit">
</form>
</section> -->

  Eventide Aquatics services residential and commercial pools and spas, college and medical pool environments.
  <!-- <amp-state id="form1">
    <script type="application/json">
      {
        "subscribe": false,
        "submit": false
      }
    </script>
  </amp-state> -->
  <!-- <p [text]="form1.submit">No state is set</p> -->
  <!-- <p [text]="'Thanks, ' + subscribe +'! You have successfully made an appointment for ' + value3 + ''"></p> -->
  <!-- <button on="tap:AMP.setState({})">Click</button> -->
  <form method="post" action-xhr="/"  on="submit-success: AMP.setState({ 'subscribe': event.response.value1, 'date': event.response.value3 })" target="_blank">
    <input type="text" name="value1" placeholder="Your Name" required />
    <input type="email" name="value2" placeholder="Your email" required />
    <amp-date-picker
      type="single"
      mode="overlay"
      layout="container"
      input-selector="[name=value3]"
    >
      <input type="text" name="value3" placeholder="Expected Service Date" required />
    </amp-date-picker>
    <input type="submit" value="Contact Me" />
  </form>

  <section>
  <amp-accordion id="my-accordion" disable-session-states>
    <section expanded>
      <h2>{{ faqData.first_faq }}
        <span class="accordion-header-indicator"></span>
      </h2>
      <div>
        <ul>
          <li>Installation of filters, pumps, heaters, motors and more</li>
          <li>Installation of automatic pool cleaners</li>
          <li>UV and Ozone solutions for reduce chemical usage</li>
          <li>Seasonal heater tune up and repair</li>
          <li>Repair & replacement of valves and plumbing</li>
          <li>Filter Cleaning</li>
          <li>Sand Changes</li>
          <li>Tile Line repair and replacement</li>
          <li>Equipment Upgrades</li>
          <li>New home pool inspections and orientation</li>
          <li>Seasonal pool openings and closings</li>
          <li>Pressure cleaning & wash & wax of interior pool surfaces</li>
          <li>Weekly and Monthly Service Plans​</li>
          <li>SwimEx Installation</li>
          <li>SwimEx Annual Service</li>
          <li>SwimEx Parts</li>
          <li>SwimEx Reconditioning</li>
          <li>Custom Chemistry Controllers</li>
        </ul>
    </div>
    </section>
    <section>
      <h2>How do I reduce my chlorine use?
        <span class="accordion-header-indicator"></span>
      </h2>
      <p>Absolutely not!  We have great insurance and we wouldn't ever dream of stealing.</p>
    </section>
    <!-- <section>
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
    </section> -->
  </amp-accordion>
  </section>

  <h4>About Us</h4>
  <!-- <figure>
    <amp-img src="/img/ben_1.jpg" width="525" height="240" alt="an image"></amp-img>
  </figure> -->
  <ul>
    <li>Experienced, qualified and insured.</li>
    <li>APSP certified service professionals.</li>
    <li>NSPF Certified pool operators.</li>
    <li>Trained & certified by top manufacturers.</li>
  </ul>
  <blockquote>
    <p>Hello Everyone!</p>
    <p>Thanks for taking the time to check us out! With over 10 years experience, designing and installing custom pool systems, using technology to make aquatic management easier, pools  safer, and more cost effective.  We believe our client relationships, worksmanship and innovation will help your investment last a lifetime.  Eventide is a trusted expert in the  design, manufacturing, installation and operation of almost any aquatic space.</p>
    <p>We look forward to working with you! - Ben</p>
  </blockquote>

<div>
  <button id="scrollToTopButton"
    on="tap:top.scrollTo(duration=200)"
    class="scrollToTop">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.224 44.224"><path d="M22.112 44.224a3 3 0 003-3v-25.66c0-2.761 1.541-3.376 3.443-1.374l7.045 7.419a3.127 3.127 0 002.274.976 3.134 3.134 0 002.273-5.295L24.653.977A3.13 3.13 0 0022.406 0a3.161 3.161 0 00-2.261.938L4.114 17.254a3.135 3.135 0 104.47 4.394l7.024-7.148c1.935-1.97 3.504-1.328 3.504 1.433v25.291a3 3 0 003 3z" fill="#fff"/></svg>
    </button>
</div>
</section>