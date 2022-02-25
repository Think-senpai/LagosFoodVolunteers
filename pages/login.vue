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
                  <label for="email">Email Address</label><br />
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    placeholder="Enter your email"
                    class="focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                  />
                </div>
              </div>

              <div class="w-full mt-3">
                <div>
                  <label for="password">Password</label><br />
                  <input
                    type="password"
                    id="password"
                    v-model="password"
                    placeholder="Enter your password"
                    class="focus:bg-white border focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
                  />
                </div>
              </div>

              <button
                class="btn bg-brand-primary text-white tracking-wide py-4 w-full mt-10"
                @click.prevent="submit"
              >
                Log In
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
export default {}
</script>
