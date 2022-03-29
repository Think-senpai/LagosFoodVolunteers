<template>
  <modal name="update-experience-modal" width="500" height="500">
    <div class="flex flex-col px-6 py-6">
      <h3 class="font-medium text-black">Edit Experience</h3>
      <div class="w-full mt-6">
        <div class="mb-4">
          <label>Title</label>
          <input
            type="text"
            id="experience"
            placeholder="Example: Product designer"
            v-model="editableExp.role"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
        <div class="mb-4">
          <label>Company Name</label>
          <input
            type="text"
            id="experience"
            placeholder="Company Name"
            v-model="editableExp.company"
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
            v-model="editableExp.period"
            placeholder="Enter employment type"
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
            v-model="editableExp.desc"
            placeholder="Tell us a summary about who you are"
            class="w-full p-3 rounded-2xl border focus:bg-white visited:bg-white focus:border-brand-primary focus:outline-none"
            cols="20"
            rows="5"
          ></textarea>
        </div>
        <!-- <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 w-full">
          <date-picker
            placeholder="Start"
            :format="customData"
            v-model="editableExp.start"
            class="border focus:bg-white focus:outline-none py-2 px-4 shadow-sm mt-2 w-full rounded-lg"
            input-class="border-0 w-full focus:outline-none"
          />
          <date-picker
            placeholder="End"
            :format="customData"
            v-model="editableExp.end"
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
    editableExperience: {
      type: Object,
      required: false,
    },
    index: {
      type: String,
      required: false,
    },
  },
  computed: {
    editableExp: function () {
      return this.editableExperience
    },
    idx: function () {
      return this.index
    },
  },
  mounted() {
    this.$root.$on('updateExperiences', () => {
      this.$modal.show('update-experience-modal')
      // console.log('show modal')
    })
    console.log('editableExperience', this.editableExperience)
  },
  methods: {
    ...mapActions(['updateExperience']),
    async save() {
      const data = {
        role: this.editableExp.role,
        company: this.editableExp.company,
        period: this.editableExp.period,
        start: this.editableExp.start,
        end: this.editableExp.end,
        desc: this.editableExp.desc,
        index: this.idx,
      }
      await this.updateExperience(data)
      this.$modal.hide('update-experience-modal')
    },
  },
}
</script>
