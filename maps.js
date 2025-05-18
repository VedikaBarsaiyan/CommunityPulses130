// Initialize and add the map
let map;
let marker;

async function initMap() {
    // Get the map container
    const mapDiv = document.getElementById('mapContainer');
    
    // Default location (can be set to user's current location)
    const defaultLocation = { lat: 20.5937, lng: 78.9629 }; // Center of India
    
    // Create the map
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(mapDiv, {
        zoom: 10,
        center: defaultLocation,
        mapId: "COMMUNITY_PULSE_MAP",
    });
    
    // Add a marker that can be dragged
    const { Marker } = await google.maps.importLibrary("marker");
    marker = new Marker({
        map: map,
        position: defaultLocation,
        draggable: true,
        title: "Event Location"
    });
    
    // Update location input when marker is dragged
    marker.addListener('dragend', function() {
        const position = marker.getPosition();
        document.getElementById('eventLocation').value = `${position.lat()}, ${position.lng()}`;
    });
    
    // Try to get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(userLocation);
                marker.setPosition(userLocation);
                document.getElementById('eventLocation').value = `${userLocation.lat}, ${userLocation.lng}`;
            },
            () => {
                console.log("Error: The Geolocation service failed.");
            }
        );
    }
}
