import React, { useEffect, useState } from "react";
import { getEmployes } from "../services/api";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  const [citie, setCities] = useState([]);
  const city = citie.map((city, index) => {
    return city[2];
  });
  const cities = city.map((city) => (city === "Sidney" ? "Sydney" : city));
  const cityCoordinates = {
    Edinburgh: [55.9533, -3.1883],
    Tokyo: [35.6762, 139.6503],
    "San Francisco": [37.7749, -122.4194],
    "New York": [40.7128, -74.006],
    London: [51.5074, -0.1278],
    Sydney: [-33.8688, 151.2093],
    Singapore: [1.3521, 103.8198],
  };

  const cityCount = {};
  cities.forEach((city) => {
    cityCount[city] = (cityCount[city] || 0) + 1;
  });

  useEffect(() => {
    getEmployes().then(setCities);
  }, []);
  return (
    <div className="h-screen w-full">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Object.keys(cityCount).map((city) => (
          <CircleMarker
            key={city}
            center={cityCoordinates[city]}
            radius={cityCount[city] * 2} // dynamic size
            pathOptions={{
              color: "green",
              fillColor: "pink",
              fillOpacity: 0.5,
            }}
          >
            <Popup>
              <div>
                <h2 className="font-bold">{city}</h2>
                <p>Occurrences: {cityCount[city]}</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
