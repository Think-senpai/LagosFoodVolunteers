<template>
  <div class="">
    <nav
      class="fixed color h-16 w-full flex items-center justify-between px-5 xl:px-20 z-200"
    >
      <div></div>
      <div class="flex items-center justify-between">
        <h3 class="text-white hidden md:block mx-2">
          Sign up for our newsletter
        </h3>
        <input
          type="text"
          placeholder="Enter your email"
          class="w-40 md:w-64 full rounded-md px-4 py-2 focus:outline-none"
        />
        <button
          class="bg-brand-primary text-white tracking-wide py-2 px-4 mx-4 rounded-md text-sm"
        >
          Subscribe
        </button>
      </div>
      <div class="hidden md:block">
        <NuxtLink to="/login">
          <button
            class="bg-brand-primary text-white tracking-wide py-2 px-4 mx-4 rounded-md text-sm"
          >
            Login
          </button>
        </NuxtLink>
        <NuxtLink to="/register">
          <button
            class="bg-brand-primary text-white tracking-wide py-2 px-4 mx-4 rounded-md text-sm"
          >
            Sign Up
          </button>
        </NuxtLink>
      </div>
      <!-- Hamburger Menu -->
      <div
        @click="toggleNav"
        :class="`flex justify-center items-center md:hidden menu-btn ${
          nav ? 'open' : ''
        }`"
      >
        <div class="menu-btn-burger"></div>
      </div>
    </nav>

    <nav
      :class="` md:hidden text-white overflow-hidden bg-brand-background transition-all duration-500 ${
        nav ? 'h-30 ' : 'h-0'
      }`"
    >
      <div class="w-11/12 mx-auto mt-20">
        <div class="">
          <img src="@/assets/images/logo.png" class="h-12 mt-16 ml-5" />
        </div>
        <NuxtLink to="/login">
          <button
            class="w-full text-gray-500 py-1.5 rounded-md uppercase focus:outline-none font-bold bg-amber"
          >
            Login
          </button>
        </NuxtLink>
        <NuxtLink to="/register">
          <button
            class="w-full text-gray-500 py-1.5 rounded-md uppercase focus:outline-none font-bold bg-amber"
          >
            Sign Up
          </button>
        </NuxtLink>
        <button
          class="w-full text-gray-500 py-1.5 rounded-md uppercase focus:outline-none font-bold bg-amber"
        >
          Donations
        </button>
        <button
          class="w-full text-gray-500 py-1.5 rounded-md uppercase focus:outline-none font-bold bg-amber"
        >
          Volunteers
        </button>
        <button
          class="w-full text-gray-500 py-1.5 rounded-md uppercase focus:outline-none font-bold bg-amber"
        >
          Opportunities
        </button>
        <button
          class="w-full text-gray-500 py-1.5 rounded-md uppercase focus:outline-none font-bold bg-amber"
        >
          Contact US
        </button>
      </div>
    </nav>
    <div
      :class="`bg-brand-background md:hidden mt-16 ${
        nav ? 'hidden ' : 'block'
      }`"
    >
      <img src="@/assets/images/logo.png" class="h-16 pt-4 mt-16 ml-5" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false,
    }
  },
  methods: {
    toggleNav() {
      this.nav = !this.nav
    },
  },
}
</script>

<style scope>
.color {
  background: #3e3d3d;
}
</style>

<style scoped>
.menu-btn {
  position: relative;
  width: 60px;
  height: 50px;
  cursor: pointer;
}

.menu-btn-burger {
  width: 30px;
  height: 4px;
  background: #fff;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}

.menu-btn-burger::before,
.menu-btn-burger::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 4px;
  background: #fff;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}

.menu-btn-burger::before {
  transform: translateY(-12px);
}
.menu-btn-burger::after {
  transform: translateY(12px);
}

/* Animation */
.menu-btn.open .menu-btn-burger {
  transform: translateX(-40px);
  background: transparent;
}

.menu-btn.open .menu-btn-burger::before {
  transform: rotate(45deg) translate(30px, -30px);
}

.menu-btn.open .menu-btn-burger::after {
  transform: rotate(-45deg) translate(30px, 30px);
}
</style>
