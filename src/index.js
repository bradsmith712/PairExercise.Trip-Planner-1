'use strict';

//console.log('Lets get crazy! Ring Ring! Calling from index.js!');
const markerInst = require('./marker');
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoibGV2aWVudCIsImEiOiJjamltNGRubncwMDhzM3ZwYWM3MTBzbzF6In0.W5Sj9G0vj8NNuBM22Ds4qA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map); // [-87.641, 41.895] for Chicago

const hotel = markerInst('hotel', [-87.6354, 41.8885]);
const lunch = markerInst('restaurant', [-87.6354, 41.8885]);

hotel.addTo(map);
lunch.addTo(map);
