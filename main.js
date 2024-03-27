
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([51.505, -0.09], 11);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/gdmckenzie/clu1ojnbp025u01ptgj17duzm/draft/tiles/{z}/{x}/{y}?pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([-46.126,167.686]).addTo(map)
	.bindPopup('Boat Ramp');

const marker2 = L.marker([-46.123,167.681]).addTo(map)
	.bindPopup('Tuatapere Reserve Ancient Totata Tree');

const marker3 = L.marker([-46.143,167.687]).addTo(map)
	.bindPopup('Native Silver Beech Mill');

const marker4 = L.marker([-46.121,167.690]).addTo(map)
	.bindPopup('The mighty Waiau River').openPopup();



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'purple',
		fillOpacity: 0.1,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-46.110,167.698],
		[-46.110,167.690],
		[-46.105,167.689],
		[-46.106,167.681],
		[-46.126,167.677],
		[-46.130,167.686],
		[-46.122,167.688]
	],{
		color: 'brown',
		fillColor: '#1e9900',
	}).addTo(map).bindPopup('Tuatapere Reserve');


setTimeout(ReOrder, 1000);
function ReOrder() {
	geojsonLayer.bringToBack();
	polygon.bringToFront();
}

// END OF DOCUMENT