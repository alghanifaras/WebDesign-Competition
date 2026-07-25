"use client";

import { useEffect, useRef } from "react";
import { Map, NavigationControl, Popup, Marker } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

// Daftar 10 Tempat Wisata di sekitar Bandar Lampung
const tempatWisata = [
    {
        id: 1,
        nama: "Puncak Mas",
        kategori: "Wisata Alam",
        deskripsi: "Destinasi wisata pemandangan kota dari atas bukit yang menawan.",
        gambar: "/gallery/Puncak_mas_1.jpg",
        koordinat: [105.2281, -5.4042],
        warna: "#EF4444", 
        link: "#",
    },
    {
        id: 2,
        nama: "Pantai Mutun",
        kategori: "Bahari",
        deskripsi: "Pantai pasir putih terdekat dari pusat kota dengan wahana air lengkap.",
        gambar: "/gallery/Pantai_mutun_1.jpg",
        koordinat: [105.2572, -5.5133],
        warna: "#0EA5E9", 
        link: "#",
    },
    {
        id: 3,
        nama: "Lembah Hijau",
        kategori: "Rekreasi",
        deskripsi: "Taman rekreasi keluarga dengan waterboom dan kebun binatang mini.",
        gambar: "/gallery/Lembah_hijau_1.jpg",
        koordinat: [105.2418, -5.4295],
        warna: "#10B981", 
        link: "#",
    },
    {
        id: 4,
        nama: "Pantai Sari Ringgung",
        kategori: "Bahari",
        deskripsi: "Terkenal dengan pasir timbul dan masjid terapung di tengah laut.",
        gambar: "/gallery/Sari_ringgung_1.jpg",
        koordinat: [105.2453, -5.5694],
        warna: "#3B82F6", 
        link: "#",
    },
    {
        id: 5,
        nama: "Wira Garden",
        kategori: "Wisata Alam",
        deskripsi: "Taman wisata bernuansa sungai alami dengan area camping ground.",
        gambar: "/gallery/Wira_garden_2.jpg",
        koordinat: [105.2227, -5.4183],
        warna: "#F59E0B", 
        link: "#",
    },
    {
        id: 6,
        nama: "Museum Lampung",
        kategori: "Budaya",
        deskripsi: "Pusat pelestarian sejarah dan kebudayaan adat Sai Bumi Ruwa Jurai.",
        gambar: "/gallery/museum_lampung_1.jpg",
        koordinat: [105.2442, -5.3783],
        warna: "#8B5CF6", 
        link: "#",
    },
    {
        id: 7,
        nama: "Tegal Mas Island",
        kategori: "Bahari",
        deskripsi: "Pulau eksotis bergaya Maldives dengan penginapan terapung.",
        gambar: "/gallery/Tegal_mas_island_1.jpg",
        koordinat: [105.2403, -5.5824],
        warna: "#06B6D4", 
        link: "#",
    },
    {
        id: 8,
        nama: "Lengkung Langit",
        kategori: "Wisata Alam",
        deskripsi: "Taman wisata di dataran tinggi dengan gapura bergaya kerajaan nusantara.",
        gambar: "/gallery/Lengkung_langit_1.jpg",
        koordinat: [105.2120, -5.3980],
        warna: "#EC4899", 
        link: "#",
    },
    {
        id: 9,
        nama: "Taman Kupu-Kupu",
        kategori: "Edukasi",
        deskripsi: "Penangkaran kupu-kupu alami di area Gunung Betung (Gita Persada).",
        gambar: "/gallery/Taman_kupu-kupu_1.jpg",
        koordinat: [105.2110, -5.3850],
        warna: "#14B8A6", 
        link: "#",
    },
    {
        id: 10,
        nama: "Teropong Kota",
        kategori: "Wisata Alam",
        deskripsi: "Spot nongkrong malam hari terbaik untuk melihat city light Bandar Lampung.",
        gambar: "/gallery/Teropong_kota_1.jpg",
        koordinat: [105.2355, -5.4022],
        warna: "#F97316", 
        link: "#",
    },
];

export default function MapView() {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) return;

        // Inisialisasi Peta
        mapRef.current = new Map({
            container: mapContainerRef.current,
            style: {
                version: 8,
                sources: {
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
            center: [105.2350, -5.4600], 
            zoom: 10.5, 
        });

        // Tambahkan kontrol navigasi (+/-)
        mapRef.current.addControl(new NavigationControl(), "top-right");

        // Looping data marker & popup
        tempatWisata.forEach((wisata) => {
            const popupContent = `
    <div style="width: 220px; font-family: system-ui, sans-serif; background: #ffffff;">
      <!-- Gambar Header Card -->
      <div style="width: 100%; height: 100px; background-image: url('${wisata.gambar}'); background-size: cover; background-position: center; relative;">
      </div>
      
      <!-- Isi Konten Card -->
      <div style="padding: 12px;">
        <span style="font-size: 10px; font-weight: 600; color: #52525b; background-color: #f4f4f5; padding: 2px 8px; border-radius: 999px; text-transform: uppercase;">
          ${wisata.kategori}
        </span>
        <h4 style="font-weight: 700; font-size: 14px; margin: 6px 0 2px 0; color: #09090b;">
          ${wisata.nama}
        </h4>
        <p style="font-size: 12px; margin: 0 0 12px 0; color: #71717a; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${wisata.deskripsi}
        </p>
        <a 
          href="${wisata.link}" 
          style="display: block; text-align: center; font-size: 12px; font-weight: 600; color: #ffffff; background-color: #09090b; padding: 8px 12px; border-radius: 8px; text-decoration: none;"
        >
          View Details
        </a>
        <button 
          class="custom-close-btn"
          style="display: block; width: 100%; text-align: center; font-size: 12px; font-weight: 600; color: #09090b; background-color: #e4e4e7; padding: 8px 12px; border-radius: 8px; border: none; margin-top: 8px; cursor: pointer; transition: background-color 0.2s;"
        >
          Close
        </button>
      </div>
    </div>
  `;
            // closeButton: false untuk menghilangkan "x" di sudut kanan atas
            const popup = new Popup({ offset: 25, closeButton: false }).setHTML(popupContent);

            // Memberikan fungsi klik pada tombol "Close" yang baru dibuat
            popup.on('open', () => {
                const closeBtn = popup.getElement().querySelector('.custom-close-btn');
                if (closeBtn) {
                    closeBtn.onclick = () => popup.remove();
                }
            });

            const marker = new Marker({ color: wisata.warna })
                .setLngLat(wisata.koordinat)
                .setPopup(popup)
                .addTo(mapRef.current);

            marker.getElement().style.cursor = "pointer";
        });

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden border border-zinc-200 relative shadow-sm">
            <div ref={mapContainerRef} className="w-full h-full" />
        </div>
    );
}