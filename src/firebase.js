import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  // This is the firebase configuration
  apiKey: 'AIzaSyBhcgbiMlFqA2rlf4oAQiX5dj1F0xBhNS8',
  authDomain: 'cc-cards.firebaseapp.com',
  databaseURL: 'https://cc-cards.firebaseio.com',
  projectId: 'cc-cards',
  storageBucket: 'cc-cards.appspot.com',
  messagingSenderId: '654979257061'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
export const storage = firebaseApp.storage()
