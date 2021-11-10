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
/* object examples */
var testJson = {};
testJson['lastname'] = 'zhang';
testJson['location'] = 'aiken';
console.log(testJson);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  const inputdata = $('form').serializeArray();
  console.log(inputdata);
  /* save the data to database */
  var inputJSON = {};
  for (var i = 0; i < inputdata.length; i++) {
    var n = inputdata[i]['name'];
    var v = inputJSON[i]['checkin'];
    console.log(n + ' ' + v);
    inputJSON[n] = v;
  }
  firebase.firestore().collection('hotelRSVP').add(inputJSON); // save the data

  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection('hoteldata')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
