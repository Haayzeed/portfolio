<template>
  <div id="app">
	<section class="container-fluid" id="home">

    <router-view/>
    </section>
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
   mounted(){
      const timeline = gsap.timeline({defaults: {duration: 0.5}})
      timeline.from(".logo", {opacity: 0,  ease: "back", delay: 0.8})

      .from(".menu-animation li", {opacity: 0, ease: "back", stagger: 0.25, delay: 0})
      .from(".fa-bars", {opacity: 0, ease: "back", x: 12 })
      .from(".description .hi", {opacity: 0, ease: "sine", delay: 0, y: -10})
      .from(".description .name", {opacity: 0, ease: "sine",  y: -10, delay: 0})
      .from(".description .name-subtitle", {opacity: 0, ease: "back", y: 12, delay: 0 })
      .from(".description .name-desc", {opacity: 0, ease: "back", x: 12,delay: 0 })
      .from(".description .resume-btn", {opacity: 0, ease: "back", x: -12 })

    }
    
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
