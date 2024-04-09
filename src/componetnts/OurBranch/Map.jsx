import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const [center, setCenter] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=North+Goa&key=YOUR_API_KEY`
        );
        const data = await response.json();
        // Check if response data contains valid results
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCenter({ lat, lng });
        } else {
          console.error("No results found for the given city name.");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      {center && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default Map;
