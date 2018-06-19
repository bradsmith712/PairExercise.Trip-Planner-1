const mapbox = require('mapbox-gl');

function buildMarker(type, coordArr) {
  let markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  if (type === 'hotel') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  } else if (type === 'restaurant') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
  } else {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  }
  const marker = new mapbox.Marker(markerDomEl).setLngLat(coordArr);
  console.log('marker element!!', marker);

  return marker;
}

module.exports = buildMarker;
