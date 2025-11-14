
        
        mapboxgl.accessToken = mapToken;
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // default to standard-satellite style on mount
            center: listing.geometry.coordinates, // starting position [lng, lat]
            zoom: 13 // starting zoom
        });

        // const layerList = document.getElementById('menu');
        // const inputs = layerList.getElementsByTagName('input');

        // for (const input of inputs) {
        //     input.onclick = (layer) => {
        //         const layerId = layer.target.id;
        //         map.setStyle('mapbox://styles/mapbox/' + layerId);
        //     };
        // }
        


        // Create a default Marker and add it to the map.
        const marker1 = new mapboxgl.Marker({color:"red"})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({offset:25}).setHTML(
                `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
            )
        )
        .addTo(map);
        
