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
        <div class="py-6 hidden sm:flex">
          <div class="text-center mx-2 md:mx-4">
            <div
              class="h-10 w-10 bg-brand-primary flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-white">1</span>
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
              class="h-10 w-10 bg-brand-primaryLight flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-black">3</span>
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
        <div class="mt-6 mb-6 block sm:hidden">
          <p class="text-gray-500 text-md">Sign up with</p>
          <div class="mt-4 mb-3 flex">
            <div
              class="google px-3 py-2 rounded-md mr-3 text-sm font-medium cursor-pointer"
            >
              Google
            </div>
            <div
              class="link px-3 py-2 text-white rounded-md mr-3 text-sm font-medium cursor-pointer"
            >
              Linkedlin
            </div>
            <div
              class="facebook px-3 py-2 text-white rounded-md mr-3 text-sm font-medium cursor-pointer"
            >
              Facebook
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="w-40 border-b-2 mt-1"></span>
            <p class="text-gray-500 text-sm mx-1">or</p>
            <span class="w-40 border-b-2 mt-1"></span>
          </div>
        </div>
        <form class="grid grid-flow-row gap-4 pb-3">
          <div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 w-full">
              <div>
                <label for="firstname">First name</label><br />
                <input
                  type="text"
                  id="firstName"
                  v-model="register.firstName"
                  placeholder="Enter your first name"
                  v-bind:class="
                    error.firstName
                      ? 'ring ring-red-500 focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg'
                      : 'focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg'
                  "
                />
                <p class="text-center text-red-500 text-xs mt-2">
                  {{ error.firstName }}
                </p>
              </div>
              <div>
                <label for="lastname">Last name</label><br />
                <input
                  type="text"
                  id="lastName"
                  v-model="register.lastName"
                  placeholder="Enter your first name"
                  v-bind:class="
                    error.lastName
                      ? 'ring ring-red-500 focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg'
                      : 'focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg'
                  "
                />
                <p class="text-center text-red-500 text-xs mt-2">
                  {{ error.lastName }}
                </p>
              </div>
            </div>
            <div class="w-full mt-3">
              <div>
                <label for="email">Email Address</label><br />
                <input
                  type="email"
                  id="email"
                  v-model="register.email"
                  placeholder="Enter your email"
                  v-bind:class="
                    error.email
                      ? 'ring ring-red-500 focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg'
                      : 'focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg'
                  "
                />
                <p class="text-center text-red-500 text-xs mt-2">
                  {{ error.email }}
                </p>
              </div>
            </div>

            <div class="w-full mt-3">
              <div>
                <label for="password">Password</label><br />
                <div class="relative flex">
                  <input
                    type="password"
                    id="password"
                    v-model="register.password"
                    placeholder="Enter your password"
                    v-bind:class="
                      error.password
                        ? 'ring ring-red-500 focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg'
                        : 'focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg'
                    "
                  />
                </div>

                <p class="text-center text-red-500 text-xs mt-2">
                  {{ error.password }}
                </p>
              </div>
            </div>

            <button
              class="btn bg-brand-primary text-white tracking-wide py-2 sm:py-4 w-full mt-6"
              @click.prevent="submit"
            >
              Create Account
            </button>
          </div>
          <p class="mt-4 text-center text-sm font-light text-gray-800">
            Have an account?
            <NuxtLink
              to="/login"
              class="font-semibold text-brand-primary cursor-pointer"
              >login</NuxtLink
            >
          </p>

          <div class="mt-4 text-center mx-auto hidden sm:block">
            <p class="text-gray-500">or Continue with</p>
            <div class="mt-4 mb-3 flex">
              <div
                class="google px-2 md:px-4 py-2 rounded-md mx-1 sm:mx-3 text-sm font-medium cursor-pointer"
              >
                Google
              </div>
              <div
                class="link px-2 md:px-4 py-2 rounded-md text-white mx-1 sm:mx-3 text-sm font-medium cursor-pointer"
              >
                Linkedlin
              </div>
              <div
                class="facebook px-2 md:px-4 py-2 rounded-md text-white mx-1 sm:mx-3 text-sm font-medium cursor-pointer"
              >
                Facebook
              </div>
            </div>
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
  name: 'Profile',
  data() {
    return {
      loading: false,
      disableButton: true,
      register: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      error: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    submit() {
      this.$root.$emit('next')
      if (this.register.firstName === '') {
        this.error.firstName = 'firstname is required'
        setTimeout(() => {
          this.error.firstName = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      } else if (this.register.lastName === '') {
        this.error.lastName = 'last name is required'
        setTimeout(() => {
          this.error.lastName = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      } else if (this.register.email === '') {
        this.error.email = 'email is required'
        setTimeout(() => {
          this.error.email = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      } else if (this.register.password === '') {
        this.error.password = 'password is required'
        setTimeout(() => {
          this.error.password = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      } else {
        this.$store.commit('enableNext', true)

        const payload = {
          firstName: this.register.firstName,
          lastName: this.register.lastName,
          email: this.register.email,
          password: this.register.password,
        }
        this.$store.commit('profile', payload)
      }
    },
  },
  created() {},
}
</script>

<style scope>
.cover {
  background-image: url(/LFBI-Volunteers5.jpeg);
}
.google {
  background: #fdc5c5;
  color: #f71414;
}
.link {
  background: #5299b8;
}
.facebook {
  background: #1b2768;
}
</style>
