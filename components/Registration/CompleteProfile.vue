<template>
  <div class="items-center xl:items-start justify-center xl:justify-start">
    <div class="pt-4 w-full lg:w-1/2 md:px-10 flex items-center">
      <div class="max-w-lg mx-auto w-11/12 mb-6">
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
              class="h-10 w-10 bg-brand-primary flex items-center justify-center rounded-full mx-auto"
            >
              <span class="text-white">2</span>
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
        <form class="grid grid-flow-row gap-4 pb-3">
          <div v-if="showprofile" class="w-40 text-left">
            <label class="mb-4">Upload Profile picture</label>
            <img v-if="!image2" src="/profile.png" alt="" @click="upload" />
            <img v-else :src="image2" alt="" class="w-40 text-left" />

            <input
              id="input"
              ref="input"
              type="file"
              accept="image/*"
              style="display: none"
              @change="uploader"
            />
            <!--<button
              id="select-file"
              @click="upload"
              class="bg-brand-primary py-2 px-6 rounded-md mt-3 w-full"
            >
              Upload profile picture
            </button>-->
          </div>

          <div v-show="showcrop" class="croper flex flex-col text-left">
            <div ref="crop" class="w-full bg-cover h-72">
              <vue-croppie
                ref="croppieRef"
                :enable-exif="true"
                :enable-resize="false"
                :enable-orientation="true"
                :boundary="{ width: 300, height: 300 }"
                :viewport="{ width: 200, height: 200, type: 'circle' }"
                :show-zoomer="false"
              ></vue-croppie>

              <img v-bind:src="cropped" />
            </div>
            <button
              class="button bg-brand-primary text-white px-3 py-1 bg-pro mt-4 w-20 rounded-md"
              @click.prevent="crop"
            >
              Crop
            </button>
          </div>

          <div class="">
            <label class="text-lg pl-1" for="about you">About you</label>
            <textarea
              id="about you"
              name=""
              v-model="register.about"
              placeholder="Tell us a summary about who you are"
              class="w-full p-3 rounded-2xl border focus:bg-white visited:bg-white focus:border-brand-primary focus:outline-none"
              cols="20"
              rows="5"
            ></textarea>
          </div>

          <div class="">
            <label class="text-lg pl-1" for="title">Title</label>
            <input
              id="title"
              v-model="register.title"
              class="border px-2 py-3 rounded-md w-full focus:bg-white focus:border-brand-primary focus:outline-none"
              type="text"
              placeholder="Product Designer"
            />
          </div>

          <div class="">
            <label class="text-lg pl-1" for="title">Skills</label>
            <div
              class="tags border flex flex-wrap items-center gap-2 px-4 py-3 rounded-md w-full peer-focus:bg-white peer-focus:border-brand-primary focus:outline-none"
            >
              <div
                v-for="(tag, index) in register.tags"
                :key="tag"
                class="bg-brand-acccentLight tag flex-grow border border-brand-primary px-3 mr-3 py-1 rounded-md text-gray-700"
              >
                <span class="mr-2">{{ tag }}</span>
                <span
                  class="cursor-pointer text-right"
                  @click.prevent="removeTagValue(index)"
                  >x</span
                >
              </div>
              <input
                id="title"
                v-model="tagvalue"
                class="peer focus:outline-none flex-grow"
                type="text"
                placeholder="Product Designer"
                @keydown.enter.prevent="addTagValue"
              />
            </div>

            <small>*Main skills first then additional skills</small>
          </div>
          <div>
            <label for="shirt">T-Shirt size: </label>
            <select
              id=""
              name="shirt"
              v-model="register.size"
              class="border px-3 py-1 ml-2 rounded-md"
            >
              <option value="sm">small</option>
              <option value="m">medium</option>
              <option value="l">Large</option>
              <option value="xl">X Large</option>
            </select>
          </div>
          <div>
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
  name: 'CompleteProfile',
  data() {
    return {
      register: {
        about: '',
        title: '',
        size: '',
        tags: ['designer'],
      },
      error: {
        about: '',
        title: '',
        size: '',
        tags: ['designer'],
      },
      image: '',
      showcrop: false,
      showprofile: true,
      image2: '',
      tagvalue: '',
    }
  },
  methods: {
    upload() {
      this.$refs.input.click()
    },
    uploader(event) {
      const files = event.target.files
      this.files = files[0]
      const fileName = files[0].name
      if (fileName.lastIndexOf('.') <= 0) {
        return alert('Add a valid file')
      } else {
        this.image = window.URL.createObjectURL(files[0])
        this.loadcrop()
      }
    },
    loadcrop() {
      this.showcrop = true
      this.$refs.croppieRef.bind({
        url: this.image,
      })
    },
    crop() {
      const options = {
        //  type: 'blob',
        format: 'png',
        size: {
          width: 150,
        },
      }
      this.$refs.croppieRef.result(options, (output) => {
        this.image2 = output
        this.showcrop = false
        this.image = ''
        this.showprofile = true
      })
    },
    addTagValue() {
      if (this.tagvalue !== '') {
        this.register.tags.push(this.tagvalue)
      }
      this.tagvalue = ''
    },
    removeTagValue(index) {
      console.log('target', index)
      //  console.log('deleted')
      if (this.tagvalue === '') {
        this.register.tags.splice(index, 1)
      }
    },
    submit() {
      this.$root.$emit('next')
      if (this.register.about === '') {
        this.error.about = 'About is required'
        setTimeout(() => {
          this.error.about = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      }
      if (this.register.title === '') {
        this.error.title = 'Title is required'
        setTimeout(() => {
          this.error.title = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      }
      if (this.register.tags === ['']) {
        this.error.tags = 'Skills is required'
        setTimeout(() => {
          this.error.tags = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      }
      if (this.register.size === ['']) {
        this.error.size = 'Size is required'
        setTimeout(() => {
          this.error.size = ''
        }, 1000)
        this.loading = false
        this.$store.commit('enableNext', false)
      } else {
        this.$store.commit('enableNext', true)

        const payload = {
          about: this.register.about,
          title: this.register.title,
          tags: this.register.tags,
          size: this.register.size,
          image: this.image2,
        }
        this.$store.commit('completeProfile', payload)
      }
    },
  },
  created() {
    this.$store.commit('enableNext', false)
    console.log(this.register.about)
  },
}
</script>

<style scope>
.croppie-container .cr-boundary {
  margin: 0 !important;
}
.tag {
  display: flex;
  justify-content: space-between;
}
</style>
