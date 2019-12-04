var map;
var setLat;
var setLon;

function initMap() {
  var centerM = {lat: 41.833608, lng: -87.624165};
  // The map, centered at Uluru
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 15, center: centerM});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: centerM, map: map});
  document.getElementById("btn1").addEventListener("click", changeLocation(-50.607311, 165.971229));
}
function changeLocation(setLat, setLon){
      alert("WORKED")
      map.setCenter(new google.maps.LatLng(setLat, setLong));
}


