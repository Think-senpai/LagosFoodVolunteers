// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA6EiP5hFmZ-fQ9R2Cj9M8IqmyzvTaFq9w',
  authDomain: 'lagosfoodbankapp.firebaseapp.com',
  databaseURL: 'https://lagosfoodbankapp.firebaseio.com',
  projectId: 'lagosfoodbankapp',
  storageBucket: 'lagosfoodbankapp.appspot.com',
  messagingSenderId: '512941898159',
  appId: '1:512941898159:web:510a561011ed202716975a',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()
