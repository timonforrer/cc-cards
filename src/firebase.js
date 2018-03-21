import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyBhcgbiMlFqA2rlf4oAQiX5dj1F0xBhNS8',
  authDomain: 'cc-cards.firebaseapp.com',
  databaseURL: 'https://cc-cards.firebaseio.com',
  projectId: 'cc-cards',
  storageBucket: 'cc-cards.appspot.com',
  messagingSenderId: '654979257061'
})

export const db = firebaseApp.database()
