(function() {

  mapboxgl.accessToken = 'pk.eyJ1IjoibWV3LW1vIiwiYSI6ImNrcDRvZGlvczA0bHQyb3J2czczaXk0cTUifQ.OFSA4kWW4IMpTG6MTy6TPQ';

  var map = new mapboxgl.Map({
    container: 'map',
    zoom: 9,
    center: [168.65997835410565, -45.03140568895895],
    pitch: 85,
    bearing: 80,
    style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
  });

// ----------------------------------- LOADING 3D TERRAIN ------

  map.on('load', function () {
    map.addSource('mapbox-dem', {
      'type': 'raster-dem',
      'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
      'tileSize': 512,
      'maxzoom': 14
    });
// add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

// add a sky layer that will show when the map is highly pitched
    map.addLayer({
      'id': 'sky',
      'type': 'sky',
      'paint': {
        'sky-type': 'atmosphere',
        'sky-atmosphere-sun': [0.0, 0.0],
        'sky-atmosphere-sun-intensity': 15
      }
    });
  });

// ------------------------------------- MARKERS --------------

  var geojson = {
    type: 'FeatureCollection',
    features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [168.73626176971516, -44.92715018694622]
      },
      properties: {
        title: 'Coronet Peak',
        description: ' - Resort featuring skiing & sledding for all ages, plus restaurants, a shop with equipment & more.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [168.8142950050493, -45.05407136867146]
      },
      properties: {
        title: 'Remarkables',
        description: ' - The tallest skiing mountain in the Wakatipu Basin featuring a great ski resort and incredible sightseeing.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [168.93919584894536, -44.851877427497676]
      },
      properties: {
        title: 'Cardrona Peak',
        description: ' - This 1,936-meter-high mountain has an alpine resort with multi-use trails, plus a historic hotel.'
      }
    }]
  };

  // add markers to map -- looping through geojson object
  geojson.features.forEach(function(marker) {

  // create new popups through the loop
  var popup = new mapboxgl.Popup().setText(marker.properties.title + marker.properties.description);

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    // adds popups to the map
    .setPopup(popup)
    .addTo(map);
  });

// ------------------------------------- BTN ONCLICKS --------------

  document.getElementById('coronet').addEventListener('click', function () {
    map.flyTo({
      center: [168.73626176971516, -44.92715018694622],
      essential: true,
      zoom: 13
    });
  });

  document.getElementById('remarks').addEventListener('click', function () {
    map.flyTo({
      center: [168.8142950050493, -45.05407136867146],
      essential: true,
      zoom: 13
    });
  });

  document.getElementById('cardrona').addEventListener('click', function () {
    map.flyTo({
      center: [168.93919584894536, -44.851877427497676],
      essential: true,
      zoom: 13
    });
  });

  // fullscreen map potentially?
  map.addControl(new mapboxgl.FullscreenControl());

}());
