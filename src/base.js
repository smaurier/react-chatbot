import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4i8XyeL4LPNh11lFJwT5exKInrkW-Bl0",
    authDomain: "chatbox-app-8a7b5.firebaseapp.com",
    databaseURL: "https://chatbox-app-8a7b5.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}

export default base