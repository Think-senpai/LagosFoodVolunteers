<template>
  <div class="mt-10">
    <h2 class="mb-4 text-2xl">Search Volunteer</h2>
    <div
      class="py-8 px-2 md:px-4 bg-brand-primaryLight w-full flex flex-col rounded-lg"
    >
      <h3 class="flex mx-auto">Search Volunteer</h3>
      <div class="flex flex-col lg:flex-row mt-5 md:mt-10 mx-0 md:mx-5 w-full">
        <div class="flex flex-col mx-2 md:mx-4">
          <label class="mb-2 text-gray-500">Preferred skills</label>
          <select
            class="w-full rounded-md py-2 px-4 focus:outline-none"
            placeholder="Product designer"
            v-model="skill"
          >
            <option :value="''" disabled selected>select skills</option>
            <option value="all">All</option>
            <option :value="skill" v-for="(skill, i) in tagskills" :key="i">
              {{ skill }}
            </option>
          </select>
        </div>
        <div class="flex flex-col mx-2 md:mx-4">
          <label class="mb-2 text-gray-500">Location</label>
          <input
            v-model="location"
            placeholder="location"
            class="w-full rounded-md py-2 px-4 focus:outline-none"
          />
        </div>
        <div class="flex flex-col mx-2 md:mx-4">
          <label class="mb-2 text-gray-500">Experience level</label>
          <input
            class="w-full rounded-md py-2 px-4 focus:outline-none"
            placeholder="Senior"
            v-model="level"
          />
        </div>
        <div class="mx-2 md:mx-4">
          <button
            class="bg-brand-primary mt-6 px-6 py-2 rounded-md flex items-center mr-0 mb-4 md:mr-6 md:mb-0 w-full"
            @click="search"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Iconly/Bulk/Search">
                <g id="Search">
                  <ellipse
                    id="Ellipse_746"
                    cx="11.0992"
                    cy="10.6532"
                    rx="8.59922"
                    ry="8.65324"
                    fill="white"
                  />
                  <path
                    id="Path_34202"
                    opacity="0.4"
                    d="M21.1745 21.9553C20.8405 21.9445 20.5228 21.807 20.2853 21.5705L18.2488 19.1902C17.8122 18.7909 17.7765 18.1123 18.1688 17.6689C18.3524 17.4831 18.602 17.3787 18.8624 17.3787C19.1228 17.3787 19.3725 17.4831 19.5561 17.6689L22.1172 19.7181C22.4861 20.0957 22.5999 20.6563 22.4078 21.1492C22.2157 21.6422 21.7535 21.9754 21.2279 22L21.1745 21.9553Z"
                    fill="white"
                  />
                </g>
              </g>
            </svg>

            <span class="ml-2 text-white">Search opportunities</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      level: '',
      location: '',
      tagskills: [],
      skill: '',
    }
  },
  props: {
    dataBase: {
      type: Array,
      required: false,
    },
  },
  computed: {
    ...mapGetters({
      skills: 'skills',
    }),
  },
  methods: {
    ...mapActions(['getSklls']),
    search() {
      this.$emit('search', this.skill)
    },
  },
  async created() {
    await this.getSklls()
    this.tagskills = this.skills && this.skills[0].skills
  },
}
</script>
