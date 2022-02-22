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

          <div v-show="showcrop" class="croper">
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
            <button class="button" @click="crop">Next</button>
          </div>

          <div class="">
            <label class="text-lg pl-1" for="about you">About you</label>
            <textarea
              id="about you"
              name=""
              placeholder="Tell us a summary about who you are"
              class="w-full p-3 rounded-2xl bg-gray-300 border focus:bg-white visited:bg-white focus:border-brand-primary focus:outline-none"
              cols="20"
              rows="5"
            ></textarea>
          </div>

          <div class="">
            <label class="text-lg pl-1" for="title">Title</label>
            <input
              id="title"
              v-model="lastname"
              class="border bg-gray-300 px-2 py-3 rounded-md w-full focus:bg-white focus:border-brand-primary focus:outline-none"
              type="text"
              placeholder="Product Designer"
            />
          </div>

          <div class="">
            <label class="text-lg pl-1" for="title">Skills</label>
            <div
              class="tags bg-gray-300 border px-4 py-3 rounded-md w-full peer-focus:bg-white peer-focus:border-brand-primary focus:outline-none"
            >
              <span
                v-for="tag in tags"
                :key="tag"
                class="bg-brand-acccentLight border border-brand-primary px-3 mr-3 py-1 rounded-md text-gray-700"
                >{{ tag }}
                <span class="cursor-pointer">x</span>
              </span>
              <input
                id="title"
                v-model="tagvalue"
                class="peer focus:outline-none bg-gray-300"
                type="text"
                placeholder="Product Designer"
                @keydown.enter.prevent="addTagValue"
                @keydown.delete.prevent="removeTagValue(e)"
              />
            </div>

            <small>*Main skills first then additional skills</small>
          </div>
          <div class="">
            <label for="shirt">T-Shirt size</label>
            <select id="" name="shirt">
              <option value="sm">small</option>
              <option value="m">medium</option>
              <option value="l">Large</option>
              <option value="xl">X Large</option>
            </select>
          </div>
          <div>
            <button
              class="btn bg-brand-primary text-white tracking-wide py-4 w-full mt-6"
              @click.prevent="submit"
            >
              Continue
            </button>
          </div>
          <!--<p class="mt-4 text-center text-sm font-light text-gray-800">
            Have an account?
            <span class="font-semibold text-brand-primary">login</span>
          </p>

          <div class="mt-4 text-center mx-auto">
            <p>or Continue with</p>
            <div class="mt-4 mb-3 flex">
              <div
                class="bg-red-300 px-2 md:px-4 py-2 rounded-md text-red-900 mx-1 sm:mx-3 text-sm font-medium"
              >
                Google
              </div>
              <div
                class="bg-blue-400 px-2 md:px-4 py-2 rounded-md text-white mx-1 sm:mx-3 text-sm font-medium"
              >
                Linkedlin
              </div>
              <div
                class="bg-blue-900 px-2 md:px-4 py-2 rounded-md text-white mx-1 sm:mx-3 text-sm font-medium"
              >
                Facebook
              </div>
            </div>
          </div>-->
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
      image: '',
      showcrop: false,
      showprofile: true,
      image2: '',
      tagvalue: '',
      tags: [],
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
      if (this.addTagValue !== '') {
        this.tags.push(this.tagvalue)
      }
      this.tagvalue = ''
    },
    removeTagValue(e) {
      console.log('target', e.target)
      //  console.log('deleted')
      if (this.tagvalue === '') {
        this.tags.pop()
      }
    },
    submit() {
      this.$root.$emit('next')
    },
  },
}
</script>
