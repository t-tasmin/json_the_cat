const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const breeds = ['Siberian', 'Bengal', 'Balinese','Abyssinian', 'Somali'];
  const id = ['sib','beng', 'bali','abys', 'soma'];
  let type = "";
  for (let i = 0; i < breeds.length; i++) {
    if (breed === breeds[i]) {
      type = id[i];
    }
  }

  if (type === "") {
    let error = "Breed not Found!";
    callback(error, null);
  } else {

    const web = "https://api.thecatapi.com/v1/breeds/search?q=" + type;

    request(web, function(error, response, body) {
      if (error) {
        callback(error, null);
      }
      //console.log('statusCode:', response && response.statusCode);
      const data = JSON.parse(body); // converting body part to object
      callback(null,data[0].description);

    });
  }
};//End of Function


module.exports = {fetchBreedDescription};

