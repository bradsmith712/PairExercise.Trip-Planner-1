'use strict'

console.log('Lets get crazy! Ring Ring! Calling from index.js!');

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoibGV2aWVudCIsImEiOiJjamltNGRubncwMDhzM3ZwYWM3MTBzbzF6In0.W5Sj9G0vj8NNuBM22Ds4qA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});