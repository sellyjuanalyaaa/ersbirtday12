# 🎂 Birthday Website - Quick Start

## ✨ Apa yang Sudah Dibuat?

Website birthday interaktif dengan 2 bagian utama:

### 1. **Interactive Invitation Card** (3 Tahap)
- **Tahap 1**: Seal/stempel dengan "i love love <3" → klik untuk buka
- **Tahap 2**: Birthday card dengan tanggal lahir → klik untuk lanjut  
- **Tahap 3**: Surat pribadi lengkap → ada button "Continue to Celebration"

### 2. **Main Website**
- Hero section dengan foto utama & nama
- Birthday Info (tanggal, hari, usia)
- Photo Gallery dengan lightbox interaktif
- Wishes & prayers section
- Footer

---

## 🚀 Cara Mulai

```bash
# 1. Install dependencies (sekali saja)
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka browser ke: http://localhost:5173
```

---

## 📝 Yang Harus Diubah

### Prioritas Tinggi (Wajib):

1. **Nama** di 3 tempat:
   - `InvitationCard.jsx` → "Dear Alya"
   - `InvitationCard.jsx` → nama pengirim "Louis"
   - `Hero.jsx` → "Alya Ersanti"

2. **Tanggal Lahir** di 2 tempat:
   - `InvitationCard.jsx` → "20. 2. 2003"
   - `BirthdayInfo.jsx` → `birthdayData` object

3. **Isi Surat**:
   - `InvitationCard.jsx` → edit semua paragraph di `letter-body`

4. **Upload Foto**:
   - Ke folder `public/images/`
   - Foto utama: `main-photo.jpg`
   - Gallery: `memory-1.jpg` sampai `memory-6.jpg`
   - Update path di `Hero.jsx` dan `PhotoGallery.jsx`

### Opsional:

- Ubah warna tema di `index.css`
- Edit doa/wishes di `Wishes.jsx`
- Tambah/kurangi foto di gallery

---

## 📚 Dokumentasi Lengkap

| File | Isi |
|------|-----|
| **README.md** | Overview & fitur utama |
| **PANDUAN.md** | 📖 Panduan lengkap cara edit & customize |
| **STRUKTUR.md** | 📁 Penjelasan struktur file & folder |
| **DEPLOYMENT.md** | 🚀 Cara deploy ke internet (Vercel, Netlify, dll) |

---

## 🎨 Features Highlights

✅ **Animasi Smooth** dengan Framer Motion  
✅ **3-Stage Interactive Card** seperti membuka amplop  
✅ **Responsive Design** untuk mobile & desktop  
✅ **Lightbox Gallery** untuk melihat foto fullscreen  
✅ **Modern UI/UX** dengan tema vintage coral  
✅ **No Database** - semua data hardcoded  
✅ **Easy to Customize** - edit langsung di file  

---

## 🔧 Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool & dev server  
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vanilla CSS** - Styling

---

## 📦 Project Structure (Simplified)

```
birtdayersa/
├── src/
│   ├── components/         # Semua komponen
│   │   ├── InvitationCard.jsx  ⭐ Edit: surat, nama, tanggal
│   │   ├── Hero.jsx            ⭐ Edit: nama
│   │   ├── BirthdayInfo.jsx    ⭐ Edit: data birthday
│   │   ├── PhotoGallery.jsx    ⭐ Edit: foto & caption
│   │   └── Wishes.jsx          Edit: doa
│   └── index.css          ⭐ Edit: warna tema
│
├── public/images/         ⭐ Upload foto di sini
│
└── Dokumentasi:
    ├── README.md          Overview
    ├── PANDUAN.md         ⭐ Baca ini untuk cara edit
    ├── STRUKTUR.md        File structure
    └── DEPLOYMENT.md      Cara deploy
```

---

## 🎯 Quick Edit Guide

### Edit Nama:
```bash
# Cari "Alya" dan "Louis" di:
src/components/InvitationCard.jsx
src/components/Hero.jsx
```

### Edit Tanggal:
```bash
# Cari "20. 2. 2003" dan birthdayData di:
src/components/InvitationCard.jsx
src/components/BirthdayInfo.jsx
```

### Upload Foto:
```bash
# Upload ke: public/images/
# Ganti path di: Hero.jsx dan PhotoGallery.jsx
# Ubah .svg jadi .jpg
```

### Edit Warna:
```bash
# Edit CSS variables di: src/index.css
# Bagian :root (baris 10-17)
```

---

## 🐛 Troubleshooting

**Website tidak muncul?**
- Check terminal untuk error
- Pastikan `npm install` sudah dijalankan
- Port 5173 tidak bentrok dengan app lain

**Foto tidak muncul?**
- Check path foto di code (harus mulai dengan `/images/`)
- Pastikan foto ada di folder `public/images/`
- Check nama file (case-sensitive)

**Error saat npm install?**
- Hapus folder `node_modules` dan file `package-lock.json`
- Jalankan `npm install` lagi

---

## 🌐 Deploy ke Internet

**Tercepat: Vercel**
```bash
npm install -g vercel
npm run build
vercel
```

**Atau: Netlify (Drag & Drop)**
```bash
npm run build
# Drag folder 'dist' ke netlify.com/drop
```

Detail lengkap ada di **DEPLOYMENT.md**

---

## 📱 Contact & Support

Jika ada pertanyaan atau butuh bantuan:

1. **Baca dokumentasi**:
   - PANDUAN.md untuk cara edit
   - STRUKTUR.md untuk memahami file
   - DEPLOYMENT.md untuk deploy

2. **Check terminal** untuk error message

3. **Browser console** (F12) untuk debug

---

## 🎉 Selamat Menggunakan!

Website birthday Anda siap digunakan! Tinggal:
1. Edit nama & tanggal
2. Upload foto
3. Customize konten
4. Deploy online
5. Share ke yang ulang tahun! 🎂

---

Made with ❤️ for special birthdays
