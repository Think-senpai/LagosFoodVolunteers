<template>
  <modal name="update-education-modal" width="500" height="500">
    <div class="flex flex-col px-6 py-6">
      <h3 class="font-medium text-black">Add Education</h3>
      <div class="w-full mt-6">
        <div class="mb-4">
          <label>School</label>
          <input
            type="text"
            id="education"
            placeholder="Enter school"
            v-model="editableEdu.school"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
        <div class="mb-4">
          <label>Program</label>
          <input
            type="text"
            id="education"
            v-model="editableEdu.program"
            placeholder="Enter program of study"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
        <!-- <div class="mb-4">
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
        </div>-->
      </div>
      <div class="flex items-end justify-end">
        <button
          class="bg-brand-primary px-3 text-white py-1 flex items-center justify-between rounded-md"
          @click.prevent="save()"
        >
          Save
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    editableEducation: {
      type: Object,
      required: false,
    },
    index: {
      type: String,
      required: false,
    },
  },
  computed: {
    editableEdu: function () {
      return this.editableEducation
    },
    idx: function () {
      return this.index
    },
  },
  mounted() {
    this.$root.$on('updateEducations', () => {
      this.$modal.show('update-education-modal')
      // console.log('show modal')
    })
  },
  methods: {
    ...mapActions(['updateEducation']),
    async save() {
      const data = {
        school: this.editableEdu.school,
        program: this.editableEdu.program,
        start: this.editableEdu.start,
        end: this.editableEdu.end,
        index: this.idx,
      }
      await this.updateEducation(data)
      this.$modal.hide('update-education-modal')
    },
  },
}
</script>
