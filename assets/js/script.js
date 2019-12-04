var map;

function initMap() {
  var centerM = {lat: 42.497938, lng: -87.956880};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: centerM});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: centerM, map: map});
}

