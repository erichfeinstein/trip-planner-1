const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken = 'pk.eyJ1Ijoia29rZXZpbiIsImEiOiJjam9nN2N0cmMwYzR1M3Fwam1sa3JtN2d3In0.8o3BBBhZ0rqvXMkp0EQP-A';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const div = document.createElement("div")
// // div.innerHTML =  'Hi';
// div.style.background = url('https://hdsmileys.com/wp-content/uploads/2018/06/bettakuma-madness-dance.gif');
// new mapboxgl.Marker(div).setLngLat([-74.018, 40.698]).addTo(map);


function markerBuilder(type, x, y) {
    const div = document.createElement('div')
    if (type === 'Activity') {
        div.classList.add('activity');
    } else if (type === 'Restaurant') {
        div.classList.add('restaurant');
    } else if (type === 'Hotel') {
        div.classList.add('hotel');
    } 

    new mapboxgl.Marker(div).setLngLat([x, y]).addTo(map);
}

markerBuilder('Activity', -74.018, 40.698);
markerBuilder('Restaurant', -74.000, 40.730);
markerBuilder('Hotel', -74.009, 40.710);

console.log('Hello')