var map;

function initMap() {
  var centerM = {lat: 41.833608, lng: -87.624165};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: centerM});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: centerM, map: map});

	google.maps.event.addDomListener(document.getElementById('btn1'), 'click', function () {
		map.setCenter(new google.maps.LatLng(41.833608,-87.624165));
		map.setZoom(17);
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
	});

	google.maps.event.addDomListener(document.getElementById('btn2'), 'click', function () {
	    map.setCenter(new google.maps.LatLng(-50.607311, 165.971229));
	    map.setZoom(15);
	    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);

	});

	google.maps.event.addDomListener(document.getElementById('btn3'), 'click', function () {
	    map.setCenter(new google.maps.LatLng(12.370367, 23.322272));
	    map.setZoom(18);
	    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
	});
	}
}

