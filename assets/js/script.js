var el = ["1"]

function init(){
	alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.833002,-87.624128);
	var myLocation1 = new google.maps.LatLng(43.853582, -71.657638);
	var myLocation2 = new google.maps.LatLng(41.833740, -87.628329);
	
	var mapOptions = {
		center: myLocation,myLocation2,myLocation1,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		label: el[0], 
		
	});
	var marker2 = new google.maps.Marker({
		position: myLocation2,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
	});
	var marker3 = new google.maps.Marker({
	position: myLocation1,
	map: myMap,
	animation: google.maps.Animation.BOUNCE,
	});	
	var contentString = '<h1> Alpha Epslion of Phi Kappa Sigma </h1><p>Fraternity</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});
	var contentString2 = '<h1> Branch Brook Campground </h1><p>Home</p>';

	var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
  	});
	var contentString3 = '<h1>Galvin Library</h1><p>Work</p>';

	var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
		google.maps.event.addListener(marker2, 'mouseover', function() {
    	infowindow2.open(myMap, marker2);
  	});
		google.maps.event.addListener(marker3, 'mouseover', function() {
    	infowindow3.open(myMap, marker3);
  	});
}

google.maps.event.addDomListener(window, 'load', init);
