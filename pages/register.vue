<template>
  <div class="w-85 m-auto flex">
    <!-- <div class="w-50 pr-24 pl-4 pt-4 h-screen">
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
      <span class=" flex items-center">
        <input id="" type="checkbox" name="">
        <p class=" pl-3 font-light text-sm text-gray-600">I have read the community <a class=" text-brand-primary" href="#">service pledge</a></p>
      </span>
      <button
        class="btn bg-brand-accent text-brand-primary tracking-wide py-4 w-full mt-6"
        @click.prevent=""
      >
        create account
      </button>
      <p class=" mx-auto text-sm font-light text-gray-800">Have an account? <span class=" font-semibold text-brand-primary">login</span></p>
      </div>
      
    </div> -->
     <div class="w-50 pr-24 pl-4 pt-4">
      	<div>
			<img src="/logo.png" alt="" style="width: 120px;" />
		</div>
      <h1 class=" text-3xl font-bold text-gray-800 mt-4">About you</h1>
      <p class=" text-gray-600 leading-tight mt-2">
        we would love to know a little bit more about you.
      </p>
      <nav class=" py-6">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </nav>
      <div class=" grid grid-flow-row gap-4 pb-3">
        <div v-if="showprofile" class="profile mx-auto profile-pic w-45 text-center">
				<img
					v-if="!image2"
					class="profile-pic"
					src="/profile.png"
					alt=""
					@click="upload"
				/>
				<img v-else :src="image2" class="profile-pic" alt="" />

				<input
					id="input"
					ref="input"
					type="file"
					accept="image/*"
					style="display:none"
					@change="uploader"
				/>
				<button id="select-file" @click="upload">Upload profile picture</button>
			</div>

      <div v-show="showcrop" class="croper">
				<div ref="crop" class=" w-full bg-cover h-72">
					<vue-croppie
						ref="croppieRef"
						:enable-exif="true"
						:enable-resize="false"
						:enable-orientation="true"
            :boundary="{ width: 300, height: 300}"
            :viewport="{ width: 200, height: 200, type: 'circle' }"
						:show-zoomer="false"
					></vue-croppie>

					<!-- <img v-bind:src="cropped"> -->
				</div>
				<button class="button" @click="crop">Next</button>
			</div>
       <div>
        <label class=" text-lg pl-1" for="title">Title</label>
        <input
        id="title"
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
          placeholder="Product Designer"
        />
      </div>
      <div class="">
        <label class=" text-lg pl-1" for="about you">About you</label>
      <textarea id="about you" name="" placeholder="Tell us a summary about who you are" class=" w-full p-3 rounded-2xl border focus:bg-white visited:bg-white focus:border-brand-primary focus:outline-none" cols="30" rows="10"></textarea>
      </div>

    
      <div>
        <label class=" text-lg pl-1" for="title">Skills</label>
        <div
            class=" tags
            border
            px-2
            py-3
            rounded-md
            w-full
            peer-focus:bg-white peer-focus:border-brand-primary focus:outline-none">
          <span v-for="tag in tags" :key=tag class="bg-brand-acccentLight border border-brand-primary px-3 py-1 rounded-md text-gray-700 ">{{tag}}
           <span class="cursor-pointer">x</span> 
          </span>
          <input
        id="title"
          v-model="tagvalue"
          class="peer focus:outline-none"
          type="text"
          placeholder="Product Designer"
          @keydown.enter="addTagValue"
          @keydown.delete="removeTagValue"
        />
        </div>
        
        <small>*Main skills first then additional skills</small>
      </div>
      <div>
        <label for="shirt">T-Shirt size</label>
        <select id="" name="shirt">
         <option value="sm">small</option>
         <option value="m">medium</option>
         <option value="l">Large</option>
         <option value="xl">X Large</option>
        </select>
      </div>
      <button
        class="btn bg-brand-accent text-brand-primary tracking-wide py-4 w-full mt-6"
        @click.prevent=""
      >
        continue
      </button>
      <p class=" text-center text-sm font-light text-gray-800">Have an account? <span class=" font-semibold text-brand-primary">login</span></p>
      </div>
      
    </div>
    <div class=" w-50 fixed right-0 top-0">
      <img class=" object-cover h-screen w-100 object-center" src="/LFBI-Volunteers5.jpeg" alt="">
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapGetters } from 'vuex'
import EducationExprience from '@/components/Registration/EducationExprience'
import Profile from '@/components/Registration/Profile'
import CompleteProfile from '@/components/Registration/CompleteProfile'
import ContactInfo from '@/components/Registration/ContactInfo'
import ProfileSuccessful from '@/components/Registration/ProfileSuccessful'
=======
>>>>>>> 6be8659041b83b09af120d84481d4acfcef09924
export default {
  layout: 'auth',
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password:'',
      image: '',
      showcrop: false,
      showprofile: true,
      image2:'',
      tagvalue: '',
      tags:['designer'],
    }
  },
<<<<<<< HEAD
  computed: {
    ...mapGetters({
      enableNext: 'next',
    }),
  },
  mounted() {
    this.$root.$on('next', () => {
      if (this.enableNext) {
        this.currentPage++
      }
    })
  },
  created() {
    // console.log(this.enableNext)
  },
=======
  methods:{
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
			
		},crop() {
			const options = {
				//  type: 'blob',
				format: 'png',
				size: {
					width: 150,
				},
			}
			this.$refs.croppieRef.result(options, output => {
				this.image2 = output
				this.showcrop = false
				this.image = ''
				this.showprofile = true
			})
		},addTagValue(){
      if(this.addTagValue !== ''){
        this.tags.push(this.tagvalue)
      }
      this.tagvalue = ''
    }, removeTagValue(){
      console.log('deleted')
      if(this.tagvalue === ''){
        this.tags.pop()
      }
      
    }
  }
>>>>>>> 6be8659041b83b09af120d84481d4acfcef09924
}
</script>

<style>
.cover {
  background-image: url(/LFBI-Volunteers5.jpeg);
}
</style>