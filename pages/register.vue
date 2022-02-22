<template>
  <div class="w-full overflow-hidden">
    <component :is="pages[currentPage].component" />
  </div>
</template>

<script>
import EducationExprience from '@/components/Registration/EducationExprience'
import Profile from '@/components/Registration/Profile'
import CompleteProfile from '@/components/Registration/CompleteProfile'
import ContactInfo from '@/components/Registration/ContactInfo'

export default {
  name: 'RegisterPage',
  data() {
    return {
      loading: false,
      currentPage: 0,
      pages: [
        {
          component: Profile,
        },
        {
          component: CompleteProfile,
        },
        {
          component: ContactInfo,
        },
        {
          component: EducationExprience,
        },
      ],
    }
  },
  mounted() {
    this.$root.$on('next', () => {
      this.currentPage++
    })
  },
}
</script>

<style></style>
