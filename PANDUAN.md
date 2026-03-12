# 📖 Panduan Lengkap: Cara Menggunakan Birthday Website

## 🎯 Cara Kerja Website

Website ini memiliki 2 bagian utama:

### 1. **Invitation Card (Undangan Interaktif)** 
Saat pertama kali dibuka, website menampilkan undangan 3 tahap:

#### **Tahap 1: Seal/Stempel** 
- Muncul logo stempel dengan bunga dan teks "i love love <3"
- **Klik** pada stempel untuk membuka

#### **Tahap 2: Birthday Card**
- Muncul kartu ucapan dengan:
  - Tanggal lahir: "20. 2. 2003"
  - Teks: "Happy Birthday Dear"
  - "i love love <3 TWO now!"
- **Klik** pada kartu untuk lanjut

#### **Tahap 3: Letter (Surat Pribadi)**
- Muncul surat lengkap untuk Alya dari Louis
- Isi surat personal dan romantis
- Ada 2 tombol:
  - **"← Start Over"**: Kembali ke tahap 1
  - **"Continue to Celebration →"**: Lanjut ke website utama

### 2. **Main Website (Halaman Utama)**
Setelah klik "Continue to Celebration", muncul:
- Hero Section dengan foto utama
- Birthday Info (tanggal, hari, usia)
- Photo Gallery dengan album kenangan
- Wishes & Prayer section
- Footer

---

## 🎨 Cara Kustomisasi

### A. MENGUBAH ISI UNDANGAN

#### 1. Mengubah Tanggal Lahir
File: `src/components/InvitationCard.jsx`

Cari baris ini (sekitar baris 68-69):
```jsx
<p className="card-date">20. 2. 2003</p>
<p className="card-date-text">TWENTIETH OF FEBRUARY, TWO THOUSAND THREE</p>
```

Ganti dengan tanggal yang sesuai.

#### 2. Mengubah Nama Penerima
File: `src/components/InvitationCard.jsx`

Cari baris ini (sekitar baris 96):
```jsx
<h2 className="letter-greeting">Dear Alya,</h2>
```

Ganti "Alya" dengan nama yang diinginkan.

#### 3. Mengubah Isi Surat
File: `src/components/InvitationCard.jsx`

Cari bagian `letter-body` (sekitar baris 98-110):
```jsx
<div className="letter-body">
  <p>Today's your special day...</p>
  <p>Thank you for being you...</p>
  // Edit semua paragraph di sini
</div>
```

Edit semua teks sesuai keinginan.

#### 4. Mengubah Nama Pengirim
File: `src/components/InvitationCard.jsx`

Cari baris ini (sekitar baris 116-117):
```jsx
<p className="signature-love">Love,</p>
<p className="signature-name">Louis</p>
```

Ganti "Louis" dengan nama pengirim.

---

### B. MENGUBAH DATA MAIN WEBSITE

#### 1. Mengubah Nama di Hero Section
File: `src/components/Hero.jsx` (baris 52-56)
```jsx
<h2 className="hero-name">
  Alya Ersanti  {/* Ganti nama di sini */}
</h2>
```

#### 2. Mengubah Tanggal dan Info Birthday
File: `src/components/BirthdayInfo.jsx` (baris 7-12)
```jsx
const birthdayData = {
  date: '15 Maret 2026',     // Ubah tanggal
  day: 'Minggu',             // Ubah hari
  age: '21',                 // Ubah usia
  place: 'Jakarta, Indonesia' // Ubah tempat (tidak ditampilkan)
}
```

#### 3. Menambah/Ubah Foto di Gallery
File: `src/components/PhotoGallery.jsx` (baris 9-41)

```jsx
const photos = [
  {
    id: 1,
    src: '/images/memory-1.svg',  // Path foto (ganti .svg dengan .jpg)
    caption: 'Kenangan Indah',    // Caption foto
    category: 'Friends'           // Kategori
  },
  // Tambah foto lain dengan id berikutnya
]
```

**Untuk menambah foto:**
- Upload foto ke folder `public/images/`
- Tambah object baru di array `photos`

---

### C. MENGGANTI FOTO

#### Upload Foto Anda:

1. **Foto Utama (Hero Section)**
   - Nama file: `main-photo.jpg` atau `main-photo.png`
   - Lokasi: `public/images/`
   - Update di `Hero.jsx` baris 41:
   ```jsx
   src="/images/main-photo.jpg"  // Ganti .svg jadi .jpg
   ```

2. **Foto Gallery**
   - Nama file: `memory-1.jpg`, `memory-2.jpg`, dst
   - Lokasi: `public/images/`
   - Update di `PhotoGallery.jsx` ubah semua `.svg` jadi `.jpg`

**Tips:**
- Gunakan format JPG atau PNG
- Ukuran maksimal: 2MB per foto
- Resolusi ideal: 1000x1000px untuk square images

---

### D. MENGUBAH WARNA TEMA

File: `src/index.css` (baris 10-16)

```css
:root {
  --color-primary: #C85A54;    /* Merah bata utama */
  --color-secondary: #E89B96;  /* Coral terang */
  --color-accent: #FF7F6E;     /* Coral accent */
  --color-light: #FFF5F2;      /* Background terang */
  --color-cream: #FAE8E0;      /* Cream */
  --color-dark: #5C3A31;       /* Coklat tua untuk teks */
}
```

Ganti kode warna (hex) sesuai keinginan.

---

### E. MENONAKTIFKAN INVITATION CARD

Jika Anda ingin langsung ke main website tanpa undangan:

File: `src/App.jsx` (baris 10-11)

Ubah:
```jsx
const [showInvitation, setShowInvitation] = useState(true)  // true = tampil
```

Menjadi:
```jsx
const [showInvitation, setShowInvitation] = useState(false)  // false = skip
const [showMainContent, setShowMainContent] = useState(true)  // true = langsung tampil
```

---

## 🚀 Command Penting

```bash
# Install dependencies (sekali saja di awal)
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm preview
```

---

## 📱 Preview di Mobile

Untuk test di HP:

1. Jalankan `npm run dev`
2. Cari IP komputer Anda (misal: 192.168.1.100)
3. Di HP, buka browser dan ketik: `http://192.168.1.100:5173`

---

## 🎯 Checklist Sebelum Deploy

- [ ] Ganti semua nama (Alya, Louis)
- [ ] Update tanggal lahir di 2 tempat (InvitationCard dan BirthdayInfo)
- [ ] Upload foto asli (main-photo dan memory-1 sampai memory-6)
- [ ] Edit isi surat sesuai keinginan
- [ ] Test di browser (Chrome, Firefox, Safari)
- [ ] Test di mobile device
- [ ] Build production: `npm run build`
- [ ] Deploy ke hosting

---

## ❓ FAQ

**Q: Bagaimana cara menambah foto di gallery?**
A: Upload foto ke `public/images/` dan tambahkan entry baru di array `photos` di `PhotoGallery.jsx`

**Q: Bisa skip invitation card langsung ke main website?**
A: Ya, ikuti instruksi di bagian "MENONAKTIFKAN INVITATION CARD" di atas

**Q: Foto saya terlalu besar, gimana resize?**
A: Gunakan tool online seperti tinypng.com atau photopea.com untuk compress

**Q: Bisa ganti font?**
A: Ya, edit link Google Fonts di `index.html` dan ubah CSS variable `--font-heading` dan `--font-body` di `index.css`

**Q: Error "Cannot find module" saat npm run dev?**
A: Jalankan `npm install` lagi untuk install semua dependencies

---

## 🎉 Selamat!

Website birthday Anda siap! Tinggal customize sesuai keinginan dan deploy online. Happy Birthday! 🎂
