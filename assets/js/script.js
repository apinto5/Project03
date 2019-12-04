window.map = undefined;


function initMap() {
  var centerM = {lat: 41.833608, lng: -87.624165};
  // The map, centered at Uluru
  window.map = new google.maps.Map(
  document.getElementById('map'), {zoom: 15, center: centerM});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: centerM, map: map});
  
}
function moveToLocation(lat, lng){
  const center = new google.maps.LatLng(lat, lng);
  window.map.panTo(center);
}

var start = 0;
slideshow();
function slideshow() {
	var beg;
	var html_element = document.getElementsByClassName("pics");
	
	for (beg = 0; beg < grab_html_element.length;beg++) {
		html_element[beg].style.display="none";
	}
	start++;
	
	if (start > html_element.length) {
    		start = 1
	}
	html_element[start - 1].style.display = "block";
	setTimeout(slideshow, 3000);
}
