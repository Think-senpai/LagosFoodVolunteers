<template>
  <div>
    <modal name="edit-experience-modal" width="500" height="500">
      <div class="flex flex-col px-12 py-6">
        <h3 class="font-medium text-black mb-4">Work Experience</h3>
        <div
          class="w-full flex flex-col mt-6"
          v-for="(experiences, index) in listEditableProfile"
          :key="index"
        >
          <div class="flex flex-col mb-6">
            <div class="flex flex-row">
              <div class="mr-3">
                <img
                  :src="require('@/assets/images/experience.png')"
                  class="rounded-full w-16"
                  alt=""
                />
              </div>
              <div>
                <div class="mb-2">
                  <button
                    class="bg-brand-background p-2 flex items-center justify-between rounded-md"
                  >
                    <span class="text-xs text-brand-green">{{
                      experiences.period
                    }}</span>
                  </button>
                </div>
                <h3 class="font-medium mb-2">
                  {{ experiences.role }}, {{ experiences.company }}
                </h3>
                <span class="mb-3 text-gray-400"
                  >{{
                    new Date(experiences.start.seconds * 1000)
                      .toDateString()
                      .slice(4)
                  }}
                  -
                  {{
                    new Date(experiences.end.seconds * 1000)
                      .toDateString()
                      .slice(4)
                  }}</span
                >
              </div>
            </div>
            <div class="flex flex-row mt-2 items-center justify-start">
              <div
                class="cursor-pointer mr-6"
                @click="toggleEditAddExperienceModal(experiences, index)"
              >
                <img :src="require('@/assets/icon/edit.svg')" class="" alt="" />
                <p class="text-gray-400">Edit</p>
              </div>
              <div
                class="cursor-pointer mt-1"
                @click="toggleDeleteExperience(index)"
              >
                <img
                  :src="require('@/assets/icon/delete.svg')"
                  class=""
                  alt=""
                />
                <p class="text-red-400">Delete</p>
              </div>
            </div>
          </div>
          <!--<div class="flex flex-col mb-6">
          <div class="flex flex-row">
            <div class="mr-3">
              <img
                :src="require('@/assets/images/experience1.png')"
                class="rounded-full w-16"
                alt=""
              />
            </div>
            <div>
              <div class="mb-2">
                <button
                  class="bg-brand-background p-2 flex items-center justify-between rounded-md"
                >
                  <span class="text-xs text-brand-green">Full-time</span>
                </button>
              </div>
              <h3 class="font-medium mb-2">
                Senior Product Designer, Lagos Food Bank
              </h3>
              <span class="mb-3 text-gray-400">Jan 2021 - Dec 2021</span>
            </div>
          </div>
          <div class="flex flex-row mt-2 items-center justify-start">
            <div class="cursor-pointer mr-6">
              <img :src="require('@/assets/icon/edit.svg')" class="" alt="" />
              <p class="text-gray-400">Edit</p>
            </div>
            <div class="cursor-pointer mt-1">
              <img :src="require('@/assets/icon/delete.svg')" class="" alt="" />
              <p class="text-red-400">Delete</p>
            </div>
          </div>
        </div>-->
        </div>
      </div>
    </modal>
    <update-Experience :editableExperience="experience" :index="index" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import UpdateExperience from '@/components/Profile/UpdateExperience'
export default {
  data() {
    return {
      experience: {},
      index: '',
    }
  },
  components: {
    'update-Experience': UpdateExperience,
  },
  props: {
    editableProfile: {
      type: Object,
      required: false,
    },
  },
  computed: {
    listEditableProfile: function () {
      return this.editableProfile
    },
  },
  mounted() {
    this.$root.$on('editExperience', () => {
      this.$modal.show('edit-experience-modal')
    })
  },
  methods: {
    ...mapActions(['deleteExperience']),
    toggleEditAddExperienceModal(experiences, index) {
      const payload = { experiences: this.listEditableProfile }
      this.$store.commit('educationInfo', payload)
      this.experience = experiences
      this.index = index
      // console.log(this.experience)
      this.$root.$emit('updateExperiences')
    },
    async toggleDeleteExperience(index) {
      const payload = { experiences: this.listEditableProfile }
      this.$store.commit('educationInfo', payload)
      await this.deleteExperience(index)
      this.$modal.hide('edit-experience-modal')
      // this.listEditableProfile.splice(index, 1)
      // console.log(this.listEditableProfile)
    },
  },
}
</script>
