<template>
  <div class="pt-16 pb-10 px-4 md:px-16 bg-brand-background">
    <topNav />
    <searchVolunteer :dataBase="data" @search="search" />
    <div class="border-b-2 my-8 w-full border-gray-300" />
    <recent :dataBase="data" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  data() {
    return {
      data: [],
      filtered: [],
    }
  },
  computed: {
    ...mapGetters({
      dataBase: 'dataBase',
    }),
  },
  methods: {
    ...mapActions(['getDatabase']),
    search(skill) {
      if (skill === 'all') {
        this.data = this.dataBase
      }
      if (this.dataBase && skill !== 'all') {
        this.data = this.dataBase.filter((data) => {
          // eslint-disable-next-line
          return data.tags.toString().indexOf(skill.toLowerCase()) >= 0
        })
      }
    },
  },
  async created() {
    await this.getDatabase()
    this.data = await this.dataBase
    console.log(this.data)
  },
}
</script>
