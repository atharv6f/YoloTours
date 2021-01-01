
/* eslint-disable*/
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoieW9sbzkzMCIsImEiOiJja2phN294ZW0yNWc5MndudmkwYnNweGlzIn0.zWA6ecPSKloR815HAWG-gA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yolo930/ckja9lddd7nlu19l91uqqpb6d',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
