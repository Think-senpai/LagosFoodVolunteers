<template>
  <div class="items-center xl:items-start justify-center xl:justify-start">
    <div class="pt-4 w-full lg:w-1/2 md:px-10 flex items-center">
      <div class="max-w-lg mx-auto w-11/12 mb-4">
        <!--<div>
        <img src="/logo.png" alt="" style="width: 120px" />
      </div>-->
        <h1 class="text-xl md:text-3xl font-bold text-gray-800 mt-4">
          Become a Voluteer
        </h1>
        <p class="text-gray-600 leading-tight mt-2">
          Addresing the problems of nutrition in our beloved state.
        </p>
        <div class="py-6 flex">
          <div class="text-center mx-2 md:mx-4">
            <div
              class="h-10 w-10 bg-brand-primaryLight flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-black">1</span>
            </div>
            <p class="mt-3 text-xs md:text-sm">Personal</p>
          </div>
          <div class="text-center mx-2 md:mx-4">
            <div
              class="h-10 w-10 bg-brand-primaryLight flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-black">2</span>
            </div>
            <p class="mt-3 text-xs md:text-sm text-center">
              Complete your profile
            </p>
          </div>
          <div class="text-center mx-2 md:mx-4">
            <div
              class="h-10 w-10 bg-brand-primaryLight flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-black">3</span>
            </div>
            <p class="mt-3 text-xs md:text-sm">Contact Info</p>
          </div>
          <div class="text-center mx-2 md:mx-4">
            <div
              class="h-10 w-10 bg-brand-primary flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-white">4</span>
            </div>
            <p class="mt-3 text-xs md:text-sm">Education & Expriences</p>
          </div>
        </div>
        <form class="grid grid-flow-row gap-4 pb-3">
          <div>
            <label for="education">Education</label><br />
            <div
              class="w-full mt-3 border-t"
              v-for="(education, index) in educations"
              :class="{ 'border-b-2': education.length > 1 }"
              :key="index"
            >
              <input
                type="text"
                id="education"
                v-model="education.school"
                placeholder="Enter school"
                class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
              />
              <input
                type="text"
                id="education"
                v-model="education.program"
                placeholder="Enter program of study"
                class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
              />
              <div
                class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 w-full"
              >
                <date-picker
                  placeholder="Start"
                  format="MM/dd/yyyy"
                  v-model="education.start"
                  class="bg-gray-300 focus:bg-white focus:outline-none py-2 px-4 shadow-sm mt-2 w-full rounded-lg"
                  input-class="bg-gray-300 w-full focus:outline-none"
                />
                <date-picker
                  placeholder="End"
                  format="MM/dd/yyyy"
                  v-model="education.end"
                  class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                  input-class="bg-gray-300 w-full focus:outline-none"
                />
              </div>
            </div>
            <div class="flex items-center">
              <div
                class="text-left w-10 bg-gray-300 p-2 rounded-md flex items-center justify-center cursor-pointer mt-4"
                @click.prevent="addEducation"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-2xl"
                >
                  <path
                    d="M9.15057 5.88542H5.9369V9.07122C5.9369 9.58417 5.51744 10 5 10C4.48256 10 4.0631 9.58417 4.0631 9.07122V5.88542H0.849431C0.366778 5.83587 0 5.43268 0 4.95165C0 4.47062 0.366778 4.06743 0.849431 4.01788H4.05303V0.842066C4.10301 0.363598 4.50973 0 4.99496 0C5.4802 0 5.88692 0.363598 5.9369 0.842066V4.01788H9.15057C9.63322 4.06743 10 4.47062 10 4.95165C10 5.43268 9.63322 5.83587 9.15057 5.88542Z"
                    fill="#3E3D3D"
                  />
                </svg>
              </div>
              <p class="ml-3 mt-3">Add educational qualification</p>
            </div>
          </div>
          <div>
            <label for="education">Experience</label><br />
            <div
              class="w-full mt-3 border-t"
              v-for="(experience, index) in experiences"
              :class="{ 'border-b-2': experience.length > 1 }"
              :key="index"
            >
              <input
                type="text"
                id="experience"
                v-model="experience.role"
                placeholder="Enter job title"
                class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
              />
              <input
                type="text"
                id="experience"
                v-model="experience.company"
                placeholder="Enter comapny name"
                class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
              />
              <select
                type="text"
                id="experience"
                v-model="experience.period"
                placeholder="Enter employment type"
                class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
              >
                <option selected disabled>select employment type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
              </select>
              <div
                class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 w-full"
              >
                <date-picker
                  placeholder="Start"
                  format="MM/dd/yyyy"
                  v-model="experience.start"
                  class="bg-gray-300 focus:bg-white focus:outline-none py-2 px-4 shadow-sm mt-2 w-full rounded-lg"
                  input-class="bg-gray-300 w-full focus:outline-none"
                />
                <date-picker
                  placeholder="End"
                  format="MM/dd/yyyy"
                  v-model="experience.end"
                  class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                  input-class="bg-gray-300 w-full focus:outline-none"
                />
              </div>
              <div class="mt-3">
                <textarea
                  id="about you"
                  name=""
                  v-model="experience.desc"
                  placeholder="Tell us a summary about who you are"
                  class="w-full p-3 rounded-2xl bg-gray-300 border focus:bg-white visited:bg-white focus:border-brand-primary focus:outline-none"
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div class="flex items-center">
              <div
                class="text-left w-10 bg-gray-300 p-2 rounded-md flex items-center justify-center cursor-pointer mt-4"
                @click.prevent="addExperience"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-2xl"
                >
                  <path
                    d="M9.15057 5.88542H5.9369V9.07122C5.9369 9.58417 5.51744 10 5 10C4.48256 10 4.0631 9.58417 4.0631 9.07122V5.88542H0.849431C0.366778 5.83587 0 5.43268 0 4.95165C0 4.47062 0.366778 4.06743 0.849431 4.01788H4.05303V0.842066C4.10301 0.363598 4.50973 0 4.99496 0C5.4802 0 5.88692 0.363598 5.9369 0.842066V4.01788H9.15057C9.63322 4.06743 10 4.47062 10 4.95165C10 5.43268 9.63322 5.83587 9.15057 5.88542Z"
                    fill="#3E3D3D"
                  />
                </svg>
              </div>
              <p class="ml-3 mt-3">Add another experience</p>
            </div>
            <div class="flex items-center justify-center mt-4">
              <div
                class="text-left text-opacity-5 bg-gray-300 p-2 rounded-md flex items-center justify-center cursor-pointer mt-4"
                @click.prevent="pledge = !pledge"
              >
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="pledge"
                  class="text-2xl"
                >
                  <path
                    d="M3.81338 7.24796C3.58938 7.24796 3.36538 7.16296 3.19438 6.99196L0.82138 4.61896C0.47938 4.27696 0.47938 3.72297 0.82138 3.38196C1.16338 3.03996 1.71638 3.03896 2.05838 3.38096L3.81338 5.13596L7.94138 1.00796C8.28338 0.665965 8.83638 0.665965 9.17838 1.00796C9.52038 1.34996 9.52038 1.90396 9.17838 2.24596L4.43238 6.99196C4.26138 7.16296 4.03738 7.24796 3.81338 7.24796Z"
                    fill="#3E3D3D"
                  />
                </svg>
              </div>
              <p class="ml-3 mt-3">I have read the community service pledge</p>
            </div>
            <button
              class="btn bg-brand-primary text-white tracking-wide py-4 w-full mt-4"
              @click.prevent=""
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="w-1/2 hidden lg:block fixed right-0 top-0">
      <img
        class="object-cover h-screen w-full"
        src="@/assets/images/LFBI-Volunteers.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationExprience',
  data() {
    return {
      educations: [
        {
          school: '',
          program: '',
          start: '',
          end: '',
        },
      ],
      experiences: [
        {
          role: '',
          company: '',
          period: '',
          start: '',
          end: '',
          desc: '',
        },
      ],
      pledge: false,
    }
  },
  methods: {
    addEducation() {
      this.educations.push({
        school: '',
        program: '',
        start: '',
        end: '',
      })
    },
    removeEducation(index) {
      this.educations.splice(index, 1)
    },
    addExperience() {
      this.experiences.push({
        role: '',
        company: '',
        period: '',
        start: '',
        end: '',
        desc: '',
      })
    },
    submit() {
      this.$root.$emit('next')
    },
  },
}
</script>

<style lang="scoped"></style>
