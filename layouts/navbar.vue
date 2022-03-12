<template>
  <div
    class="fixed color h-16 w-full flex items-center justify-around px-10 md:px-80 z-200"
  >
    <h3 class="text-white hidden md:block">Sign up for our newsletter</h3>
    <input
      type="text"
      placeholder="Enter your email address"
      class="w-64 full rounded-md px-4 py-2 focus:outline-none"
    />
    <button
      class="bg-brand-primary text-white tracking-wide py-2 px-4 rounded-md text-sm"
    >
      Subscribe
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style scope>
.color {
  background: #3e3d3d;
}
</style>
