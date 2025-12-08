const map = L.map('map').setView([41.225, -85.815], 17);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var locations = {
    // Add Marker for Gym 
    "gym": L.marker([41.22494869006198, -85.81767439842226]).addTo(map)
    .bindPopup("<b>Gordon Health and Recreational Center</b>"),

    // Add marker for Math and Science Center
    "math": L.marker([41.224884134364345, -85.81199884414673]).addTo(map)
    .bindPopup("<b>Math and Science Center</b>"),

    // Add marker for Campus Store
    "store": L.marker([41.22514235677252, -85.81696629524232]).addTo(map)
    .bindPopup("<b>Campus Store</b>"),

    // Add marker for Beta Field
    "beta": L.marker([41.22463398043403, -85.81286787986757]).addTo(map)
    .bindPopup("<b>Beta Field</b>"),

     // Add marker for starbucks
    "starbucks": L.marker([41.225767734942025, -85.81327557563783]).addTo(map)
    .bindPopup("<b>Starbucks</b>"),

     // Add marker for iceskate
    "iceskate": L.marker([41.22791818325989, -85.82073748111726]).addTo(map)
    .bindPopup("<b>Ice Rink</b>"),

    // Add marker for bowling
    "bowl": L.marker([41.23735430506977, -85.83413243293764]).addTo(map)
    .bindPopup("<b>Warsaw Bowl</b>"),

     // Add marker for movie
    "movie": L.marker([41.25235489384296, -85.82422971725464]).addTo(map)
    .bindPopup("<b>North Pointe Cinemas</b>"),

    // Add marker for YMCA
    "YMCA": L.marker([41.257287112673886, -85.83014130592346]).addTo(map)
    .bindPopup("<b>YMCA</b>"),

    // Add marker for Winona Lake 
    "winona": L.marker([41.22855563840197, -85.82251310348511]).addTo(map)
    .bindPopup("<b>Winona Lake</b>"),
}

const params = new URLSearchParams(window.location.search);
const target = params.get('place');

if (target && locations [target]) {
    map.setView(locations[target].getLatLng(), 18);

    locations[target].openPopup();
}

