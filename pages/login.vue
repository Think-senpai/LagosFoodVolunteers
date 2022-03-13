<template>
  <div class="w-full overflow-hidden">
    <div class="items-center xl:items-start justify-center xl:justify-start">
      <div class="pt-4 w-full lg:w-1/2 md:px-10 flex items-center">
        <div class="max-w-lg mx-auto w-11/12 mb-4">
          <h1 class="text-xl md:text-3xl font-bold text-gray-800 mt-4">
            Log in to Lagos Food Bank
          </h1>
          <p class="text-gray-600 leading-tight mt-2">
            Addresing the problems of nutrition in our beloved state.
          </p>
          <form class="grid grid-flow-row gap-4 pb-3 mt-12">
            <div>
              <div class="w-full mt-3">
                <div>
                  <div>
                    <label for="email">Email Address</label><br />
                    <input
                      type="email"
                      id="email"
                      v-model="login.email"
                      placeholder="Enter your email"
                      v-bind:class="
                        error.email
                          ? 'ring ring-red-500 focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg'
                          : 'focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg'
                      "
                    />
                  </div>
                  <p class="text-center text-red-500 text-xs mt-2">
                    {{ error.email }}
                  </p>
                </div>
              </div>

              <div class="w-full mt-3">
                <div>
                  <div>
                    <label for="password">Password</label><br />
                    <input
                      type="password"
                      id="password"
                      v-model="login.password"
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
                  <p>{{ errorMsg && errorMsg.slice(10) }}</p>
                </div>
              </div>

              <button
                class="btn bg-brand-primary text-white tracking-wide py-4 w-full mt-10"
                @click.prevent="submit"
              >
                <div class="Loading" v-if="loading">
                  <Spinner />
                </div>
                <div v-else>Log In</div>
              </button>
            </div>
            <p class="mt-4 text-left text-gray-500 underline">
              Forget Password?
            </p>
            <p class="mt-4 text-center text-sm font-light text-gray-800">
              Don't have an account?
              <NuxtLink to="/register" class="font-semibold text-brand-primary"
                >Register</NuxtLink
              >
            </p>

            <div class="mt-4 text-center mx-auto">
              <p>or Continue with</p>
              <div class="mt-4 mb-3 flex">
                <div
                  class="bg-red-300 px-2 md:px-4 py-2 rounded-md text-red-900 mx-1 sm:mx-3 text-sm font-medium cursor-pointer"
                >
                  Google
                </div>
                <div
                  class="bg-blue-400 px-2 md:px-4 py-2 rounded-md text-white mx-1 sm:mx-3 text-sm font-medium cursor-pointer"
                >
                  Linkedlin
                </div>
                <div
                  class="bg-blue-900 px-2 md:px-4 py-2 rounded-md text-white mx-1 sm:mx-3 text-sm font-medium cursor-pointer"
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Spinner from '@/components/Spinner'
export default {
  layout: 'auth',
  component: {
    Spinner,
  },
  data() {
    return {
      loding: false,
      login: {
        email: '',
        password: '',
      },
      error: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      errorMsg: 'errorMsg',
    }),
  },
  methods: {
    ...mapActions(['postLogin']),
    async submit() {
      this.loading = true
      if (this.login.email === '') {
        this.error.email = 'Email is required'
        setTimeout(() => {
          this.error.email = ''
        }, 1000)
        this.loading = false
      } else if (this.login.password === '') {
        this.error.password = 'password is required'
        setTimeout(() => {
          this.error.password = ''
        }, 1000)
        this.loading = false
      } else {
        const payload = {
          email: this.login.email,
          password: this.login.password,
        }
        this.$store.commit('profile', payload)
        await this.postLogin()

        if (this.userId) {
          this.$router.push('/profile')
          this.loading = false
        }
        if (this.errorMsg) {
          this.loading = false
        }
      }
    },
  },
}
</script>

<style scope>
.Loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
