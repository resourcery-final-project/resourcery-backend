const NodeGeocoder = require('node-geocoder');
const Resource = require('../models/Resource');
const resources = require('../../data/resources');
console.log(resources);

const options = {
  provider: 'google',
  apiKey: 'AIzaSyBgZzKaQIwYReRP82CUEaUrDeImn2fwtzk',
  formatter: null,
};

const geocoder = NodeGeocoder(options);

async function myCoordinates() {
  const newResources = await Promise.all(
    resources.map(async (resource) => {
      const [{ latitude, longitude }] = await geocoder.geocode(
        resource.address
      );
      return { ...resource, latitude, longitude };
    })
  );
  return newResources;
}

async function saveCoordinates() {
  const coordinates = await myCoordinates();
  const newResources = await Promise.all(
    coordinates.map(async (coords) => {
      return Resource.insert(coords);
    })
  );
  return newResources;
}
saveCoordinates();
