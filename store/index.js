import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import db from '@/plugins/firebase.client.js'

export const strict = false

export const state = () => ({
  next: false,
  profile: [],
  completeProfile: [],
  contactInfo: [],
  educationInfo: [],
  userId: '',
  errorMsg: '',
  currentProfile: [],
})

export const mutations = {
  enableNext: (state, payload) => {
    state.next = payload
  },
  profile: (state, payload) => {
    state.profile = payload
  },
  completeProfile: (state, payload) => {
    state.completeProfile = payload
  },
  contactInfo: (state, payload) => {
    state.contactInfo = payload
  },
  educationInfo: (state, payload) => {
    state.educationInfo = payload
  },
  userId: (state, payload) => {
    state.userId = payload
  },
  errorMsg: (state, payload) => {
    state.errorMsg = payload
  },
  currentProfile: (state, payload) => {
    state.currentProfile = JSON.parse(JSON.stringify(payload))
  },
}
export const actions = {
  async postRegister({ getters, commit }) {
    /*  console.log(
      getters.profile,
      getters.completeProfile,
      getters.contactInfo,
      getters.educationInfo
    ) */
    const { email, password, firstName, lastName } = getters.profile
    const { about, title, tags, size, image } = getters.completeProfile
    const { phone, address, country, region } = getters.contactInfo
    const { educations, experiences } = getters.educationInfo
    const firebaseAuth = await firebase.auth()
    await firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(async (createUser) => {
        const result = await createUser
        commit('userId', result.user.uid)
        db.collection('volunteers')
          .doc(result.user.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            about: about,
            title: title,
            tags: tags,
            size: size,
            image: image,
            phone: phone,
            address: address,
            country: country,
            region: region,
            educations: educations,
            experiences: experiences,
          })
          .then(() => {
            console.log('Document successfully written!')
          })
          .catch((error) => {
            const errorMessage = error.message
            console.log('errorMessage', errorMessage)
            commit('errorMsg', errorMessage)
          })
        // this.$root.$emit('next')
      })
      .catch((error) => {
        // var errorCode = error.code;
        const errorMessage = error.message
        console.log('errorMessage', errorMessage)
        commit('errorMsg', errorMessage)
        // ..
      })
  },
  async postLogin({ getters, commit }) {
    const { email, password } = getters.profile

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        if (firebase.auth().currentUser.uid) {
          commit('userId', firebase.auth().currentUser.uid)
        }
      })
      .catch((error) => {
        // var errorCode = error.code;
        const errorMessage = error.message
        commit('errorMsg', errorMessage)
      })
  },
  async signOut() {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Sign-out successful.')
        localStorage.removeItem('profile')
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      })
  },
  async getCurrentProfile({ commit }) {
    const dataBase = await db
      .collection('volunteers')
      .doc(firebase.auth().currentUser.uid)
    dataBase
      .get()
      .then((doc) => {
        if (doc.exists) {
          // console.log('data:', doc.data())
          commit('currentProfile', doc.data())
          localStorage.setItem('profile', JSON.stringify(doc.data()))
        } else {
          console.log('No data!')
        }
      })
      .catch((error) => {
        console.log('Error getting data:', error)
      })
  },
  async addExperience({ getters, dispatch }, payload) {
    const { experiences } = getters.educationInfo
    experiences.push(payload)
    console.log(experiences)
    const dataBase = await db
      .collection('volunteers')
      .doc(firebase.auth().currentUser.uid)

    dataBase
      .update({
        experiences: experiences,
      })
      .then((doc) => {
        dispatch('getCurrentProfile')
        // console.log('data:', doc.data())
      })
  },
  async updateExperience({ getters, dispatch }, data) {
    const { experiences } = getters.educationInfo
    // console.log(experiences.findIndex(data.index))
    const index = data.index
    const payload = {
      role: data.role,
      company: data.company,
      period: data.period,
      start: data.start,
      end: data.end,
      desc: data.desc,
    }
    experiences.splice(index, 1, payload)
    const dataBase = await db
      .collection('volunteers')
      .doc(firebase.auth().currentUser.uid)

    dataBase
      .update({
        experiences: experiences,
      })
      .then((doc) => {
        dispatch('getCurrentProfile')
        // console.log('data:', doc.data())
      })
  },
  async deleteExperience({ getters, dispatch }, index) {
    console.log(index)
    const { experiences } = getters.educationInfo
    if (index > 0) {
      experiences.splice(index, 1)
    } else {
      experiences.shift()
    }
    // console.log(experiences)
    const dataBase = await db
      .collection('volunteers')
      .doc(firebase.auth().currentUser.uid)

    dataBase
      .update({
        experiences: experiences,
      })
      .then((doc) => {
        dispatch('getCurrentProfile')
        // console.log('data:', doc.data())
      })
  },

  async addEducation({ getters, dispatch }, payload) {
    const { educations } = getters.educationInfo
    console.log(educations)
    educations.push(payload)
    const dataBase = await db
      .collection('volunteers')
      .doc(firebase.auth().currentUser.uid)

    dataBase
      .update({
        educations: educations,
      })
      .then((doc) => {
        dispatch('getCurrentProfile')
        // console.log('data:', doc.data())
      })
  },

  async updateEducation({ getters, dispatch }, data) {
    const { educations } = getters.educationInfo
    // console.log(experiences.findIndex(data.index))
    const index = data.index
    const payload = {
      school: data.school,
      program: data.program,
      start: data.start,
      end: data.end,
    }
    educations.splice(index, 1, payload)
    const dataBase = await db
      .collection('volunteers')
      .doc(firebase.auth().currentUser.uid)

    dataBase
      .update({
        educations: educations,
      })
      .then((doc) => {
        dispatch('getCurrentProfile')
      })
  },

  async deleteEducation({ getters, dispatch }, index) {
    const { educations } = getters.educationInfo
    if (index > 0) {
      educations.splice(index, 1)
    } else {
      educations.shift()
    }

    const dataBase = await db
      .collection('volunteers')
      .doc(firebase.auth().currentUser.uid)

    dataBase
      .update({
        educations: educations,
      })
      .then((doc) => {
        dispatch('getCurrentProfile')
        // console.log('data:', doc.data())
      })
  },
}
export const getters = {
  next(state) {
    return state.next
  },
  profile(state) {
    return state.profile
  },
  completeProfile(state) {
    return state.completeProfile
  },
  contactInfo(state) {
    return state.contactInfo
  },
  educationInfo(state) {
    return JSON.parse(JSON.stringify(state.educationInfo))
  },
  userId(state) {
    return state.userId
  },
  errorMsg(state) {
    return state.errorMsg
  },
  currentProfile(state) {
    return state.currentProfile
  },
}
