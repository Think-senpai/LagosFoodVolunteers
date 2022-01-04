<template>
  <div class="w-85 m-auto flex h-screen">
    <div class="w-50 pr-24 pl-4 pt-4">
      	<div>
			<img src="/logo.png" alt="" style="width: 120px;" />
		</div>
      <h1 class=" text-5xl font-bold text-gray-800 mt-4">Become a Volunteer</h1>
      <p class=" text-gray-600 leading-tight mt-2">
        Thank you for your desire to join us in our efforts to fight hunger,
        poverty and malnutrition. Thank you for your time, energy, passion and
        resources. Your hard work and dedication are greatly appreciated.
      </p>
      <nav class=" py-6">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </nav>
      <div class=" grid grid-flow-row gap-4">
        <div class="gap-4 grid grid-cols-2">
        <input
          v-model="firstname"
          class="
            border
            px-2
            py-3
            rounded-md
            w-full
            focus:bg-white focus:border-brand-primary focus:outline-none
          "
          type="text"
          placeholder="First Name"
        />
        <input
          v-model="lastname"
          class="
            border
            px-2
            py-3
            rounded-md
            w-full
            focus:bg-white focus:border-brand-primary focus:outline-none
          "
          type="text"
          placeholder="Last Name"
        />
      </div>
      <input
        id=""
        v-model="email"
        class="
          border
          px-2
          py-3
          rounded-md
          w-full
          focus:bg-white focus:border-brand-primary focus:outline-none
        "
        type="email"
        name=""
        placeholder="Email"
      />
      <input
        id=""
        v-model="password"
        class="
          border
          px-2
          py-3
          rounded-md
          w-full
          focus:bg-white focus:border-brand-primary focus:outline-none
        "
        type="password"
        name=""
        placeholder="password"
      />
      <button
        class="btn bg-brand-accent text-brand-primary tracking-wide py-4 w-full mt-6"
        @click.prevent=""
      >
        create account
      </button>
      <p class=" mx-auto text-sm font-light text-gray-800">Have an account? <span class=" font-semibold">login</span></p>
      </div>
      
    </div>
    <div class=" w-50 absolute right-0">
      <img class=" object-cover h-screen w-100 object-center" src="/LFBI-Volunteers5.jpeg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password:''
    }
  },
}
</script>

<style>
.cover {
  background-image: url(/LFBI-Volunteers5.jpeg);
}
</style>