<template>
  <div class="relative">
    <navbar />
    <div class="h-full">
      <nuxt />
    </div>
  </div>
</template>

<script>
import navbar from '@/layouts/navbar.vue'
export default {
  components: {
    navbar,
  },
}
</script>
