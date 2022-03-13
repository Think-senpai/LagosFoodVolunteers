<template>
  <div class="pt-16 pb-10 px-4 md:px-16">
    <div class="mt-10">
      <div class="flex justify-center items-center" v-if="loading">
        <Spinner />
      </div>

      <div class="grid grid-cols-3 gap-8" v-else>
        <div class="col-span-3 md:col-span-2 row-span-3">
          <div
            class="py-8 px-2 md:px-4 border-2 border-gray-300 w-full rounded-lg bg-brand-backgroundLight mb-10 flex flex-col"
          >
            <div class="flex flex-col">
              <div class="flex items-center justify-between">
                <div class="flex flex-row">
                  <div class="mr-3">
                    <img
                      :src="generatedImage"
                      class="rounded-full w-16"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 class="font-medium mb-2 mx-2">
                      {{ currentProfile && currentProfile.firstName }}
                      {{ currentProfile && currentProfile.lastName }}
                    </h3>
                    <div class="flex mb-3 text-gray-400">
                      <span>{{ currentProfile && currentProfile.title }}</span>
                    </div>
                  </div>
                </div>
                <div class="cursor-pointer">
                  <img
                    :src="require('@/assets/icon/edit.svg')"
                    class=""
                    alt=""
                  />
                </div>
              </div>

              <div class="flex w-10/12 sm:w-9/12 md:w-full flex-col">
                <p class="text-gray-400 mb-6 mx-2">
                  {{ currentProfile && currentProfile.about }}
                </p>
                <!-- <p class="text-gray-400 mb-6 mx-2">
                  {{
                    currentProfile &&
                    currentProfile.about | trucate(171, '...Read more')
                  }}
                </p>-->
                <div class="flex mb-6">
                  <div>
                    <button
                      class="bg-brand-primary p-2 flex items-center justify-between rounded-md ml-3"
                    >
                      <span class="text-xs text-white">Available to work</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="mb-10 bg-brand-background flex flex-wrap items-center justify-between w-full px-6 py-2 rounded-md cursor-pointer"
          >
            <div class="bg-brand-backgroundLight py-1 px-2 md:px-4 rounded-md">
              <p>Overview</p>
            </div>
            <div class="py-1 px-2 md:px-4 rounded-md">
              <p>Experience</p>
            </div>
            <div class="py-1 px-2 md:px-4 rounded-md">
              <p>Education</p>
            </div>
            <div class="py-1 px-2 md:px-4 rounded-md">
              <p>Licences</p>
            </div>
            <div class="py-1 px-2 md:px-4 rounded-md">
              <p>Recommendation</p>
            </div>
          </div>
          <div
            class="py-6 px-2 md:px-4 w-full rounded-lg border-2 border-gray-300 bg-brand-backgroundLight mb-10 flex flex-col"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-medium mb-2 mx-2">Summary</h3>
              <div class="cursor-pointer" @click="toggleupdateAboutModal()">
                <img :src="require('@/assets/icon/edit.svg')" class="" alt="" />
              </div>
            </div>

            <p class="text-gray-400 mb-6 mx-2">
              {{ currentProfile && currentProfile.about }}
            </p>
          </div>
          <div
            class="py-6 px-2 md:px-4 w-full rounded-lg border-2 border-gray-300 bg-brand-backgroundLight mb-10 flex flex-col"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-medium mb-6 mx-2">Work Experience</h3>
              <div class="cursor-pointer flex">
                <div
                  @click="toggleAddExperienceModal(currentProfile.experiences)"
                >
                  <img
                    :src="require('@/assets/icon/plus.svg')"
                    class="mx-2"
                    alt=""
                  />
                </div>
                <div @click="toggleEditExperienceModal()">
                  <img
                    :src="require('@/assets/icon/edit.svg')"
                    class="mx-2"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="flex flex-col px-4"
              v-for="(experiences, index) in currentProfile.experiences"
              :key="index"
            >
              <div>
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
                <ul class="text-gray-400 mb-6 mx-4 my-3">
                  {{
                    experiences.desc
                  }}
                </ul>
              </div>
              <!--<div>
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
                <ul class="text-gray-400 mb-6 mx-4 my-3">
                  <li class="mb-2 list-disc">
                    Identifying user problema and analyzing solutions to solve
                    said problems
                  </li>
                  <li class="mb-2 list-disc">
                    Identifying user problema and analyzing solutions to solve
                    said problems
                  </li>
                  <li class="mb-2 list-disc">
                    Identifying user problema and analyzing solutions to solve
                    said problems
                  </li>
                  <li class="mb-2 list-disc">
                    Identifying user problema and analyzing solutions to solve
                    said problems
                  </li>
                </ul>
              </div>-->
            </div>
          </div>
          <div
            class="py-6 px-2 md:px-4 w-full rounded-lg border-2 border-gray-300 bg-brand-backgroundLight mb-10 flex flex-col"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-medium mb-6 mx-2">Education</h3>
              <div class="cursor-pointer flex">
                <div
                  @click="toggleAddEducationModal(currentProfile.educations)"
                >
                  <img
                    :src="require('@/assets/icon/plus.svg')"
                    class="mx-2"
                    alt=""
                  />
                </div>
                <div @click="toggleEditEducationModal()">
                  <img
                    :src="require('@/assets/icon/edit.svg')"
                    class="mx-2"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="flex flex-col px-4"
              v-for="(education, index) in currentProfile.educations"
              :key="index"
            >
              <div class="mb-4">
                <div class="flex flex-row">
                  <div class="mr-3">
                    <img
                      :src="require('@/assets/images/school.png')"
                      class="rounded-full w-12"
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
              </div>
              <!--<div class="mb-4">
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
              </div>
              <div class="mb-4">
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
              </div>-->
            </div>
          </div>
        </div>
        <div
          class="col-span-3 md:col-span-1 py-8 px-6 border-2 border-gray-300 w-full rounded-lg bg-brand-backgroundLight mb-10 flex flex-col"
        >
          <h3 class="font-medium text-gray-400 mb-2">SKILL SET</h3>
          <div class="flex flex-wrap mt-6">
            <button
              class="bg-brand-primaryLight border border-green-800 px-1 py-2 flex items-center justify-between rounded-md mr-6 mb-4"
              v-for="(tag, index) in currentProfile.tags"
              :key="index"
            >
              <span class="text-brand-primary text-sm ml-1">{{ tag }}</span>
            </button>
            <!-- <button
              class="bg-brand-primaryLight border border-green-800 px-1 py-2 flex items-center justify-between rounded-md mr-6 mb-4"
            >
              <span class="text-brand-primary text-sm ml-1">Coding</span>
            </button>
            <button
              class="bg-brand-primaryLight border border-green-800 px-1 py-2 flex items-center justify-between rounded-md mr-6 mb-4"
            >
              <span class="text-brand-primary text-sm ml-1">Wordpress</span>
            </button>

            <button
              class="bg-brand-primaryLight border border-green-800 px-1 py-2 flex items-center justify-between rounded-md mr-6 mb-4"
            >
              <span class="text-brand-primary text-sm ml-1"
                >software development</span
              >
            </button>-->
          </div>
          <div class="mt-6">
            <h3 class="font-medium text-gray-400 mb-2">JOIN DATE</h3>
            <h3 class="font-medium mb-2">2 months ago</h3>
          </div>
          <div class="mt-6">
            <h3 class="font-medium text-gray-400 mb-2">LANGUAGES</h3>
            <h3 class="font-medium mb-2">English, Yoruba</h3>
          </div>
        </div>
      </div>
      <add-Education :educations="educations" />
      <add-Experience :experiences="experiences" />
      <edit-Education :editableProfile="editableProfile" />
      <edit-Experience :editableProfile="editableProfile" />
      <about-About :about="about" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import AddEducation from '@/components/Profile/AddEducation'
import AddExperience from '@/components/Profile/AddExperience'
import EditEducation from '@/components/Profile/EditEducation'
import EditExperience from '@/components/Profile/EditExperience'
import UpdateAbout from '@/components/Profile/UpdateAbout'
import Spinner from '@/components/Spinner'
export default {
  layout: 'profile',
  data() {
    return {
      loading: false,
      generatedImage: '',
      editableProfile: {},
      experiences: [],
      educations: [],
      about: '',
    }
  },
  components: {
    'add-Education': AddEducation,
    'add-Experience': AddExperience,
    'edit-Education': EditEducation,
    'edit-Experience': EditExperience,
    'about-About': UpdateAbout,
    Spinner,
  },
  methods: {
    toggleAddExperienceModal(experiences) {
      this.experiences = experiences
      this.$root.$emit('addExperience')
    },
    toggleAddEducationModal(educations) {
      this.educations = educations
      this.$root.$emit('addEducation')
    },
    toggleEditEducationModal() {
      this.editableProfile = this.currentProfile.educations
      this.$root.$emit('editEducation')
    },
    toggleEditExperienceModal() {
      this.editableProfile = this.currentProfile.experiences
      this.$root.$emit('editExperience')
    },
    toggleupdateAboutModal() {
      this.about = this.currentProfile.about
      // console.log(this.about)
      this.$root.$emit('updateAbout')
    },
    generateName() {
      const date = new Date().valueOf()
      let text = ''
      const possibleText =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < 5; i++) {
        text += possibleText.charAt(
          Math.floor(Math.random() * possibleText.length)
        )
      }
      return date + '.' + text + '.jpeg'
    },
  },
  computed: {
    ...mapGetters({
      currentProfile: 'currentProfile',
    }),
    trucatedText: function () {
      if (this.currentProfile.about.length > 171) {
        return this.currentProfile.about.substring(0, 171) + '...Read more'
      } else {
        return this.currentProfile.about
      }
    },
  },
  filters: {
    trucate: function (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    },
  },
  async mounted() {
    // window.location.reload()
    this.loading = true
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('getCurrentProfile')
        // console.log(user)
        console.log(this.currentProfile)
        // this.currentProfile = JSON.parse(localStorage.getItem('profile'))
      } else {
        this.$router.push('/login')
      }
      if (this.currentProfile) {
        this.loading = false
      }
      // console.log(this.currentProfile)
      const arr = this.currentProfile && this.currentProfile.image.split(',')
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      const imageName = this.generateName()
      const blob = new Blob([u8arr], { type: 'image/jpeg' })
      const imageFile = new File([blob], imageName, {
        type: 'image/jpeg',
      })
      // console.log(window.URL.createObjectURL(imageFile))
      this.generatedImage = window.URL.createObjectURL(imageFile)
    })
  },
}
</script>

<style>
.vm--container .vm--modal {
  border-radius: 18px !important;
  top: 80px !important;
  height: 480px !important;
  overflow-y: scroll !important;
}
@media screen and (max-width: 600px) {
  .vm--container .vm--modal {
    width: 370px !important;
    left: 0px !important;
    margin: 0 auto !important;
  }
}
</style>
