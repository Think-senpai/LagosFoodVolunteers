<template>
  <modal name="add-education-modal">
    <div class="flex flex-col px-6 py-6">
      <h3 class="font-medium text-black">Add Education</h3>
      <div class="w-full mt-6">
        <div class="mb-4">
          <label>School</label>
          <input
            type="text"
            id="education"
            v-model="school"
            placeholder="Enter school"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
        <div class="mb-4">
          <label>Program</label>
          <input
            type="text"
            id="education"
            v-model="program"
            placeholder="Enter program of study"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
        <div class="mb-4">
          <label>Start</label>
          <date-picker
            placeholder="Start"
            format="MM/dd/yyyy"
            class="border focus:bg-white focus:outline-none py-2 px-4 shadow-sm mt-2 w-full rounded-lg"
            input-class="border-0 w-full focus:outline-none"
          />
        </div>
        <div class="mb-4">
          <label>End</label>
          <date-picker
            placeholder="End"
            format="MM/dd/yyyy"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
            input-class="border-0 w-full focus:outline-none"
          />
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
      school: '',
      program: '',
      start: '',
      end: '',
    }
  },
  props: {
    educations: {
      type: Object,
      required: true,
    },
  },
  computed: {
    listEducation: function () {
      return this.educations
    },
  },
  methods: {
    ...mapActions(['updateEducation', 'getCurrentProfile']),
    customData(date) {
      return moment(date).format('MMMM Do YYYY')
    },
    async save() {
      this.listEducation.push({
        school: this.school,
        program: this.program,
        start: this.start,
        end: this.end,
      })
      const payload = { educations: this.listEducation }
      this.$store.commit('educationInfo', payload)
      await this.updateEducation()
      this.$modal.hide('add-education-modal')
      await this.getCurrentProfile()
    },
  },
  mounted() {
    this.$root.$on('addEducation', () => {
      this.$modal.show('add-education-modal')
      console.log('show modal')
    })
  },
}
</script>
