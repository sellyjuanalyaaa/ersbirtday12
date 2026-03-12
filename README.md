# Birthday Website - Alya Ersanti 🎂

Website landing page ulang tahun dengan tema vintage dan warna coral/merah bata yang modern dan interaktif. Menampilkan animasi undangan 3 tahap yang bisa diklik seperti membuka amplop digital.

---

## 📚 Dokumentasi

| File | Deskripsi |
|------|-----------|
| **[QUICKSTART.md](QUICKSTART.md)** | ⚡ Quick start guide - mulai di sini! |
| **[PANDUAN.md](PANDUAN.md)** | 📖 Panduan lengkap cara edit & customize |
| **[STRUKTUR.md](STRUKTUR.md)** | 📁 Penjelasan struktur file & folder |
| **[DEPLOYMENT.md](DEPLOYMENT.md)** | 🚀 Cara deploy ke internet |

---

## 🎨 Fitur

- **Interactive Invitation Card**: 3 tahap animasi yang bisa diklik
  - Stage 1: Seal/stempel dengan teks "i love love <3"
  - Stage 2: Birthday card dengan tanggal lahir
  - Stage 3: Surat pribadi untuk Alya
- **Hero Section**: Foto utama dengan animasi menarik
- **Birthday Info**: Menampilkan tanggal, hari, dan usia
- **Photo Gallery**: Album kenangan dengan lightbox interaktif
- **Wishes Section**: Koleksi doa dan harapan
- **Animasi Modern**: Menggunakan Framer Motion untuk transisi smooth
- **Responsive Design**: Tampil sempurna di desktop dan mobile

## 🚀 Instalasi & Menjalankan

1. **Install dependencies**:
```bash
npm install
```

2. **Jalankan development server**:
```bash
npm run dev
```

3. **Build untuk production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm preview
```

## 📸 Menambahkan Foto

Tambahkan foto-foto Anda ke folder `public/images/` dengan nama-nama berikut:

- `main-photo.jpg` - Foto utama untuk Hero section
- `memory-1.jpg` sampai `memory-6.jpg` - Foto untuk gallery (bisa ditambah lebih banyak)

**Format yang disarankan**:
- Format: JPG, PNG, atau WebP
- Ukuran maksimal: 2MB per foto untuk performa optimal
- Resolusi: 1000x1000px untuk square images

## ⚙️ Kustomisasi

### Mengubah Teks di Invitation Card

Edit file `src/components/InvitationCard.jsx`:

**Mengubah tanggal di Birthday Card:**
```jsx
<p className="card-date">20. 2. 2003</p>
<p className="card-date-text">TWENTIETH OF FEBRUARY, TWO THOUSAND THREE</p>
```

**Mengubah isi surat:**
```jsx
<h2 className="letter-greeting">Dear Alya,</h2>
// Edit teks surat di bagian letter-body
```

**Mengubah nama pengirim:**
```jsx
<p className="signature-name">Louis</p>
```

### Mengubah Data Birthday

Edit file `src/components/BirthdayInfo.jsx`:

```jsx
const birthdayData = {
  date: '15 Maret 2026',     // Ubah tanggal
  day: 'Minggu',              // Ubah hari
  age: '21',                  // Ubah usia
  place: 'Jakarta, Indonesia' // Ubah tempat
}
```

### Mengubah Nama

Edit file `src/components/Hero.jsx`:

```jsx
<h2 className="hero-name">
  Alya Ersanti  {/* Ubah nama di sini */}
</h2>
```

### Menambah/Mengubah Foto Gallery

Edit file `src/components/PhotoGallery.jsx`:

```jsx
const photos = [
  {
    id: 1,
    src: '/images/memory-1.jpg',  // Path foto
    caption: 'Kenangan Indah',     // Caption foto
    category: 'Friends'            // Kategori
  },
  // Tambah foto lainnya...
]
```

### Mengubah Doa/Wishes

Edit file `src/components/Wishes.jsx` pada array `wishes`.

### Mengubah Warna

Edit file `src/index.css` pada bagian `:root`:

```css
:root {
  --color-primary: #C85A54;    /* Merah bata */
  --color-secondary: #E89B96;  /* Coral terang */
  --color-accent: #FF7F6E;     /* Coral accent */
  --color-light: #FFF5F2;      /* Background terang */
  --color-cream: #FAE8E0;      /* Cream */
  --color-dark: #5C3A31;       /* Coklat tua */
}
```

## 📦 Dependencies

- **React 18**: Framework utama
- **Vite**: Build tool & dev server
- **Framer Motion**: Library animasi
- **Lucide React**: Icon library

## 🎯 Struktur Project

```
birtdayersa/
├── public/
│   ├── images/          # Folder untuk semua foto
│   │   ├── main-photo.jpg
│   │   ├── memory-1.jpg
│   │   └── ...
│   └── vite.svg
├── src/
│   ├── components/      # Semua komponen
│   │   ├── Hero.jsx
│   │   ├── BirthdayInfo.jsx
│   │   ├── PhotoGallery.jsx
│   │   ├── Wishes.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

## 💡 Tips

1. **Optimasi Foto**: Kompres foto sebelum upload untuk loading yang lebih cepat
2. **Backup**: Simpan salinan foto original di folder terpisah
3. **Testing**: Test di berbagai device (mobile, tablet, desktop)
4. **Browser**: Support untuk Chrome, Firefox, Safari, dan Edge modern

## 🌐 Deploy

Website ini bisa di-deploy ke:
- **Vercel**: `npm i -g vercel` kemudian `vercel`
- **Netlify**: Drag & drop folder `dist` setelah build
- **GitHub Pages**: Setup di repository settings

## 📝 Catatan

- Website ini tidak menggunakan database - semua data hardcoded
- Foto disimpan di folder public
- Design responsive untuk semua ukuran layar
- Animasi menggunakan CSS dan Framer Motion

## 🎉 Selamat!

Website birthday interaktif Anda sudah siap! Tinggal tambahkan foto-foto dan customize sesuai keinginan.

---

Made with ❤️ for Alya's Birthday
