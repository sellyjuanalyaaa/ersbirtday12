# Birthday Website - Ersa Rahma Maulani 🎂

Website birthday interaktif untuk Ersa Rahma Maulani dengan nuansa romantis, vintage, dan personal. Project ini berisi opening invitation, hero section, countdown perjalanan hidup, scrapbook, galeri foto, video memori, wishes, dan final surprise.

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

- **Interactive Invitation Card**: 3 tahap pembuka yang bisa diklik
  - Stage 1: Cover card dengan heart buttons
  - Stage 2: Birthday card untuk Ersa
  - Stage 3: Surat pribadi yang bisa dilanjutkan ke halaman utama
- **Hero Section**: Foto utama, moving background text, dan dekorasi love/spark
- **Birthday Journey Section**: Timeline dari 12 March 2005 sampai 12 March 2026
- **Scrapbook Letter**: Letter layout dan photo strip memori
- **Photo Gallery**: Album kenangan dengan beberapa foto
- **Memory Video Section**: Slot video memori yang membaca file dari folder public
- **Wishes Section**: Kumpulan doa dan harapan
- **Background Music**: Musik yang bisa diputar langsung dari website
- **Responsive Design**: Sudah disesuaikan untuk desktop dan mobile

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

## 📸 Menambahkan Foto dan Video

Tambahkan asset Anda ke folder berikut:

- `public/images/` untuk foto
- `public/videos/` untuk video

File yang umum dipakai di project ini:

- `public/images/main-photo.svg` atau ganti ke foto utama Anda
- `public/images/memory-1.svg` sampai `public/images/memory-6.svg` untuk scrapbook/gallery
- `public/images/love.png` dan `public/images/spark.png` untuk dekorasi hero
- `public/videos/memory-video.mp4` untuk section video memori

**Format yang disarankan**:
- Format: JPG, PNG, atau WebP
- Ukuran maksimal: 2MB per foto untuk performa optimal
- Resolusi: 1000x1000px untuk square images

## ⚙️ Kustomisasi

### Mengubah Teks di Invitation Card

Edit file `src/components/InvitationCard.jsx`:

**Mengubah tanggal di Birthday Card:**
```jsx
<p className="card-date">12. 3. 2005</p>
<p className="card-date-text">TWELFTH OF MARCH, TWO THOUSAND FIVE</p>
```

**Mengubah isi surat:**
```jsx
<h2 className="letter-greeting">Dear Ersa,</h2>
// Edit teks surat di bagian letter-body
```

**Mengubah nama pengirim:**
```jsx
<p className="signature-name">sellyyyyy</p>
```

### Mengubah Hero Section

Edit file `src/components/Hero.jsx`:

```jsx
<motion.h1 className="hero-title">
  Ersa's 21st day
</motion.h1>

<motion.p className="hero-subtitle">
  Wishing you a day filled with love, joy, and beautiful memories
</motion.p>
```

### Mengubah Birthday Journey

Edit file `src/components/BirthdayInfo.jsx`:

```jsx
// Section "Hari Istimewa" memakai CountdownFuture di dalamnya
```

Edit file `src/components/CountdownFuture.jsx` untuk mengubah angka/timeline:

```jsx
const startDate = new Date('2005-03-12T00:00:00')
const milestoneDate = new Date('2026-03-12T00:00:00')
```

### Menambah/Mengubah Foto Gallery

Edit file `src/components/PhotoGallery.jsx`:

```jsx
const photos = [
  {
    id: 1,
    src: '/images/memory-1.svg',  // Path foto
    caption: 'Kenangan Indah',     // Caption foto
    category: 'Friends'            // Kategori
  },
  // Tambah foto lainnya...
]
```

### Menambahkan Video Memori

Taruh file video di:

```bash
public/videos/memory-video.mp4
```

Section video akan otomatis mencoba menampilkan file itu dari `src/components/PlaylistPage.jsx`.

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
│   ├── audio/           # Folder backsound
│   ├── images/          # Folder foto dan dekorasi
│   ├── videos/          # Folder video memori
│   └── vite.svg
├── src/
│   ├── components/      # Semua komponen
│   │   ├── Hero.jsx
│   │   ├── BirthdayInfo.jsx
│   │   ├── CountdownFuture.jsx
│   │   ├── InvitationCard.jsx
│   │   ├── PlaylistPage.jsx
│   │   ├── ScrapbookLetter.jsx
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

Website birthday interaktif untuk Ersa Rahma Maulani sudah siap diedit lagi sesuai kebutuhan Anda. Tinggal ganti foto, video, teks, dan asset yang ingin dipersonalisasi.

---

Made with ❤️ for Ersa Rahma Maulani
