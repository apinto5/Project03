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
