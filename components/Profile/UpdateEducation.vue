<template>
  <modal name="update-education-modal">
    <div class="flex flex-col px-6 py-6">
      <h3 class="font-medium text-black">Add Education</h3>
      <div class="w-full mt-6">
        <div class="mb-4">
          <label>School</label>
          <input
            type="text"
            id="education"
            placeholder="Enter school"
            :value="editableEducation.school"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
        <div class="mb-4">
          <label>Program</label>
          <input
            type="text"
            id="education"
            :value="editableEducation.program"
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
        >
          Save
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  methods: {},
  props: {
    editableEducation: {
      type: Object,
      required: false,
    },
  },
  mounted() {
    this.$root.$on('updateEducation', () => {
      this.$modal.show('update-education-modal')
      // console.log('show modal')
    })
  },
}
</script>
