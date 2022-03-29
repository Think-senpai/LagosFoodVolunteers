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
                  v-model="register.phone"
                  placeholder="Enter your mobile no"
                  class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                />
                <p class="text-center text-red-500 text-xs mt-2">
                  {{ error.phone }}
                </p>
              </div>
            </div>

            <div class="w-full mt-3">
              <div>
                <label for="address">Resident Address</label><br />
                <input
                  type="text"
                  id="address"
                  v-model="register.address"
                  placeholder="Enter your address"
                  class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                />
                <p class="text-center text-red-500 text-xs mt-2">
                  {{ error.address }}
                </p>
              </div>
            </div>

            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 w-full mt-3 mb-3"
            >
              <div>
                <label for="country">Country</label><br />
                <country-select
                  v-model="register.country"
                  :country="register.country"
                  topCountry="NG"
                  class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                />
                <p class="text-center text-red-500 text-xs mt-2">
                  {{ error.country }}
                </p>
              </div>
              <div>
                <label for="lastname">Region</label><br />
                <region-select
                  v-model="register.region"
                  :country="register.country"
                  :region="register.region"
                  defaultRegion="NG"
                  class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                />
                <p class="text-center text-red-500 text-xs mt-2">
                  {{ error.region }}
                </p>
              </div>
            </div>

            <button
              class="btn bg-brand-primary text-white tracking-wide py-2 sm:py-4 w-full mt-6"
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
      loading: false,
      register: {
        phone: '',
        address: '',
        country: '',
        region: '',
      },
      error: {
        phone: '',
        address: '',
        country: '',
        region: '',
      },
    }
  },
  methods: {
    validatePhoneNo(number) {
      const PHONENO_REGEX =
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/ //eslint-disable-line
      return PHONENO_REGEX.test(number)
    },
    submit() {
      this.$root.$emit('next')
      if (this.register.phone === '') {
        this.error.phone = 'Phone no is required'
        setTimeout(() => {
          this.error.phone = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      } else if (!this.validatePhoneNo(this.register.phone)) {
        this.error.phone = 'Invalid phone number'
        setTimeout(() => {
          this.error.phone = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      } else if (this.register.address === '') {
        this.error.address = 'Address no is required'
        setTimeout(() => {
          this.error.address = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      } else if (this.register.country === '') {
        this.error.country = 'Country is required'
        setTimeout(() => {
          this.error.country = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      } else if (this.register.region === '') {
        this.error.region = 'Region is required'
        setTimeout(() => {
          this.error.region = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      } else {
        this.$store.commit('enableNext', true)
        const payload = {
          phone: this.register.phone,
          address: this.register.address,
          country: this.register.country,
          region: this.register.region,
        }
        this.$store.commit('contactInfo', payload)
      }
    },
  },
  created() {
    this.$store.commit('enableNext', false)
  },
}
</script>

<style scope>
.cover {
  background-image: url(/LFBI-Volunteers5.jpeg);
}
</style>
