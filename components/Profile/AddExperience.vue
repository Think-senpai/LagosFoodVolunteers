<template>
  <modal name="add-experience-modal" width="500" height="500">
    <div class="flex flex-col px-6 py-6">
      <h3 class="font-medium text-black">Add Experience</h3>
      <div class="w-full mt-6">
        <div class="mb-4">
          <label>Title</label>
          <input
            type="text"
            id="experience"
            v-model="role"
            placeholder="Example: Product designer"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
          <p class="text-center text-red-500 text-xs mt-2">
            {{ error.role }}
          </p>
        </div>
        <div class="mb-4">
          <label>Company Name</label>
          <input
            type="text"
            id="experience"
            v-model="company"
            placeholder="Company Name"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
          <p class="text-center text-red-500 text-xs mt-2">
            {{ error.company }}
          </p>
        </div>
        <!--<div class="mb-4">
          <label>Location</label>
          <input
            type="text"
            id="experience"
            placeholder="Example: Lagos, Nigeria"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>-->
        <div class="mb-4">
          <label>Type of Employment</label>
          <select
            type="text"
            id="experience"
            v-model="period"
            placeholder="Enter employment type"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          >
            <option selected disabled>select employment type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
          <p class="text-center text-red-500 text-xs mt-2">
            {{ error.period }}
          </p>
        </div>
        <div class="mb-4">
          <label>Description</label>
          <textarea
            id="about you"
            v-model="desc"
            name=""
            placeholder="Tell us a summary about who you are"
            class="w-full p-3 rounded-2xl border focus:bg-white visited:bg-white focus:border-brand-primary focus:outline-none"
            cols="20"
            rows="5"
          ></textarea>
          <p class="text-center text-red-500 text-xs mt-2">
            {{ error.desc }}
          </p>
        </div>
        <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 w-full">
          <date-picker
            placeholder="Start"
            :format="customData"
            v-model="start"
            class="border focus:bg-white focus:outline-none py-2 px-4 shadow-sm mt-2 w-full rounded-lg"
            input-class="border-0 w-full focus:outline-none"
          />
          <date-picker
            placeholder="End"
            :format="customData"
            v-model="end"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
            input-class="border-0 w-full focus:outline-none"
          />
          <p class="text-center text-red-500 text-xs mt-2">
            {{ error.date }}
          </p>
        </div>
      </div>
      <div class="flex items-end justify-end">
        <button
          class="bg-brand-primary px-3 text-white py-1 flex items-center justify-between rounded-md"
          @click.prevent="save"
        >
          Save
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'
export default {
  data() {
    return {
      role: '',
      company: '',
      period: '',
      start: '',
      end: '',
      desc: '',
      error: {
        role: '',
        company: '',
        period: '',
        date: '',
        desc: '',
      },
    }
  },
  props: {
    experiences: {
      type: Array,
      required: true,
    },
  },
  computed: {
    listExperiences: function () {
      return this.experiences
    },
  },
  methods: {
    ...mapActions(['addExperience', 'getCurrentProfile']),
    customData(date) {
      return moment(date).format('MMMM Do YYYY')
    },
    async save() {
      if (this.role === '') {
        this.error.role = 'Job title is required'
        setTimeout(() => {
          this.error.role = ''
        }, 1000)
      } else if (this.company === '') {
        this.error.company = 'Company name is required'
        setTimeout(() => {
          this.error.company = ''
        }, 1000)
      } else if (this.period === '') {
        this.error.period = 'Employment type is required'
        setTimeout(() => {
          this.error.period = ''
        }, 1000)
      } else if (this.desc === '') {
        this.error.desc = 'Job description is required'
        setTimeout(() => {
          this.error.date = ''
        }, 1000)
      } else if (this.start === '' || this.end === '') {
        this.error.date = 'Date is required'
        setTimeout(() => {
          this.error.date = ''
        }, 1000)
      } else {
        const payload = {
          role: this.role,
          company: this.company,
          period: this.period,
          start: this.start,
          end: this.end,
          desc: this.desc,
        }
        this.$store.commit('educationInfo', {
          experiences: this.listExperiences,
        })
        await this.addExperience(payload)
        this.$modal.hide('add-experience-modal')
        await this.getCurrentProfile()
      }
    },
  },
  mounted() {
    this.$root.$on('addExperience', () => {
      this.$modal.show('add-experience-modal')
      // console.log('show modal')
      // console.log('editableProfile', this.experience)
    })
  },
}
</script>
