<template>
  <modal name="update-experience-modal">
    <div class="flex flex-col px-6 py-6">
      <h3 class="font-medium text-black">Add Experience</h3>
      <div class="w-full mt-6">
        <div class="mb-4">
          <label>Title</label>
          <input
            type="text"
            id="experience"
            placeholder="Example: Product designer"
            :value="editableExperience.role"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
        <div class="mb-4">
          <label>Company Name</label>
          <input
            type="text"
            id="experience"
            placeholder="Company Name"
            :value="editableExperience.company"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
        <!-- <div class="mb-4">
          <label>Location</label>
          <input
            type="text"
            id="experience"
            :value="editableExperience.company"
            placeholder="Example: Lagos, Nigeria"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>-->
        <div class="mb-4">
          <label>Type of Employment</label>
          <select
            type="text"
            id="experience"
            placeholder="Enter employment type"
            :value="editableExperience.period"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          >
            <option selected disabled>select employment type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
        </div>
        <div class="mb-4">
          <label>Description</label>
          <textarea
            id="about you"
            name=""
            :value="editableExperience.desc"
            placeholder="Tell us a summary about who you are"
            class="w-full p-3 rounded-2xl border focus:bg-white visited:bg-white focus:border-brand-primary focus:outline-none"
            cols="20"
            rows="5"
          ></textarea>
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
    editableExperience: {
      type: Object,
      required: false,
    },
  },
  mounted() {
    this.$root.$on('updateExperience', () => {
      this.$modal.show('update-experience-modal')
      // console.log('show modal')
    })
    console.log('editableExperience', this.editableExperience)
  },
}
</script>
