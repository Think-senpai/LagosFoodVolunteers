import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import db from '@/plugins/firebase.client.js'

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
    state.currentProfile = payload
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
  async getCurrentProfile({ commit }, user) {
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
  async updateExperience({ getters }) {
    // console.log(experiences)
    const { experiences } = getters.educationInfo
    console.log(experiences)
    const dataBase = await db
      .collection('volunteers')
      .doc(firebase.auth().currentUser.uid)

    dataBase
      .update({
        experiences: experiences,
      })
      .then((doc) => {
        // console.log('data:', doc.data())
      })
  },
  async updateEducation({ getters }) {
    // console.log(experiences)
    const { educations } = getters.educationInfo
    const dataBase = await db
      .collection('volunteers')
      .doc(firebase.auth().currentUser.uid)

    dataBase
      .update({
        educations: educations,
      })
      .then((doc) => {
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
    return state.educationInfo
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
