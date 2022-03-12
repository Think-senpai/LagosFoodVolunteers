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
              <img
                :src="recent.image"
                class="rounded-full w-36 md:w-20"
                alt=""
              />
            </div>
            <div class="flex w-10/12 sm:w-9/12 md:w-full flex-col">
              <div class="hidden md:flex mb-3">
                <div v-for="(skill, idx) in recent.skills" :key="idx">
                  <button
                    class="bg-brand-primaryLight p-2 flex items-center justify-between rounded-md mr-2 md:mr-6"
                  >
                    <span class="text-xs">{{ skill }}</span>
                  </button>
                </div>
              </div>
              <h3 class="font-medium mb-2 mx-2">{{ recent.name }}</h3>
              <p class="text-gray-400 mb-6 mx-2">{{ recent.description }}</p>
              <div class="flex md:hidden mb-6">
                <div v-for="(skill, idx) in recent.skills" :key="idx">
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
            <button
              class="bg-brand-primaryLight border border-green-800 px-3 py-2 flex items-center justify-between rounded-md mr-6"
            >
              <img src="@/assets/icon/Profile.svg" alt="" />
              <span class="text-brand-primary text-sm ml-1">View profile</span>
            </button>
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
      recents: [
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
      ],
    }
  },
}
</script>
