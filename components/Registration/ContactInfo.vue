<template>
  <div class="items-center xl:items-start justify-center xl:justify-start">
    <div class="pt-4 w-full lg:w-1/2 md:px-10 flex items-center">
      <div class="max-w-lg mx-auto w-11/12 mb-4">
        <!--<div>
        <img src="/logo.png" alt="" style="width: 120px" />
      </div>-->
        <h1 class="text-xl md:text-3xl font-bold text-gray-800 mt-4">
          Become a Voluteer
        </h1>
        <p class="text-gray-600 leading-tight mt-2">
          Addresing the problems of nutrition in our beloved state.
        </p>
        <div class="py-6 flex">
          <div class="text-center mx-2 md:mx-4">
            <div
              class="h-10 w-10 bg-brand-primaryLight flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-black">1</span>
            </div>
            <p class="mt-3 text-xs md:text-sm">Personal</p>
          </div>
          <div class="text-center mx-2 md:mx-4">
            <div
              class="h-10 w-10 bg-brand-primaryLight flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-black">2</span>
            </div>
            <p class="mt-3 text-xs md:text-sm text-center">
              Complete your profile
            </p>
          </div>
          <div class="text-center mx-2 md:mx-4">
            <div
              class="h-10 w-10 bg-brand-primary flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-white">3</span>
            </div>
            <p class="mt-3 text-xs md:text-sm">Contact Info</p>
          </div>
          <div class="text-center mx-2 md:mx-4">
            <div
              class="h-10 w-10 bg-brand-primaryLight flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-black">4</span>
            </div>
            <p class="mt-3 text-xs md:text-sm">Education & Expriences</p>
          </div>
        </div>
        <form class="grid grid-flow-row gap-4 pb-3">
          <div>
            <div class="w-full">
              <div>
                <label for="phone">Mobile No</label><br />
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter your mobile no"
                  class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                />
              </div>
            </div>

            <div class="w-full mt-3">
              <div>
                <label for="address">Resident Address</label><br />
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                />
              </div>
            </div>

            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 w-full mt-3 mb-3"
            >
              <div>
                <label for="country">Country</label><br />
                <country-select
                  v-model="country"
                  :country="country"
                  topCountry="US"
                  class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                />
              </div>
              <div>
                <label for="lastname">Region</label><br />
                <region-select
                  v-model="region"
                  :country="country"
                  :region="region"
                  class="bg-gray-300 focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                />
              </div>
            </div>

            <button
              class="btn bg-brand-primary text-white tracking-wide py-4 w-full mt-6"
              @click.prevent="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="w-1/2 hidden lg:block fixed right-0 top-0">
      <img
        class="object-cover h-screen w-full"
        src="@/assets/images/LFBI-Volunteers.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  data() {
    return {
      phone: '',
      address: '',
      country: '',
      region: '',
    }
  },
  methods: {
    submit() {
      this.$root.$emit('next')
    },
  },
}
</script>

<style scope>
.cover {
  background-image: url(/LFBI-Volunteers5.jpeg);
}
</style>
