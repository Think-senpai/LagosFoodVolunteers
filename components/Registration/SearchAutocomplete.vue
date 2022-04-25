<template>
  <div class="autocomplete">
    <input
      id="title"
      type="text"
      class="peer focus:outline-none flex-grow"
      v-model="vModel"
      @input="onChange"
    />
    <ul class="autocomplete-results" v-show="isOpen">
      <li
        class="autocomplete-result"
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchAutocomplete',
  props: {
    skills: {
      type: Array,
      required: false,
      default: () => [],
    },
    model: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      search: '',
      results: [],
      isOpen: false,
    }
  },
  computed: {
    vModel: function () {
      return this.model
    },
  },
  mounted() {
    console.log(this.skills)
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    filterResults() {
      this.results = this.skills.filter(
        (skill) => skill.toLowerCase().indexOf(this.vModel.toLowerCase()) > -1
      )
    },
    onChange() {
      this.filterResults()
      this.isOpen = true
    },
    setResult(result) {
      this.vModel = result
      this.isOpen = false
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    },
  },
}
</script>

<style scoped>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  min-height: 1em;
  max-height: 6em;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
