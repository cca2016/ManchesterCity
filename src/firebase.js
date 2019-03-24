import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyDAsug_1NYmcYIxJX6OKlTwO74lpdbLhPs",
  authDomain: "m-city-30f76.firebaseapp.com",
  databaseURL: "https://m-city-30f76.firebaseio.com",
  projectId: "m-city-30f76",
  storageBucket: "m-city-30f76.appspot.com",
  messagingSenderId: "682015970592"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}