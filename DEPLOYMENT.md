# 🚀 Cara Deploy Birthday Website ke Internet

Website ini bisa di-deploy ke berbagai platform hosting gratis. Berikut panduan step-by-step:

---

## 1️⃣ VERCEL (Recommended - Paling Mudah)

### Cara Deploy:

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Build Project**:
```bash
npm run build
```

3. **Deploy**:
```bash
vercel
```

4. **Ikuti Petunjuk**:
   - Login dengan GitHub/GitLab/Email
   - Confirm project name
   - Deploy!

5. **Selesai!** Anda akan dapat URL seperti: `https://birtdayersa.vercel.app`

### Update Website (setelah edit):
```bash
npm run build
vercel --prod
```

---

## 2️⃣ NETLIFY

### Cara Deploy via Drag & Drop:

1. **Build Project**:
```bash
npm run build
```

2. **Buka** [https://app.netlify.com/drop](https://app.netlify.com/drop)

3. **Drag folder `dist`** ke area drop

4. **Selesai!** Dapat URL seperti: `https://birtdayersa.netlify.app`

### Cara Deploy via CLI:

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build & Deploy**:
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 3️⃣ GITHUB PAGES

### Persiapan:

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Edit `package.json`**, tambahkan:
```json
{
  "homepage": "https://USERNAME.github.io/birtdayersa",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
Ganti `USERNAME` dengan username GitHub Anda.

3. **Edit `vite.config.js`**, tambahkan:
```js
export default defineConfig({
  plugins: [react()],
  base: '/birtdayersa/'  // Nama repository
})
```

### Deploy:

1. **Push ke GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/birtdayersa.git
git push -u origin main
```

2. **Deploy**:
```bash
npm run deploy
```

3. **Setting GitHub**:
   - Buka repository di GitHub
   - Settings → Pages
   - Source: pilih `gh-pages` branch
   - Save

4. **Akses**: `https://USERNAME.github.io/birtdayersa`

---

## 4️⃣ RENDER

### Cara Deploy:

1. **Push ke GitHub** (lihat cara di atas)

2. **Buka** [https://render.com](https://render.com)

3. **New → Static Site**

4. **Connect GitHub Repository**

5. **Build Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

6. **Deploy!**

---

## 5️⃣ CLOUDFLARE PAGES

### Cara Deploy:

1. **Push ke GitHub/GitLab**

2. **Buka** [https://pages.cloudflare.com](https://pages.cloudflare.com)

3. **Create Project → Connect Git**

4. **Build Settings**:
   - Framework: Vite
   - Build command: `npm run build`
   - Build output: `dist`

5. **Deploy!**

---

## 🔧 Persiapan Sebelum Deploy

### Checklist:

- [ ] **Test lokal**: `npm run dev` - pastikan semua berfungsi
- [ ] **Upload foto asli** ke `public/images/`
- [ ] **Edit semua konten** (nama, tanggal, surat)
- [ ] **Test build**: `npm run build` - pastikan tidak error
- [ ] **Test preview**: `npm preview` - lihat hasil build
- [ ] **Commit semua perubahan** ke Git (jika pakai GitHub Pages / Render / Cloudflare)

### Build Project:
```bash
npm run build
```

Folder `dist` akan dibuat berisi file production-ready.

---

## 🌐 Custom Domain (Opsional)

Jika punya domain sendiri (misal: `alya-birthday.com`):

### Vercel:
1. Dashboard → Project → Settings → Domains
2. Tambah domain
3. Update DNS di provider domain Anda

### Netlify:
1. Site settings → Domain management → Add custom domain
2. Update DNS

### GitHub Pages:
1. Buat file `public/CNAME` berisi: `alya-birthday.com`
2. Update DNS dengan CNAME record ke `USERNAME.github.io`

---

## 📱 Test Website di Mobile

Sebelum deploy, test di HP:

1. **Jalankan dev server**:
```bash
npm run dev
```

2. **Cari IP komputer**:
   - Windows: `ipconfig` → cari IPv4
   - Mac/Linux: `ifconfig` → cari inet

3. **Di HP**, buka browser dan ketik:
```
http://192.168.1.XXX:5173
```
Ganti XXX dengan IP komputer Anda.

---

## 🆘 Troubleshooting

### Error saat build:
```bash
# Clear cache & reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Foto tidak muncul setelah deploy:
- Pastikan foto ada di folder `public/images/`
- Path harus dimulai dengan `/images/...` (bukan `./images/`)
- Check case-sensitive: `Memory-1.jpg` ≠ `memory-1.jpg`

### Website blank setelah deploy:
- Check browser console (F12) untuk error
- Pastikan `base` di `vite.config.js` sudah benar
- Test dengan `npm preview` dulu sebelum deploy

---

## 💰 Perbandingan Platform

| Platform | Gratis? | Kecepatan | Custom Domain | SSL | Kemudahan |
|----------|---------|-----------|---------------|-----|-----------|
| Vercel | ✅ Ya | ⚡⚡⚡ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| Netlify | ✅ Ya | ⚡⚡⚡ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| GitHub Pages | ✅ Ya | ⚡⚡ | ✅ | ✅ | ⭐⭐⭐ |
| Render | ✅ Ya | ⚡⚡ | ✅ | ✅ | ⭐⭐⭐⭐ |
| Cloudflare | ✅ Ya | ⚡⚡⚡ | ✅ | ✅ | ⭐⭐⭐⭐ |

**Rekomendasi:** Vercel atau Netlify untuk kemudahan & kecepatan.

---

## 🎉 Setelah Deploy

1. **Share link** ke orang yang ulang tahun! 🎂
2. **Test** semua fitur di mobile & desktop
3. **Gunakan QR Code** untuk akses lebih mudah (buat di [qr-code-generator.com](https://www.qr-code-generator.com))

---

## 📊 Analytics (Opsional)

Jika ingin lihat berapa visitor:

### Google Analytics:
1. Buat account di [analytics.google.com](https://analytics.google.com)
2. Dapat tracking ID (G-XXXXXXXXXX)
3. Tambah script di `index.html` sebelum `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Simple Analytics (Privacy-friendly):
- Vercel Analytics: Built-in di Vercel
- Netlify Analytics: $9/bulan
- Cloudflare Web Analytics: Gratis

---

Happy deploying! 🚀✨
