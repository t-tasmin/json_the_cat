const { fetchBreedDescription } = require('./breedFetcher');
const breed = process.argv[2];

// Call fetchBreedDescription function which is in another file
fetchBreedDescription(breed, (error, description) => {
  
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }

});