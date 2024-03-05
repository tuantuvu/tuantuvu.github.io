//javascript.js
//set map options
var myLatLng = { lat: 10.741257451748634, lng: 106.61900684065824 };
var mapOptions = {
    center: myLatLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.roadmap

};

//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);

//Hàm tính tiền
function calculateCost(distanceInMeters) {
	const distanceInKm = distanceInMeters / 1000;
	let costInVND = 0;

	if (distanceInKm <= 1) {
		costInVND = 20000;
	} else {
		costInVND = 20000 + (distanceInKm - 1) * 5000;
	}
	return costInVND;
}


//define calcRoute function
function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC
    }

    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time
            const output = document.querySelector('#output');
			const distanceInText = result.routes[0].legs[0].distance.text;
			const distanceInMeters = result.routes[0].legs[0].distance.value;
			const durationInSeconds = result.routes[0].legs[0].duration.value;
			const durationInMinutes = durationInSeconds / 60;
			
			// Hiển thị quãng đường, thời gian, giá tiền
			const costInVND = calculateCost(distanceInMeters);
			output.innerHTML =
			"<div class='alert-info'>" +
			"Nơi đi: " + document.getElementById("from").value +
			".<br />Nơi đến: " + document.getElementById("to").value +
			".<br />Quãng đường <i class='fas fa-road'></i>: " + distanceInText +
			".<br />Thời gian <i class='fas fa-hourglass-start'></i>: " + durationInMinutes.toFixed(1) + " phút" + 
			".<br />Giá tiền: " + costInVND.toLocaleString("vi-VN", { style: "currency", currency: "VND" }) +
			".</div>";

            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i>Không tìm thấy đường đi.</div>";
        }
    });

}

//create autocomplete objects for all inputs
var bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(8.011416, 104.305579), // Southwest corner of Vietnam
    new google.maps.LatLng(23.305240, 110.454102)  // Northeast corner of Vietnam
);

var options = {
	bounds: bounds,
	componentRestrictions: { country: "vn" },
};

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
