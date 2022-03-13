<template>
  <div
    class="bg-successful flex h-screen w-full overflow-hidden items-center justify-center"
  >
    <div class="mx-auto pt-6 px-5 md:px-0 md:pt-16">
      <div class="flex items-center justify-between">
        <div class="flex flex-col mr-5">
          <h2 class="text-xl md:text-2xl mb-2 text-center md:text-left">
            Profile successfully created
          </h2>
          <p class="text-gray-500 text-center md:text-left">
            You can now apply for volunteering oppurtunities in lasgidi
          </p>
          <div class="mt-10 md:mt-20 flex items-center flex-col md:flex-row">
            <button
              class="bg-button-1 px-4 py-2 rounded-md flex items-center mr-0 mb-4 md:mr-6 md:mb-0"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Iconly/Bulk/Search">
                  <g id="Search">
                    <ellipse
                      id="Ellipse_746"
                      cx="11.0992"
                      cy="10.6532"
                      rx="8.59922"
                      ry="8.65324"
                      fill="white"
                    />
                    <path
                      id="Path_34202"
                      opacity="0.4"
                      d="M21.1745 21.9553C20.8405 21.9445 20.5228 21.807 20.2853 21.5705L18.2488 19.1902C17.8122 18.7909 17.7765 18.1123 18.1688 17.6689C18.3524 17.4831 18.602 17.3787 18.8624 17.3787C19.1228 17.3787 19.3725 17.4831 19.5561 17.6689L22.1172 19.7181C22.4861 20.0957 22.5999 20.6563 22.4078 21.1492C22.2157 21.6422 21.7535 21.9754 21.2279 22L21.1745 21.9553Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>

              <span class="ml-2 text-white">Search opportunities</span>
            </button>
            <button
              class="bg-button-2 px-8 rounded-md py-2 flex items-center"
              @click.prevent="submit"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.14373 18.7821V15.7152C7.14372 14.9381 7.77567 14.3067 8.55844 14.3018H11.4326C12.2189 14.3018 12.8563 14.9346 12.8563 15.7152V18.7732C12.8562 19.4473 13.404 19.9951 14.0829 20H16.0438C16.9596 20.0023 17.8388 19.6428 18.4872 19.0007C19.1356 18.3586 19.5 17.4868 19.5 16.5775V7.86585C19.5 7.13139 19.1721 6.43471 18.6046 5.9635L11.943 0.674268C10.7785 -0.250877 9.11537 -0.220992 7.98539 0.745384L1.46701 5.9635C0.872741 6.42082 0.517552 7.11956 0.5 7.86585V16.5686C0.5 18.4637 2.04738 20 3.95617 20H5.87229C6.19917 20.0023 6.51349 19.8751 6.74547 19.6464C6.97746 19.4178 7.10793 19.1067 7.10792 18.7821H7.14373Z"
                  fill="#498202"
                />
              </svg>

              <span class="ml-2 text-home">Back to Profile</span>
            </button>
          </div>
        </div>
        <div class="ml-5 hidden md:block">
          <img class="w-60" src="@/assets/images/successful.png" alt="" />
        </div>
      </div>
      <div class="block sm:hidden">
        <img class="w-32 star" src="@/assets/images/star.svg" alt="" />
        <img class="w-32 star1" src="@/assets/images/star1.svg" alt="" />
        <img class="w-32 star2" src="@/assets/images/star2.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProfileSuccessful',
  computed: {
    ...mapGetters({
      userId: 'userId',
    }),
  },
  methods: {
    submit() {
      if (this.userId) {
        this.$router.push('/profile')
      }
    },
  },
}
</script>

<style scope>
.bg-successful {
  background: rgba(73, 130, 2, 0.2);
}
.bg-button-1 {
  background: #498202;
}
.bg-button-2 {
  background: rgba(73, 130, 2, 0.2);
}
.text-home {
  color: #498202;
}
.star {
  position: absolute;
  right: 0;
  bottom: 20px;
}
.star1 {
  position: absolute;
  bottom: 5px;
  right: 90px;
}
.star2 {
  position: absolute;
  right: 0;
  bottom: -20px;
}
</style>
