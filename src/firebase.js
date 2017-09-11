
import * as firebase from 'firebase';

// should go in a secret file
const config = {
    apiKey: "AIzaSyDu47TipNYfVhtyZ4gZg-XS51pDYbOGclM",
    authDomain: "jogchat-0209.firebaseapp.com",
    databaseURL: "https://jogchat-0209.firebaseio.com",
    projectId: "jogchat-0209",
    storageBucket: "jogchat-0209.appspot.com",
    messagingSenderId: "935825028050"
};
firebase.initializeApp(config);

export default firebase;
