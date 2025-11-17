function initMap() {
    const startingPoint = {lat: 41.2392, lng: -85.850};
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: startingPoint,
    });

    new google.maps.Marker({
        position: startingPoint, 
        map: map, 
    });
}