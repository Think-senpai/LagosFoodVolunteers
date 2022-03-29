<template>
  <modal name="update-about-modal" width="500" height="300">
    <div class="flex flex-col px-6 py-6">
      <label class="mb-2">About</label>
      <textarea
        id="about you"
        name=""
        placeholder="Tell us a summary about who you are"
        class="w-full p-3 rounded-2xl border focus:bg-white visited:bg-white focus:border-brand-primary focus:outline-none"
        cols="20"
        v-model="editableAbout.about"
        rows="5"
      ></textarea>
    </div>
    <div class="flex items-end justify-end">
      <button
        class="bg-brand-primary px-3 text-white py-1 flex items-center justify-between rounded-md"
        @click.prevent="save()"
      >
        Save
      </button>
    </div>
  </modal>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    about: {
      type: Object,
      required: false,
    },
  },
  computed: {
    editableAbout: function () {
      return this.about
    },
  },
  mounted() {
    this.$root.$on('updateAbout', () => {
      this.$modal.show('update-about-modal')
    })
  },
  methods: {
    ...mapActions(['updateAbouts']),
    async save() {
      console.log(this.editableAbout.about)
      const data = { about: this.editableAbout.about }
      await this.updateAbouts(data)
      this.$modal.hide('update-about-modal')
    },
  },
}
</script>
