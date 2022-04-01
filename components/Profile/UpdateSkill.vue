<template>
  <modal name="update-skill-modal" width="500" height="400">
    <div class="flex flex-col px-6 py-6">
      <h3 class="font-medium text-black">Edit Skill</h3>
      <div class="w-full mt-3">
        <div class="mb-4" v-for="(tag, index) in updateSkill" :key="index">
          <input
            type="text"
            v-model="updateSkill[index]"
            id="experience"
            placeholder="skills"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
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
    </div>
  </modal>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    skills: {
      type: Array,
      required: false,
    },
  },
  computed: {
    updateSkill: function () {
      return this.skills
    },
  },
  mounted() {
    this.$root.$on('updateSkill', () => {
      this.$modal.show('update-skill-modal')
    })
  },
  methods: {
    ...mapActions(['updateSkills']),
    async save() {
      const data = {
        tags: this.updateSkill,
      }
      await this.updateSkills(data)
      this.$modal.hide('update-skill-modal')
    },
  },
}
</script>
