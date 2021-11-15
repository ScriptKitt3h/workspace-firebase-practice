var firebaseConfig = {
  apiKey: 'AIzaSyBRTPEm0pj0sBtns4u9DcLGpbBuIoDlWe4',
  authDomain: 'csci-225-fall21.firebaseapp.com',
  projectId: 'csci-225-fall21',
  storageBucket: 'csci-225-fall21.appspot.com',
  messagingSenderId: '164480810963',
  appId: '1:164480810963:web:c91f857d7c9bb718fff926',
  measurementId: 'G-GJQQ8R5FY0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $("#Login input[name='login']").val();
  var password = $("#Login input[name='pwd']").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login successful');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
