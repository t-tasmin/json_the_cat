const request = require('request');
const args = process.argv;
const breeds = ['Siberian', 'Bengal', 'Balinese','Abyssinian', 'Somali'];
const id = ['sib','beng', 'bali','abys', 'soma'];
let type = "";
for (let i = 0; i < breeds.length; i++) {
  if (args[2] === breeds[i]) {
    type = id[i];
  }
}

if (type === "") {
  console.log("Breed not found");
} else {
  const web = "https://api.thecatapi.com/v1/breeds/search?q=" + type;

  request(web, function(error, response, body) {
  //console.error('error:', error);
  //console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body); // converting body part to object
    console.log(typeof data);
    console.log(data[0].description);
  });
}