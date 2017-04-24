function initMap() {
    var gaulois = {lat: 45.539142, lng: -73.590839};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: gaulois
      });
    var marker = new google.maps.Marker({
      position: gaulois,
      map: map
      });
  }
