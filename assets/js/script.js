var setLat;
var setLon;

function initMap() {
  var centerM = {lat: 41.833608, lng: -87.624165};
  // The map, centered at Uluru
  map = new google.maps.Map(
  document.getElementById('map'), {zoom: 15, center: centerM});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: centerM, map: map});
}
function changeLocation(setLat, setLon){
      map.setCenter(new google.maps.LatLng(setLat, setLong));
}
var inputElement = document.createElement('input');

inputElement.type = "button"
inputElement.addEventListener('click', function(){
    alert("THIS RAN")
    changeLocation(12.370367, 23.322272);
});
document.body.appendChild(inputElement);​

