"use client";

import { useEffect, useRef } from "react";
import { Map, NavigationControl, Popup, Marker } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

// Traffic Bottleneck Points around Bandar Lampung
const trafficData = [
    {
        id: 1,
        location: "Jl. ZA Pagar Alam, Kedaton",
        status: "Severe",
        speed: "10 km/h",
        delay: "+25 min",
        cause: "High vehicle volume & long red light queues.",
        coordinates: [105.2589, -5.3819],
        color: "#EF4444", // Red
    },
    {
        id: 2,
        location: "Jl. R.A. Kartini, Tanjung Karang",
        status: "Moderate",
        speed: "20 km/h",
        delay: "+12 min",
        cause: "Shopping center entry and exit activities.",
        coordinates: [105.2570, -5.4150],
        color: "#F97316", // Orange
    },
    {
        id: 3,
        location: "Antasari Intersection",
        status: "Severe",
        speed: "8 km/h",
        delay: "+30 min",
        cause: "Road narrowing and water puddles.",
        coordinates: [105.2750, -5.4053],
        color: "#EF4444", // Red
    },
    {
        id: 4,
        location: "Soekarno Hatta Bypass, Rajabasa",
        status: "Incident",
        speed: "5 km/h",
        delay: "+45 min",
        cause: "Heavy truck broke down in the left lane.",
        coordinates: [105.2325, -5.3535],
        color: "#8B5CF6", // Purple for incidents
    },
    {
        id: 5,
        location: "Adipura Monument Roundabout",
        status: "Moderate",
        speed: "15 km/h",
        delay: "+10 min",
        cause: "Traffic merging from 4 main roads.",
        coordinates: [105.2584, -5.4214],
        color: "#F97316", // Orange
    },
    // --- 3 Titik Baru ---
    {
        id: 6,
        location: "Jl. Teuku Umar, Penengahan",
        status: "Severe",
        speed: "12 km/h",
        delay: "+20 min",
        cause: "Commuter rush hour and tight U-turns.",
        coordinates: [105.2592, -5.3985],
        color: "#EF4444", // Red
    },
    {
        id: 7,
        location: "Sultan Agung (Way Halim)",
        status: "Moderate",
        speed: "18 km/h",
        delay: "+15 min",
        cause: "Commercial area traffic and mall access.",
        coordinates: [105.2730, -5.3850],
        color: "#F97316", // Orange
    },
    {
        id: 8,
        location: "Pramuka Intersection, Kemiling",
        status: "Severe",
        speed: "9 km/h",
        delay: "+22 min",
        cause: "Hilly terrain bottleneck during peak hours.",
        coordinates: [105.2285, -5.3900],
        color: "#EF4444", // Red
    }
];

export default function TrafficView() {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) return;

        // Initialize Map
        mapRef.current = new Map({
            container: mapContainerRef.current,
            style: {
                version: 8,
                sources: {
                    // Using Carto Light basemap for a clean, white theme
                    "carto-light": {
                        type: "raster",
                        tiles: [
                            "https://a.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}@2x.png",
                            "https://b.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}@2x.png",
                            "https://c.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}@2x.png",
                        ],
                        tileSize: 256,
                        attribution: "&copy; CARTO",
                    },
                },
                layers: [
                    {
                        id: "carto-light-layer",
                        type: "raster",
                        source: "carto-light",
                        minzoom: 0,
                        maxzoom: 19,
                    },
                ],
            },
            center: [105.2580, -5.3950], // Center of Bandar Lampung
            zoom: 11.5, // Decreased zoom level to show a wider area
        });

        // Add zoom and rotation controls to the map
        mapRef.current.addControl(new NavigationControl(), "top-right");

        // Loop through data to create markers and popups
        trafficData.forEach((point) => {
            // 1. Create a custom HTML element for the Marker using Tailwind classes
            const customMarkerEl = document.createElement("div");
            customMarkerEl.className = "relative flex items-center justify-center w-8 h-8 cursor-pointer group";
            customMarkerEl.innerHTML = `
                <!-- Outer pulsing circle -->
                <div class="absolute w-full h-full rounded-full opacity-40 animate-ping" style="background-color: ${point.color};"></div>
                <!-- Inner solid dot -->
                <div class="relative z-10 w-4 h-4 rounded-full border-2 border-white shadow-md transition-transform duration-200 group-hover:scale-125" style="background-color: ${point.color};"></div>
            `;

            // 2. HTML for Smart Traffic Popup Design
            const popupContent = `
                <div style="width: 240px; font-family: system-ui, sans-serif; background: #ffffff; padding: 12px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header: Status Badge -->
                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                        <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${point.color};"></span>
                        <span style="font-size: 10px; font-weight: 700; color: #52525b; text-transform: uppercase; letter-spacing: 0.5px;">
                            ${point.status}
                        </span>
                    </div>

                    <!-- Location -->
                    <h4 style="font-weight: 700; font-size: 15px; margin: 0 0 12px 0; color: #09090b; line-height: 1.2;">
                        ${point.location}
                    </h4>
                    
                    <!-- Speed & Delay Grid -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                        <div style="background-color: #f4f4f5; padding: 8px; border-radius: 8px;">
                            <p style="font-size: 10px; margin: 0 0 4px 0; color: #71717a;">Speed</p>
                            <p style="font-size: 13px; margin: 0; font-weight: 700; color: #27272a;">${point.speed}</p>
                        </div>
                        <div style="background-color: #fef2f2; padding: 8px; border-radius: 8px;">
                            <p style="font-size: 10px; margin: 0 0 4px 0; color: #ef4444;">Est. Delay</p>
                            <p style="font-size: 13px; margin: 0; font-weight: 700; color: #dc2626;">${point.delay}</p>
                        </div>
                    </div>

                    <!-- Cause -->
                    <div style="border-top: 1px solid #e4e4e7; padding-top: 10px; margin-bottom: 12px;">
                        <p style="font-size: 10px; margin: 0 0 4px 0; color: #71717a;">Cause:</p>
                        <p style="font-size: 11px; margin: 0; font-weight: 500; color: #3f3f46; line-height: 1.4;">
                            ${point.cause}
                        </p>
                    </div>
                    
                    <!-- Close Button -->
                    <button 
                        class="custom-close-btn"
                        style="display: block; width: 100%; text-align: center; font-size: 12px; font-weight: 600; color: #09090b; background-color: #e4e4e7; padding: 8px 12px; border-radius: 8px; border: none; cursor: pointer; transition: background-color 0.2s;"
                    >
                        Close
                    </button>
                </div>
            `;
            
            const popup = new Popup({ offset: 15, closeButton: false }).setHTML(popupContent);

            popup.on('open', () => {
                const closeBtn = popup.getElement().querySelector('.custom-close-btn');
                if (closeBtn) {
                    closeBtn.onclick = () => popup.remove();
                }
            });

            // 3. Attach the custom element to the Marker
            new Marker({ element: customMarkerEl })
                .setLngLat(point.coordinates)
                .setPopup(popup)
                .addTo(mapRef.current);
        });

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden border border-zinc-200 relative shadow-sm bg-[#fafafa]">
            <div ref={mapContainerRef} className="w-full h-full" />
        </div>
    );
}