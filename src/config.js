import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyDNbbd020VdoJZrVc2aLls5WOcCFwFa0fw',
  authDomain: 'scheduler-16621.firebaseapp.com',
  databaseURL: 'scheduler-16621.firebaseapp.com',
  projectId: 'scheduler-16621',
  storageBucket: 'scheduler-16621.appspot.com',
  messagingSenderId: '878886976227'
};
let app = Firebase.initializeApp(config);
export const db = app.database();