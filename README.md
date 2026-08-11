# TamaraAgro Farm - Company Profile

Website company profile untuk **CV Tamara Agro Indonesia (TamaraAgro Farm)**, sebuah perusahaan hortikultura dan agrobisnis. Website ini dirancang untuk memperkenalkan perusahaan, menampilkan komoditas, layanan, perjalanan perusahaan, visi misi, pencapaian, testimoni, dokumentasi, publikasi, serta membuka peluang kerja sama.

## 🚀 Teknologi yang Digunakan

Website ini dibangun menggunakan teknologi modern untuk performa yang optimal:

- **[React 19](https://react.dev/)** - Library JavaScript untuk membangun antarmuka pengguna
- **[Vite 8](https://vitejs.dev/)** - Frontend tooling yang sangat cepat
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS berbasis utilitas
- **[React Router 7](https://reactrouter.com/)** - Routing untuk Single Page Application (SPA)
- **[Lucide React](https://lucide.dev/)** - Ikon SVG yang elegan dan konsisten

## 🛠️ Cara Set Up di Komputer Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan project ini di komputer Anda:

### 1. Persyaratan Sistem
Pastikan Anda sudah menginstal:
- **Node.js** (Versi 18 atau yang lebih baru disarankan)
- **Git** (Opsional, jika ingin melakukan pull dari repositori)

### 2. Instalasi
Buka terminal/command prompt, lalu masuk ke folder project ini dan jalankan perintah berikut untuk menginstal semua dependensi (paket yang dibutuhkan):

```bash
npm install
```

### 3. Menjalankan Mode Development
Untuk menjalankan website di komputer Anda (dengan fitur *hot-reload*):

```bash
npm run dev
```
Setelah jalan, buka browser dan akses URL yang muncul di terminal (biasanya `http://localhost:5173`).

### 4. Membuat Build untuk Produksi
Jika Anda ingin melihat hasil akhir aplikasi yang sudah di-optimisasi:

```bash
npm run build
```
Perintah ini akan membuat folder `dist` yang berisi file statis siap pakai. Untuk menguji folder `dist` tersebut di komputer lokal secara langsung, jalankan:

```bash
npm run preview
```

## 🌍 Cara Deploy ke Vercel

Project ini sudah dikonfigurasi untuk langsung dapat berjalan di Vercel (terdapat file `vercel.json` untuk mengatasi isu *routing* pada SPA).

### Via Dashboard Vercel (Sangat Disarankan)
1. Push kode Anda ke GitHub:
   ```bash
   git add .
   git commit -m "Update project"
   git push origin main
   ```
2. Buka [vercel.com](https://vercel.com/) dan login.
3. Klik tombol **"Add New..." > "Project"**.
4. Pilih repositori GitHub ini dan klik **"Import"**.
5. Vercel akan otomatis mengenali project ini sebagai project **Vite**. Tidak perlu mengubah konfigurasi (Build command otomatis `npm run build` dan Output directory otomatis `dist`).
6. Klik **"Deploy"** dan tunggu hingga selesai.

---

*Dibuat untuk TamaraAgro Farm - CV Tamara Agro Indonesia.*
