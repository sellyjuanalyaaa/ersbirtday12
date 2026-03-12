# 📁 Struktur File Project

```
birtdayersa/
│
├── public/                          # File statis yang bisa diakses langsung
│   ├── images/                      # Folder untuk semua foto
│   │   ├── main-photo.svg          # Foto utama Hero (ganti dengan .jpg)
│   │   ├── memory-1.svg            # Foto gallery 1 (ganti dengan .jpg)
│   │   ├── memory-2.svg            # Foto gallery 2 (ganti dengan .jpg)
│   │   ├── memory-3.svg            # Foto gallery 3 (ganti dengan .jpg)
│   │   ├── memory-4.svg            # Foto gallery 4 (ganti dengan .jpg)
│   │   ├── memory-5.svg            # Foto gallery 5 (ganti dengan .jpg)
│   │   ├── memory-6.svg            # Foto gallery 6 (ganti dengan .jpg)
│   │   └── README.md               # Instruksi tentang foto
│   └── vite.svg                     # Default Vite logo
│
├── src/                             # Source code aplikasi
│   ├── components/                  # Semua komponen React
│   │   ├── InvitationCard.jsx      # ⭐ Komponen undangan 3 tahap
│   │   ├── InvitationCard.css      # Style untuk undangan
│   │   ├── Hero.jsx                # Hero section dengan foto utama
│   │   ├── Hero.css                # Style Hero section
│   │   ├── BirthdayInfo.jsx        # Info tanggal, hari, usia
│   │   ├── BirthdayInfo.css        # Style Birthday Info
│   │   ├── PhotoGallery.jsx        # Gallery foto dengan lightbox
│   │   ├── PhotoGallery.css        # Style Photo Gallery
│   │   ├── Wishes.jsx              # Section doa dan harapan
│   │   ├── Wishes.css              # Style Wishes section
│   │   ├── Footer.jsx              # Footer website
│   │   └── Footer.css              # Style Footer
│   │
│   ├── App.jsx                      # Komponen utama (mengatur invitation & main)
│   ├── App.css                      # Style App global
│   ├── main.jsx                     # Entry point React
│   └── index.css                    # ⭐ Global CSS & Color Variables
│
├── index.html                       # HTML utama (include Google Fonts)
├── vite.config.js                   # Konfigurasi Vite
├── package.json                     # Dependencies & Scripts
├── README.md                        # Dokumentasi utama
├── PANDUAN.md                       # ⭐ Panduan lengkap penggunaan
└── .gitignore                       # File yang diabaikan Git

```

## 📝 Penjelasan File Penting

### 🎯 File yang Sering Diedit:

1. **`src/components/InvitationCard.jsx`**
   - Undangan interaktif 3 tahap
   - Edit: tanggal lahir, nama, isi surat, nama pengirim

2. **`src/components/Hero.jsx`**
   - Foto utama dan nama birthday person
   - Edit: nama di hero-name

3. **`src/components/BirthdayInfo.jsx`**
   - Data tanggal, hari, usia
   - Edit: object `birthdayData`

4. **`src/components/PhotoGallery.jsx`**
   - Gallery foto dengan array `photos`
   - Edit: tambah/hapus foto, ubah caption

5. **`src/components/Wishes.jsx`**
   - Doa dan harapan
   - Edit: array `wishes` untuk ubah isi doa

6. **`src/index.css`**
   - Warna tema di CSS variables `:root`
   - Font global

### 🎨 File CSS:

Setiap komponen punya file CSS sendiri dengan nama yang sama:
- `Hero.jsx` → `Hero.css`
- `BirthdayInfo.jsx` → `BirthdayInfo.css`
- dst...

### 📦 File Konfigurasi:

- **`package.json`**: Dependencies (React, Framer Motion, Lucide)
- **`vite.config.js`**: Setup Vite dengan plugin React
- **`index.html`**: HTML root + Google Fonts link

### 📸 Folder public/images/:

Semua foto disimpan di sini. File bisa diakses dengan path `/images/nama-file.jpg`

---

## 🔄 Alur Kerja Komponen

```
App.jsx (Container Utama)
│
├── showInvitation = true?
│   └── InvitationCard.jsx
│       ├── Stage 0: Seal
│       ├── Stage 1: Birthday Card  
│       ├── Stage 2: Letter
│       └── onComplete() → hide invitation, show main content
│
└── showMainContent = true?
    ├── Hero.jsx
    ├── BirthdayInfo.jsx
    ├── PhotoGallery.jsx
    ├── Wishes.jsx
    └── Footer.jsx
```

---

## 🎨 CSS Variables (Warna Tema)

Didefinisikan di `src/index.css`:

```css
--color-primary: #C85A54;     /* Merah bata - warna utama */
--color-secondary: #E89B96;   /* Coral terang - aksen */
--color-accent: #FF7F6E;      /* Coral bright - highlight */
--color-light: #FFF5F2;       /* Background terang */
--color-cream: #FAE8E0;       /* Cream - background alternatif */
--color-dark: #5C3A31;        /* Coklat tua - teks */
--color-text: #4A2C2A;        /* Teks utama */

--font-heading: 'Playfair Display', serif;  /* Font judul */
--font-body: 'Poppins', sans-serif;         /* Font body */
```

Digunakan di semua file CSS dengan `var(--color-primary)`, etc.

---

## 📦 Dependencies

### Production:
- **React 18**: Library UI
- **React DOM**: React untuk browser
- **Framer Motion**: Library animasi
- **Lucide React**: Icon library

### Development:
- **Vite**: Build tool & dev server
- **@vitejs/plugin-react**: Plugin React untuk Vite

---

## 🚀 NPM Scripts

```json
"scripts": {
  "dev": "vite",              // Jalankan dev server
  "build": "vite build",      // Build untuk production
  "preview": "vite preview"   // Preview production build
}
```

---

## 📂 File yang Tidak Perlu Diedit:

- `vite.config.js` - sudah optimal
- `main.jsx` - entry point standard
- `.gitignore` - ignore node_modules, dist, dll

---

## 💡 Tips Navigasi:

1. **Edit Konten**: Fokus ke folder `src/components/`
2. **Edit Warna**: Edit `src/index.css` (bagian `:root`)
3. **Upload Foto**: Ke folder `public/images/`
4. **Lihat Error**: Check terminal atau browser console

---

Untuk panduan lengkap cara edit, baca **`PANDUAN.md`** 📖
