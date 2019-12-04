function initMap() {
  var centerM = {lat: 41.833608, lng: -87.624165};
  // The map, centered at Uluru
  map = new google.maps.Map(
  document.getElementById('map'), {zoom: 15, center: centerM});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: centerM, map: map});
}();
function setLatLon(btnN){
  if(btnN == "btn1"){
     map.setCenter(new google.maps.LatLng(43.854046, -71.657692));
  }
  if(btnN == "btn2"){
     map.setCenter(new google.maps.LatLng(41.833608,-87.624165));
  }
  if(btnN == "btn3"){
     map.setCenter(new google.maps.LatLng(41.834523, -87.628393));
  }
}();

