var map;

function initMap(){
    alert("THIS CODE RAN"):
    map = new google.maps.Map(document.getElementById('canvas'), {
    center: new google.maps.LatLng(41.833002,-87.624128),//Setting Initial Position
    zoom: 17,
  });


	google.maps.event.addDomListener(window, 'load', initMap);


	google.maps.event.addDomListener(document.getElementById('btn1'), 'click', function () {
		map.setCenter(new google.maps.LatLng(42.497938, -87.956880));
		map.setZoom(17);
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
	});

	google.maps.event.addDomListener(document.getElementById('btn2'), 'click', function () {
	    map.setCenter(new google.maps.LatLng(-50.607311, 165.971229));
	    map.setZoom(15);
	    map.setMapTypeId(google.maps.MapTypeId.TERRAIN);

	});

	google.maps.event.addDomListener(document.getElementById('btn3'), 'click', function () {
	    map.setCenter(new google.maps.LatLng(12.370367, 23.322272));
	    map.setZoom(18);
	    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
	});
}
