<template>
  <div
    class="border-2 border-gray-300 w-full rounded-lg bg-brand-backgroundLight mb-10"
  >
    <div class="px-4 md:px-10 py-6">
      <h2 class="font-medium leading-7">Recent</h2>
      <div class="flex flex-col mt-10">
        <div
          class="flex flex-col items-start mb-10 border-b-2"
          v-for="(recent, index) in recents"
          :key="index"
        >
          <div class="flex flex-row">
            <div class="mr-0 md:mr-10">
              <div class="rounded-full w-12 md:w-20">
                <img :src="generatedImage(recent.image)" class="" alt="" />
              </div>
            </div>
            <div class="flex w-10/12 sm:w-9/12 md:w-full flex-col">
              <div class="hidden md:flex mb-3">
                <div v-for="(skill, idx) in recent.tags" :key="idx">
                  <button
                    class="bg-brand-primaryLight p-2 flex items-center justify-between rounded-md mr-2 md:mr-6"
                  >
                    <span class="text-xs">{{ skill }}</span>
                  </button>
                </div>
              </div>
              <h3 class="font-medium mb-2 mx-2">
                {{ recent.firstName }} {{ recent.lastName }}
              </h3>
              <p class="text-gray-400 mb-6 mx-2 p-2">{{ recent.about }}</p>
              <div class="flex flex-wrap items-center gap-2 md:hidden mb-6">
                <div
                  v-for="(skill, idx) in recent.tags"
                  :key="idx"
                  class="flex justify-between flex-grow"
                >
                  <button
                    class="bg-brand-primaryLight p-2 flex items-center justify-between rounded-md mr-2 md:mr-6"
                  >
                    <span class="text-xs">{{ skill }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-center text-center md:items-start md:text-left mb-6 md:ml-28 w-full"
          >
            <router-link :to="'/profiles/' + index">
              <button
                class="bg-brand-primaryLight border border-green-800 px-2 md:px-3 py-2 flex items-center justify-between rounded-md mr-6"
              >
                <img src="@/assets/icon/Profile.svg" alt="" />
                <span class="text-brand-primary text-sm ml-1"
                  >View profile</span
                >
              </button>
            </router-link>
            <button
              class="bg-brand-primary px-3 py-2 flex items-center justify-between rounded-md"
            >
              <img src="@/assets/icon/Send.svg" alt="" />
              <span class="text-white text-sm ml-1">Contact now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* recents: [
        {
          name: 'James Owai',
          description:
            'I am a junior UI/UX designer looking to make a change in how things are done......',
          skills: ['Designer', 'Developer', 'Researcher'],
          image: require('@/assets/images/james.png'),
        },
        {
          name: 'Buchi Osamudiamen',
          description:
            'I am a junior UI/UX designer looking to make a change in how things are done......',
          skills: ['Designer', 'Developer', 'Researcher'],
          image: require('@/assets/images/buchi.png'),
        },
        {
          name: 'Juliana Davis',
          description:
            'I am a junior UI/UX designer looking to make a change in how things are done......',
          skills: ['Designer', 'Developer', 'Researcher'],
          image: require('@/assets/images/juliana.png'),
        },
        {
          name: 'Shadare Bukola',
          description:
            'I am a junior UI/UX designer looking to make a change in how things are done......',
          skills: ['Designer', 'Developer', 'Researcher'],
          image: require('@/assets/images/shadare.png'),
        },
      ], */
    }
  },
  props: {
    dataBase: {
      type: Array,
      required: false,
    },
  },
  computed: {
    recents: function () {
      return this.dataBase
    },
  },
  methods: {
    generateName() {
      const date = new Date().valueOf()
      let text = ''
      const possibleText =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < 5; i++) {
        text += possibleText.charAt(
          Math.floor(Math.random() * possibleText.length)
        )
      }
      return date + '.' + text + '.jpeg'
    },
    generatedImage(image) {
      const arr = image && image.split(',')
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      const imageName = this.generateName()
      const blob = new Blob([u8arr], { type: 'image/jpeg' })
      const imageFile = new File([blob], imageName, {
        type: 'image/jpeg',
      })
      return window.URL.createObjectURL(imageFile)
    },
  },
}
</script>
