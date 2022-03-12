<template>
  <div class="w-full overflow-hidden">
    <component :is="pages[currentPage].component" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EducationExprience from '@/components/Registration/EducationExprience'
import Profile from '@/components/Registration/Profile'
import CompleteProfile from '@/components/Registration/CompleteProfile'
import ContactInfo from '@/components/Registration/ContactInfo'
import ProfileSuccessful from '@/components/Registration/ProfileSuccessful'
export default {
  layout: 'auth',
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
        {
          component: ProfileSuccessful,
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      enableNext: 'next',
    }),
  },
  mounted() {
    this.$root.$on('next', () => {
      if (this.enableNext) {
        this.currentPage++
      }
    })
  },
  created() {
    // console.log(this.enableNext)
  },
}
</script>

<style></style>
