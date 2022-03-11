<template>
  <div class="pt-16 pb-10 px-4 md:px-16 bg-brand-background">
    <topNav />
    <searchVolunteer />
    <div class="border-b-2 my-8 w-full border-gray-300" />
    <recent />
  </div>
</template>

<script>
import topNav from '@/components/Home/topNav.vue'
import searchVolunteer from '@/components/Home/searchVolunteer.vue'
import recent from '@/components/Home/recent.vue'
export default {
  name: 'IndexPage',
  components: {
    topNav,
    searchVolunteer,
    recent,
  },
}
</script>
