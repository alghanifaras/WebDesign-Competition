<div align="center">

# 🌐 WebDesign-Competition

Sebuah template/portofolio web interaktif berbasis **Next.js (App Router)** yang menampilkan halaman berita, galeri, dan komponen UI modular. Cocok digunakan sebagai *landing page*, portofolio, atau demo untuk kompetisi desain web.

[Fitur](#-fitur-utama) • [Teknologi](#️-teknologi-yang-digunakan) • [Struktur Proyek](#-struktur-proyek) • [Instalasi](#-cara-menjalankan) • [Skrip](#-skrip-yang-tersedia)

</div>

---

## 🚀 Fitur Utama

- **Halaman Berita & Artikel:** Dilengkapi dengan fitur filter, grid, sidebar, dan rekomendasi berita (`/berita`).
- **Destinasi & Laporan:** Halaman khusus untuk menampilkan destinasi (`/destination`), laporan (`/report`), serta lalu lintas data (`/traffic`).
- **Desain Interaktif & Modern:** Didukung oleh animasi halus menggunakan **Framer Motion** dan **GSAP**.
- **Komponen UI Modular:** Dibangun dengan pendekatan komponen yang dapat digunakan kembali (*reusable components*).
- **Dukungan Peta Opsional:** Integrasi dengan `maplibre-gl` untuk kebutuhan pemetaan.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi modern:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library Utama:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS
- **Animasi:** `framer-motion`, `gsap`, `motion`, `tw-animate-css`
- **Peta:** `maplibre-gl` & `cobe`
- **Komponen UI & Ikon:** `@base-ui/react`, `shadcn`, `lucide-react`, `@radix-ui/react-icons`
- **Utilitas:** `clsx`, `tailwind-merge`, `class-variance-authority`, `next-themes`

---

## 📂 Struktur Proyek

Berikut adalah ringkasan struktur direktori utama dari repositori ini:

```text
.
├── public/                 # Aset publik (gambar, SVG, galeri, dll.)
│   ├── assets/...
│   └── gallery/...
└── src/
    ├── app/                # App Router (Routes & Entry Points)
    │   ├── layout.js       # Layout global aplikasi
    │   ├── page.js         # Halaman utama (Landing Page)
    │   ├── globals.css     # Styling global & konfigurasi Tailwind
    │   ├── berita/         # Route halaman berita
    │   ├── destination/    # Route halaman destinasi
    │   ├── report/         # Route halaman laporan
    │   └── traffic/        # Route halaman lalu lintas
    ├── components/         # Komponen UI modular
    │   ├── ui/...          # Komponen primitif / utilitas UI
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── HeroSection.jsx
    │   ├── AboutUs.jsx
    │   ├── Contact.jsx
    │   └── ... (komponen lainnya)
    └── lib/
        ├── dummyData.js    # Data mock / contoh konten
        └── utils.js        # Fungsi utilitas pembantu
```

---

## ⚙️ Skrip yang Tersedia

Di dalam `package.json`, terdapat beberapa skrip yang dapat Anda gunakan:

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan *development server* Next.js |
| `npm run build` | Melakukan *build* aplikasi untuk mode produksi |
| `npm run start` | Menjalankan server produksi (setelah proses *build* selesai) |
| `npm run lint` | Menjalankan ESLint untuk memeriksa kesalahan penulisan kode |

---

## 📦 Cara Menjalankan

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal dari *fresh clone*:

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/alghanifaras/WebDesign-Competition.git
   ```

2. **Masuk ke direktori proyek:**
   ```bash
   cd WebDesign-Competition
   ```

3. **Install semua *dependencies*:**
   ```bash
   npm install
   ```

4. **Jalankan *development server*:**
   ```bash
   npm run dev
   ```

5. Buka [http://localhost:3000](http://localhost:3000) melalui peramban (browser) pilihan Anda untuk melihat hasil aplikasinya.

---

## 📄 Lisensi

Proyek ini bersifat open-source dan bebas digunakan untuk keperluan pembelajaran, portofolio, maupun kompetisi desain web.
