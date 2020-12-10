<template>
  <div class="home">
    <topHeader></topHeader>
    <description></description>
    <about></about>
    <work></work>
    <mainProject></mainProject>
    <noteworthy></noteworthy>
    <contact></contact>
    <bottomFooter></bottomFooter>
  </div>
</template>

<script>
import topHeader from '@/components/top-header.vue'
import description from '@/components/description.vue'
import about from '@/components/about.vue'
import work from '@/components/work.vue'
import mainProject from '@/components/main-project.vue'
import noteworthy from '@/components/noteworthy.vue'
import contact from '@/components/contact.vue'
import bottomFooter from '@/components/bottom-footer.vue'

export default {
  name: 'Home',
  components: {
    topHeader,
    description,
    about,
    work,
    mainProject,
    noteworthy,
    contact,
    bottomFooter
  }
}
</script>
