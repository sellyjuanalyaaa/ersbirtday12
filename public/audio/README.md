# Background Music Setup

## Cara Menambahkan File Audio

Untuk musik latar belakang berfungsi, Anda perlu menambahkan file audio ke folder `public/audio/`.

### Langkah-langkah:

1. **Download atau siapkan file MP3** untuk lagu:
   - Every Summertime - NIKI

2. **Rename file audio** menjadi:
   - `every-summertime.mp3`

3. **Pindahkan file** ke folder `public/audio/`

### Struktur Folder Akhir:
```
public/
  ├── audio/
  │   └── every-summertime.mp3
  └── images/
```

## Fitur Background Music

✅ **Auto-play**: Musik otomatis diputar saat website dibuka
✅ **Loop**: Lagu akan diulang terus menerus
✅ **Kontrol**: Tombol play/pause dan mute
✅ **Minimize**: Bisa diperkecil menjadi indikator kecil
✅ **Mobile-friendly**: Responsif untuk semua ukuran layar

## Tips

- File audio sebaiknya berformat MP3 untuk kompatibilitas terbaik
- Ukuran file direkomendasikan dibawah 10MB untuk loading cepat
- Volume default sudah di-set 30% supaya tidak terlalu keras
- Beberapa browser memblokir auto-play, jadi user mungkin perlu klik play manual

## Mengganti Lagu

Edit file `src/components/BackgroundMusic.jsx` pada bagian `track` object untuk mengganti dengan lagu lain.
