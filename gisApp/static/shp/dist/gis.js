 //Create the requestFullScreen Function
 const fullScreenView = ()=> {
    mapId.requestFullscreen();
}

// Add responsive print functionality
   L.control.browserPrint(
      {
         position: 'topright'
      }
   ).addTo(map);
     //Leaflet search location by name
     L.Control.geocoder({
      position: 'topright'
   }).addTo(map);
    
 //Add measure tools
 L.control.measure({
    primaryLengthUnit: 'Kilometers',
    secondaryLengthUnit: 'meter',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: undefined}
 ).addTo(map);

//zoom to layer function
document.getElementById('home').onclick= () => map.setView([7.63, 5.21], 9)