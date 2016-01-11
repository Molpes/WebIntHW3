// Initialize the google map
var map;
var geocoder;
var marker = null;
var adh = new Array(); // ADress Houses
adh[0] = "208 avenue du pylone\, Antibes";
adh[1] = "2400 route des dolines\, 06560 valbonne\, france";
adh[2] = "Adalberstr 57\, 80799 Munich\, germany";
adh[3] = "208 avenue du pylone\, 06600 antibes\, france";

//alert(adh[1][1])

function $(id) {
	return document.getElementById(id);
}

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(-34.397, 150.644),
		zoom: 12
	};
	map = new google.maps.Map($("google-map"), mapOptions);
	geocoder = new google.maps.Geocoder();
}
initialize();

function updateMarkerPosition(latlng) {
	if ( marker == null ) {
		marker = new google.maps.Marker({
			position: latlng,
			map: map,
			title: 'You are here!'
		});
	}
	else {
		marker.setPosition(latlng);
	}

	// Center map as well
	map.setCenter(latlng);
}

function showAddressOnMap() {
	geocoder.geocode(
		{
		'address': adh[1] 
		},
		function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {

				updateMarkerPosition(results[0].geometry.location);

			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		}
	);
}


