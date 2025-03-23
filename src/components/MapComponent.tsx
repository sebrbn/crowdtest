import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13); // Set initial coordinates and zoom level

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Define evacuation routes (example coordinates)
    const evacuationRoute: L.LatLngExpression[] = [
      [51.505, -0.09],
      [51.51, -0.1],
      [51.51, -0.12],
    ];

    // Add a polyline to represent the evacuation route
    L.polyline(evacuationRoute, { color: 'red' }).addTo(map);

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;