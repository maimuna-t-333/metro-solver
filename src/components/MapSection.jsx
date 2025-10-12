import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin, PhoneCall } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapSection() {
    const position = [51.5074, -0.1278]; 
    return (
        <section className="bg-[#0f051d] text-white py-20 px-6 lg:px-20">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={false}
                    className="w-full h-full rounded-2xl"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={position}>
                        <Popup className="text-white">
                            <div className="bg-[#1f1036] p-6 rounded-2xl shadow-lg max-w-md">
                                <h3 className="text-xl font-bold mb-2">Metro Solver</h3>
                                <p className="text-gray-400 mb-3">
                                    Head office: Metro Solver Limited, Grantham Road, London E12 5LQ, United Kingdom
                                </p>
                                <div className="space-y-2 text-gray-300">
                                    <p><PhoneCall size={16} className="inline mr-2" /> +447961654646</p>
                                    <p><PhoneCall size={16} className="inline mr-2" /> +447846650205</p>
                                    <p><PhoneCall size={16} className="inline mr-2" /> 0203646</p>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </section>
    );
}
