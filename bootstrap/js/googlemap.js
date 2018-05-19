function initMap() {
    var uluru = {lat: 38.8315, lng: -77.3119};
    var map = new google.maps.Map(document.getElementById('google_map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }