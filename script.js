//type: String
const firstName = "Isabel";

//type: String
const lastName = "Rodriguez";

//type: number
var age = 34;

//type: String
const gender = "female";

//type: String
const birthDate = "24/12/87";

//type: boolean
var isMarried = false;

//type: boolean
var couple = true;

//type: String
var country = "Argentina";

//type: String
var city = "El Cadillal";

//type: Object
var pet = {
  petName: "Nerón",
  petAge: 5,
  breed: "Bullmastiff",
  hobbies: ["run", "sleep", "eat", "watch neighbors"],
  weight: 45,
};
console.log(`Hi! My name is ${firstName} ${lastName}. I'm ${gender}. 
I was born on ${birthDate}, so I'm ${age} years old. I live in ${city}, ${country}. 
My pet's name is ${pet.petName}, he is ${pet.petAge} years old, his breed is ${pet.breed} and he loves ${pet.hobbies}`);
