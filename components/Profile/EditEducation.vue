<template>
  <div>
    <modal name="edit-education-modal">
      <div class="flex flex-col px-12 py-6">
        <h3 class="font-medium text-black mb-4">Education</h3>
        <div
          class="w-full flex flex-col mt-6"
          v-for="(education, index) in editableProfile"
          :key="index"
        >
          <div class="flex flex-col mb-6">
            <div class="flex flex-row">
              <div class="mr-3">
                <img
                  :src="require('@/assets/images/school.png')"
                  class="rounded-full w-16"
                  alt=""
                />
              </div>
              <div>
                <h3 class="font-medium mb-2">{{ education.school }}</h3>
                <p class="text-gray-400">{{ education.program }}</p>
                <p class="text-gray-400">
                  {{
                    new Date(education.start.seconds * 1000)
                      .toDateString()
                      .slice(4)
                  }}
                  -
                  {{
                    new Date(education.end.seconds * 1000)
                      .toDateString()
                      .slice(4)
                  }}
                </p>
              </div>
            </div>
            <div class="flex flex-row mt-2 items-center justify-start">
              <div
                class="cursor-pointer mr-6"
                @click="toggleEditAddEducationModal(education)"
              >
                <img :src="require('@/assets/icon/edit.svg')" class="" alt="" />
                <p class="text-gray-400">Edit</p>
              </div>
              <div class="cursor-pointer mt-1">
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
                :src="require('@/assets/images/school1.png')"
                class="rounded-full w-16"
                alt=""
              />
            </div>
            <div>
              <h3 class="font-medium mb-2">University of Lagos</h3>
              <p class="text-gray-400">Bsc, Human Resource Management</p>
              <p class="text-gray-400">Jan 2021 - Dec 2021</p>
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
        </div>
        <div class="flex flex-col mb-6">
          <div class="flex flex-row">
            <div class="mr-3">
              <img
                :src="require('@/assets/images/school2.png')"
                class="rounded-full w-16"
                alt=""
              />
            </div>
            <div>
              <h3 class="font-medium mb-2">
                Senior Product Designer, Lagos Food Bank
              </h3>
              <p class="text-gray-400">Bsc, Human Resource Management</p>
              <p class="text-gray-400">Jan 2021 - Dec 2021</p>
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
    <update-Education :editableEducation="education" />
  </div>
</template>

<script>
import updateEducation from '@/components/Profile/updateEducation'
export default {
  data() {
    return {
      education: {},
    }
  },
  components: {
    'update-Education': updateEducation,
  },
  props: ['editableProfile'],
  mounted() {
    this.$root.$on('editEducation', () => {
      this.$modal.show('edit-education-modal')
    })
  },
  methods: {
    toggleEditAddEducationModal(education) {
      this.education = education
      this.$root.$emit('updateEducation')
    },
  },
}
</script>
