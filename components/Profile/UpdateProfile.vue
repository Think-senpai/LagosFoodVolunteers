<template>
  <modal name="update-profile-modal" width="500" height="500">
    <div class="flex flex-col px-6 py-6">
      <h3 class="font-medium text-black">Edit Profile Details</h3>
      <div class="flex items-center justify-center mt-6">
        <div v-if="showprofileImage">
          <img
            v-if="!updateImage"
            class="w-32 text-center"
            src="/profile.png"
            alt=""
            @click="upload"
          />
          <img
            v-else
            :src="updateImage"
            class="rounded-full w-28 text-center"
            alt=""
          />
          <input
            id="input"
            ref="input"
            type="file"
            accept="image/*"
            style="display: none"
            @change="uploader"
          />
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

        <div class="cursor-pointer mt-10" @click="upload">
          <img :src="require('@/assets/icon/edit.svg')" alt="" />
        </div>
      </div>
      <div class="w-full mt-3">
        <div class="mb-4">
          <label>First Name</label>
          <input
            type="text"
            id="experience"
            placeholder="Example: Product designer"
            v-model="updateProfile.firstName"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
        <div class="mb-4">
          <label>Last Name</label>
          <input
            type="text"
            id="experience"
            placeholder="Example: Product designer"
            v-model="updateProfile.lastName"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
        <div class="mb-4">
          <label>Title</label>
          <input
            type="text"
            id="experience"
            placeholder="Example: Product designer"
            v-model="updateProfile.title"
            class="border focus:bg-white focus:outline-none shadow-sm py-2 px-4 mt-2 w-full rounded-lg"
          />
        </div>
      </div>
      <div class="flex items-end justify-end">
        <button
          class="bg-brand-primary px-3 text-white py-1 flex items-center justify-between rounded-md"
          @click.prevent="save()"
        >
          Save
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      showcrop: false,
      uploadedImage: '',
      showprofileImage: true,
    }
  },
  props: {
    profile: {
      type: Array,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  computed: {
    updateProfile: function () {
      return this.profile
    },
    updateImage: function () {
      return this.image
    },
  },
  methods: {
    ...mapActions(['updateProfileDetail']),
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
        this.uploadedImage = window.URL.createObjectURL(files[0])
        this.showprofileImage = false
        this.loadcrop()
      }
    },
    loadcrop() {
      this.showcrop = true
      this.$refs.croppieRef.bind({
        url: this.uploadedImage,
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
        this.updateImage = output
        this.showcrop = false
        this.uploadedImage = ''
        this.showprofileImage = true
      })
    },
    async save() {
      const data = {
        firstName: this.updateProfile.firstName,
        lastName: this.updateProfile.lastName,
        title: this.updateProfile.title,
        image: this.updateImage,
      }
      console.log(data)
      await this.updateProfileDetail(data)
      this.$modal.hide('update-profile-modal')
    },
  },
  mounted() {
    this.$root.$on('updateProfile', () => {
      this.$modal.show('update-profile-modal')
    })
    console.log(this.updateProfile)
  },
}
</script>
