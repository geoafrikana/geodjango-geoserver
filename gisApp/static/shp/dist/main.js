  const map = L.map('map', {zoomControl: false}).setView([7.63, 5.21], 9);
    
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    const Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 16,
        ext: 'jpg'
    });
    
    const Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    
    //Add marker popup
    const singlemarker = L.marker([7.63, 5.21])
        .bindPopup("Hey! Here's my location.")
        .openPopup();
    
        // Add Scale Bar
    L.control.scale({position:'bottomleft'}).addTo(map)
    
    //select the map div by ID
    const mapId = document.getElementById('map')

    //show coordinates
    
     map.on("mousemove", e=>{
        latlngtext = `longitude: ${e.latlng.lng} | longitude: ${e.latlng.lng}`
        $('#mylatlng').html(latlngtext)
    });

    L.control.zoom({
        position: 'topright'
    }).addTo(map)
    
    //Add markers from test.js
    // L.geoJSON(data).addTo(map)
    let marker = L.markerClusterGroup();
    let myplaces = L.geoJSON(data);
    myplaces.addTo(marker);
    // marker.addTo(map);
    
    // add layer controller
    const basemaps = {
        "OSM": osm,
        "Stamen Watercolour": Stamen_Watercolor,
        "ESRI World Imagery": Esri_WorldImagery
    }
    
    const overlay={
        'Ekiti Places': marker,
        'Single Marker': singlemarker
    }
    
    L.control.layers(basemaps, overlay,{
        collapsed: true,
        position:'topleft'
    }).addTo(map)
