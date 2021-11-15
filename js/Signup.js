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
$('#signup-form').submit(function (e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = $("#signup-form input[name='username']").val();
  console.log('The email entered in is ' + email);
  var password = $("#signup-form input[name='password']").val();
  console.log('The password entered is not safe to list here');
  var confirmed = $("#signup-form input[name='cpassword'").val();
  if (password == email) {
    console.log('Password entries match successfully');
  }

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...

      console.log('You are signed up');
      window.location.href = 'Login.html';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
