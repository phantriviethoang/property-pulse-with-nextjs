"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Spinner from "./Spinner";

// Custom Leaflet marker pin icon
const customIcon = L.icon({
    iconUrl: "/images/pin.svg",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

const PropertyMap = ({ property }) => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [loading, setLoading] = useState(true);
    const [geocodingError, setGeocodingError] = useState(false);

    useEffect(() => {
        const fetchCoords = async () => {
            try {
                const fullAddress = `${property.location.street} ${property.location.city}, ${property.location.state} ${property.location.zipcode}`;
                let res = await fetch(
                    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
                        fullAddress
                    )}&format=json`
                );
                let data = await res.json();

                // If specific street is not found, fallback to city, state & zipcode
                if (!data || data.length === 0) {
                    const fallbackAddress = `${property.location.city}, ${property.location.state} ${property.location.zipcode}`;
                    res = await fetch(
                        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
                            fallbackAddress
                        )}&format=json`
                    );
                    data = await res.json();
                }

                if (!data || data.length === 0) {
                    setGeocodingError(true);
                    setLoading(false);
                    return;
                }

                const { lat: latitude, lon: longitude } = data[0];
                setLat(parseFloat(latitude));
                setLng(parseFloat(longitude));
                setLoading(false);
            } catch (error) {
                console.error("Geocoding error:", error);
                setGeocodingError(true);
                setLoading(false);
            }
        };

        if (property?.location) {
            fetchCoords();
        }
    }, [property]);

    if (loading) return <Spinner loading={loading} />;

    if (geocodingError) {
        return (
            <div className="text-xl font-semibold text-center text-gray-500 py-6">
                No location data available.
            </div>
        );
    }

    return (
        !loading &&
        lat !== null &&
        lng !== null && (
            <MapContainer
                center={[lat, lng]}
                zoom={15}
                scrollWheelZoom={false}
                className="w-full h-[500px] rounded-lg z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]} icon={customIcon}>
                    <Popup>
                        <span className="font-semibold">{property.name}</span>
                        <br />
                        {property.location.street}, {property.location.city}
                    </Popup>
                </Marker>
            </MapContainer>
        )
    );
};

export default PropertyMap;
