<template>
  <div class="home">
    <topHeader></topHeader>
    <description></description>
    <about></about>
    <work></work>
    <mainProject></mainProject>
  </div>
</template>

<script>
import topHeader from '@/components/top-header.vue'
import description from '@/components/description.vue'
import about from '@/components/about.vue'
import work from '@/components/work.vue'
import mainProject from '@/components/main-project.vue'

export default {
  name: 'Home',
  components: {
    topHeader,
    description,
    about,
    work,
    mainProject
  }
}
</script>
