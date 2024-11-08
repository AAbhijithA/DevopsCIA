const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Map View</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <!-- Get the leaflet CSS file -->
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
                </head>
                <body>
                    <h1>Map View</h1>
                    <!-- Specify the map and it's dimensions -->
                    <div id="map" style="width: 960px; height: 500px"></div>
                    <!-- Get the leaflet JavaScript file -->
                    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
                    <script>
                        // Initialize the map
                        const map = L.map('map')

                        // Get the tile layer from OpenStreetMaps
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            // Specify the maximum zoom of the map
                            maxZoom: 19,
                            // Set the attribution for OpenStreetMaps
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(map);
                        // Set the view of the map
                        // with the latitude, longitude and the zoom value
                        map.setView([48.8584, 2.2945], 16);
                        // Set the map view to the user's location
                        // Uncomment below to set map according to user location
                        // map.locate({setView: true, maxZoom: 16});
                        // Show a market at the position of the Eiffel Tower
                        let eiffelMarker = L.marker([48.8584, 2.2945]).addTo(map);
                        // Bind popup to the marker with a popup
                        eiffelMarker.bindPopup("Eiffel Tower").openPopup();
                    </script>
                </body>
            </html>`
    );
})

app.listen(8080, () => {
    console.log("application is running at Port: 3000");
})