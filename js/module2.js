var blossom,
    greetingHappened = true;
function theRest(){
    if(greetingHappened === true){
      console.log('Universe.')
      blossom = "\_/"
    }else{
      console.log('To my dismay, you were not greeted properly.')
    }
    function flower(){
      if( blossom === "\_/"){
          console.log('We are blossoming into a marvelous being.');
      }else{
        console.log("This life time was not meant to last.")
      }
      console.log("Good bye, friend.")
    };
    flower();
};
theRest();

var people = [{
  "id": 1,
  "gender": "Female",
  "first_name": "Sharon",
  "last_name": "Carter"
}, {
  "id": 2,
  "gender": "Female",
  "first_name": "Sandra",
  "last_name": "Clark"
}, {
  "id": 3,
  "gender": "Female",
  "first_name": "Deborah",
  "last_name": "Patterson"
}, {
  "id": 4,
  "gender": "Male",
  "first_name": "Stephen",
  "last_name": "Ruiz"
}, {
  "id": 5,
  "gender": "Female",
  "first_name": "Gloria",
  "last_name": "Peters"
}, {
  "id": 6,
  "gender": "Male",
  "first_name": "Billy",
  "last_name": "Dunn"
}, {
  "id": 7,
  "gender": "Female",
  "first_name": "Rebecca",
  "last_name": "Knight"
}, {
  "id": 8,
  "gender": "Male",
  "first_name": "Earl",
  "last_name": "Washington"
}, {
  "id": 9,
  "gender": "Female",
  "first_name": "Ashley",
  "last_name": "Mcdonald"
}, {
  "id": 10,
  "gender": "Male",
  "first_name": "Johnny",
  "last_name": "Bowman"
}, {
  "id": 11,
  "gender": "Male",
  "first_name": "Victor",
  "last_name": "Peterson"
}, {
  "id": 12,
  "gender": "Male",
  "first_name": "Gregory",
  "last_name": "Lopez"
}, {
  "id": 13,
  "gender": "Female",
  "first_name": "Helen",
  "last_name": "Harris"
}, {
  "id": 14,
  "gender": "Male",
  "first_name": "Kenneth",
  "last_name": "Webb"
}, {
  "id": 15,
  "gender": "Female",
  "first_name": "Diana",
  "last_name": "Arnold"
}, {
  "id": 16,
  "gender": "Male",
  "first_name": "Brian",
  "last_name": "Bailey"
}, {
  "id": 17,
  "gender": "Male",
  "first_name": "Raymond",
  "last_name": "Crawford"
}, {
  "id": 18,
  "gender": "Male",
  "first_name": "Edward",
  "last_name": "Fields"
}, {
  "id": 19,
  "gender": "Female",
  "first_name": "Rose",
  "last_name": "Wheeler"
}, {
  "id": 20,
  "gender": "Male",
  "first_name": "Kenneth",
  "last_name": "Fernandez"
}]
var _ = require('lodash');

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " females");
