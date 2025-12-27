# Autofill Kuesioner Dosen AIS Unmul 🤖

> **⚠️ Disclaimer**: Script ini dibuat dengan bantuan AI (Claude/ChatGPT). Semua kredit untuk pengembangan script ini diberikan kepada AI yang mengembangkannya. Saya hanya menyediakan repositori ini sebagai wadah untuk berbagi tools yang berguna.

Script untuk mengisi otomatis semua kuesioner dosen pengampu dengan nilai yang dapat dikonfigurasi (1-5) pada halaman Kartu Hasil Studi (KHS) di Academic Integrated System (AIS) Universitas Mulawarman.

> 🎯 **Quick Start**: Install via [GreasyFork](https://greasyfork.org/en/scripts/560439-autofill-kuesioner-dosen-ais-unmul) atau download dari GitHub, lalu klik tombol hijau di pojok kanan atas halaman KHS!

## 📚 Daftar Isi

- [🎯 Apa Itu Script Ini?](#-apa-itu-script-ini)
- [✨ Fitur](#-fitur)
- [⚙️ Konfigurasi Nilai](#️-konfigurasi-nilai)
- [🚀 Instalasi](#-instalasi)
- [📖 Cara Penggunaan](#-cara-penggunaan)
- [🔧 Troubleshooting](#-troubleshooting)
- [⚠️ Peringatan & Etika](#️-peringatan--etika)
- [🤝 Kontribusi](#-kontribusi)

## 🎯 Apa Itu Script Ini?

Seperti yang kita tahu, sebelum bisa melihat nilai di halaman KHS, kita harus mengisi kuesioner untuk setiap dosen pengampu terlebih dahulu. Proses ini bisa membosankan dan memakan waktu, terutama kalau ada banyak dosen.

Script ini akan **mengotomatisasi proses pengisian kuesioner** dengan mengisi semua pertanyaan dengan nilai yang kamu pilih (1-5) secara otomatis. Nilai default adalah **5 (Sangat Setuju)**, tapi kamu bisa mengubahnya sesuai keinginan. Tinggal klik satu tombol, dan script akan mengisi semua kuesioner satu per satu sampai selesai.

### Masalah yang Diatasi

- ✅ Menghemat waktu mengisi kuesioner secara manual
- ✅ Menghindari proses repetitif yang membosankan
- ✅ Memastikan semua kuesioner terisi dengan nilai yang sama
- ✅ Bisa digunakan untuk semua dosen pengampu sekaligus

## ✨ Fitur

<details>
<summary><strong>Klik untuk melihat daftar fitur lengkap</strong></summary>

### 🎯 Fitur Utama

1. **Autofill Otomatis dengan Konfigurasi Nilai**
   - Mengisi semua radio button dengan nilai yang dapat dikonfigurasi (1-5)
   - Nilai default adalah 5 (Sangat Setuju)
   - Bisa diubah melalui tombol setting atau kode script
   - Tidak perlu klik manual satu per satu

2. **Navigasi Multi-Step**
   - Otomatis navigasi melalui 5 step kuesioner
   - Klik tombol "Next" secara otomatis antar step
   - Submit form di step terakhir (step 6)

3. **Loop Otomatis**
   - Mengisi semua kuesioner dosen secara berurutan
   - Setelah selesai satu kuesioner, lanjut ke kuesioner berikutnya
   - Berhenti otomatis ketika semua kuesioner sudah terisi

4. **Logging & Monitoring**
   - Menampilkan log di console untuk tracking progress
   - Bisa monitor proses pengisian real-time
   - Memberikan feedback jelas di setiap step

5. **User-Friendly**
   - Tombol hijau yang mudah ditemukan di pojok kanan atas
   - Dialog konfirmasi sebelum memulai yang menampilkan nilai yang akan digunakan
   - Tombol setting untuk mengubah nilai dengan mudah
   - Tidak perlu edit kode untuk mengubah nilai

6. **Konfigurasi Fleksibel**
   - Bisa mengatur nilai default melalui tombol ⚙️
   - Nilai tersimpan di browser storage (untuk userscript)
   - Bisa menggunakan nilai berbeda untuk setiap kali autofill (console version)

</details>

## ⚙️ Konfigurasi Nilai

<details>
<summary><strong>Klik untuk melihat cara mengkonfigurasi nilai kuesioner</strong></summary>

Script ini memungkinkan kamu untuk mengatur nilai yang akan digunakan untuk mengisi kuesioner. Nilai yang tersedia adalah:

- **1** = Sangat tidak setuju
- **2** = Tidak setuju
- **3** = Cukup setuju
- **4** = Setuju
- **5** = Sangat setuju (default)

### Untuk Userscript (Tampermonkey)

Ada 2 cara untuk mengubah nilai:

**Cara 1: Menggunakan Tombol Setting (Paling Mudah)** ⭐

1. Buka halaman KHS
2. Lihat di pojok kanan atas, ada 2 tombol:
   - Tombol hijau: "🤖 Autofill Semua Kuesioner (Nilai: X)"
   - Tombol abu-abu: "⚙️ Ubah Nilai"
3. Klik tombol "⚙️ Ubah Nilai"
4. Masukkan nilai yang diinginkan (1-5) di prompt dialog
5. Klik OK
6. Nilai akan tersimpan dan digunakan untuk autofill selanjutnya

> 💡 **Tips**: Nilai yang sudah di-set akan tersimpan di browser dan digunakan untuk autofill selanjutnya, jadi tidak perlu set ulang setiap kali.

**Cara 2: Mengedit Kode Script**

1. Buka Tampermonkey Dashboard (klik ikon Tampermonkey → Dashboard)
2. Klik script "Autofill Kuesioner Dosen AIS Unmul"
3. Cari baris yang berisi: `const DEFAULT_KUISIONER_VALUE = 5;`
4. Ubah angka 5 menjadi nilai yang diinginkan (1-5)
5. Save (Ctrl+S atau Cmd+S di Mac)
6. Refresh halaman KHS

**Cara 3: Menggunakan Console (Advanced)**

1. Buka halaman KHS
2. Buka Developer Console (F12)
3. Ketik: `setKuisionerValue(3)` (ganti 3 dengan nilai yang diinginkan)
4. Tekan Enter
5. Nilai akan tersimpan dan digunakan untuk autofill selanjutnya

### Untuk Console Script

**Cara 1: Set Nilai Default**

Setelah copy-paste script ke console, kamu bisa set nilai default:

```javascript
setKuisionerValue(3);  // Set nilai default menjadi 3
autoFillAllKuisioner();  // Autofill dengan nilai 3
```

**Cara 2: Gunakan Nilai Langsung (Tanpa Set Default)**

Kamu bisa langsung memberikan nilai saat memanggil fungsi:

```javascript
autoFillAllKuisioner(4);  // Autofill semua dengan nilai 4
autoFillKuisioner(2);     // Autofill kuesioner saat ini dengan nilai 2
```

**Cara 3: Edit Variabel di Kode**

Sebelum copy-paste ke console, edit bagian ini di file:

```javascript
// ==================== KONFIGURASI ====================
let kuisionerValue = 5;  // Ubah 5 menjadi nilai yang diinginkan
// =====================================================
```

### Contoh Penggunaan

```javascript
// Cek nilai saat ini
getKuisionerValue();  // Returns: 5

// Set nilai menjadi 3
setKuisionerValue(3);

// Autofill dengan nilai default (3)
autoFillAllKuisioner();

// Atau autofill dengan nilai spesifik (4) tanpa mengubah default
autoFillAllKuisioner(4);
```

</details>

## 🚀 Instalasi

### Metode 1: Install via GreasyFork (Paling Mudah) ⭐

<details>
<summary><strong>Klik untuk melihat panduan instalasi via GreasyFork</strong></summary>

1. **Install Tampermonkey Extension**
   - **Chrome**: [Install dari Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - **Firefox**: [Install dari Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - **Edge**: [Install dari Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
   - **Opera/Safari**: Cari di extension store browser masing-masing

2. **Install Script dari GreasyFork**
   - Klik link berikut: [Install dari GreasyFork](https://greasyfork.org/en/scripts/560439-autofill-kuesioner-dosen-ais-unmul)
   - Klik tombol "Install this script"
   - Klik "Install" di dialog konfirmasi Tampermonkey
   - Script siap digunakan! ✅

**Keuntungan metode ini:**
- Otomatis update jika ada versi baru
- Mudah di-manage melalui dashboard Tampermonkey
- Paling simple untuk pemula

</details>

### Metode 2: Install Manual (Dari GitHub)

<details>
<summary><strong>Klik untuk melihat panduan instalasi manual</strong></summary>

1. **Install Tampermonkey Extension** (sama seperti metode 1)

2. **Download Script dari GitHub**
   - Download file `autofill-kuisioner.user.js` dari repository ini
   - Atau copy kode langsung dari file tersebut

3. **Install ke Tampermonkey**
   - Klik ikon Tampermonkey di browser → **"Create a new script"**
   - Hapus semua kode default yang ada
   - Paste seluruh isi file `autofill-kuisioner.user.js`
   - Tekan **Ctrl+S** (atau Cmd+S di Mac) untuk save
   - Script sudah terinstall! ✅

**Catatan**: Kalau install manual, update script harus dilakukan secara manual juga.

</details>

### Metode 3: Console Script (Untuk Testing)

<details>
<summary><strong>Klik untuk melihat cara menggunakan console script</strong></summary>

Metode ini cocok untuk testing atau kalau kamu tidak ingin install extension.

1. **Buka Halaman KHS**
   - Login ke AIS Unmul
   - Buka halaman KHS: `https://ais.unmul.ac.id/mahasiswa/khs`

2. **Buka Developer Console**
   - Tekan **F12** atau **Ctrl+Shift+I** (Windows/Linux)
   - Tekan **Cmd+Option+I** (Mac)
   - Pilih tab **"Console"**

3. **Copy-Paste Script**
   - Buka file `autofill-kuisioner-console.js` dari repository ini
   - Copy seluruh isi file
   - Paste ke console browser
   - Tekan **Enter**
   - Akan muncul pesan konfirmasi bahwa script sudah siap digunakan

4. **Jalankan Fungsi**
   - Untuk autofill semua dengan nilai default: ketik `autoFillAllKuisioner()` lalu Enter
   - Untuk autofill semua dengan nilai spesifik: ketik `autoFillAllKuisioner(4)` lalu Enter (ganti 4 dengan nilai yang diinginkan)
   - Untuk autofill satu kuesioner: ketik `autoFillKuisioner()` lalu Enter
   - Untuk mengubah nilai default: ketik `setKuisionerValue(3)` lalu Enter

> ⚠️ **Catatan**: Script console harus di-copy-paste lagi setiap kali refresh halaman, tapi nilai yang sudah di-set akan tetap tersimpan selama session browser masih aktif.

</details>

## 📖 Cara Penggunaan

### Setelah Install (Metode GreasyFork/Manual)

<details>
<summary><strong>Klik untuk melihat panduan penggunaan lengkap</strong></summary>

1. **Buka Halaman KHS**
   - Login ke AIS Unmul
   - Navigasi ke halaman KHS: `https://ais.unmul.ac.id/mahasiswa/khs`

2. **Cari Tombol Autofill**
   - Lihat pojok kanan atas halaman
   - Akan muncul 2 tombol:
     - Tombol hijau: **"🤖 Autofill Semua Kuesioner (Nilai: X)"** (X adalah nilai saat ini)
     - Tombol abu-abu: **"⚙️ Ubah Nilai"** (untuk mengubah nilai)

<div align="center">

<img width="800" alt="Halaman KHS dengan Tombol Autofill" src="https://github.com/user-attachments/assets/e7f66476-7875-4a37-b868-489d1020071f" />

</div>

3. **Mulai Autofill**
   - (Opsional) Jika ingin mengubah nilai, klik tombol **"⚙️ Ubah Nilai"** terlebih dahulu
   - Klik tombol hijau **"🤖 Autofill Semua Kuesioner"**
   - Akan muncul dialog konfirmasi yang menampilkan nilai yang akan digunakan: *"Apakah Anda yakin ingin mengisi semua kuesioner dengan nilai X (Label)? Tindakan ini tidak dapat dibatalkan."*
   - Klik **"OK"** untuk melanjutkan

<div align="center">

<img width="555" height="430" alt="Dialog konfirmasi yang menampilkan nilai yang akan digunakan" src="https://github.com/user-attachments/assets/3e8fdf51-cbd0-4b41-9119-961ca534b534" />

</div>

4. **Tunggu Proses Selesai**
   - Script akan otomatis membuka kuesioner pertama
   - Mengisi semua pertanyaan dengan nilai yang sudah dikonfigurasi (default: 5)
   - Navigasi ke step berikutnya secara otomatis
   - Submit form ketika selesai
   - Lanjut ke kuesioner berikutnya
   - Proses ini akan terus berulang sampai semua kuesioner selesai

5. **Monitor Progress (Opsional)**
   
<div align="center">

[![Watch the video - Console Script Demo](https://img.youtube.com/vi/1vUPc-5p1j8/hqdefault.jpg)](https://youtu.be/1vUPc-5p1j8)

*Klik gambar untuk melihat demo penggunaan console script*

</div>

   - Buka Developer Console (F12) untuk melihat log proses
   - Akan muncul log seperti:
     ```
     🚀 Step 1: Memulai autofill kuesioner dengan nilai 5...
     ✅ Mengisi 35 radio button dengan nilai 5 (Sangat setuju)
     ➡️ Pindah ke step berikutnya...
     ✅ Klik tombol Next
     🚀 Step 2: Memulai autofill kuesioner dengan nilai 5...
     ...
     ```

6. **Selesai!**
   - Ketika semua kuesioner sudah terisi, script akan berhenti otomatis
   - Di console akan muncul: *"✅ Semua kuesioner sudah selesai diisi!"*
   - Sekarang kamu bisa melihat nilai di halaman KHS

**Perkiraan Waktu**: 
- Satu kuesioner: ~30-60 detik (tergantung koneksi internet)
- 8 kuesioner: ~5-8 menit

</details>

### Tips Penggunaan

<details>
<summary><strong>Klik untuk melihat tips dan trik</strong></summary>

1. **Gunakan di Waktu yang Tepat**
   - Pastikan koneksi internet stabil
   - Jangan tutup tab browser selama proses berjalan
   - Lebih baik gunakan saat tidak ada aktivitas penting di browser

2. **Monitor Console (Opsional)**
   - Buka console (F12) sebelum memulai
   - Ini membantu tracking progress dan debug jika ada masalah

3. **Refresh Jika Gagal**
   - Jika script terhenti atau error, refresh halaman
   - Jalankan lagi dari awal

4. **Jangan Intervensi Manual**
   - Jangan klik tombol Next/Submit secara manual saat script berjalan
   - Biarkan script bekerja otomatis

5. **Cek Hasil Setelah Selesai**
   - Verifikasi bahwa semua kuesioner sudah terisi
   - Pastikan nilai yang diisi sesuai keinginan (sesuai nilai yang sudah dikonfigurasi)

</details>

## 🔧 Troubleshooting

<details>
<summary><strong>Script tidak muncul di halaman KHS</strong></summary>

**Kemungkinan penyebab:**
- Tampermonkey belum diaktifkan
- Script belum terinstall dengan benar
- URL tidak match dengan pattern di script

**Solusi:**
1. Cek ikon Tampermonkey di toolbar browser, pastikan extension aktif
2. Klik ikon Tampermonkey → Dashboard
3. Pastikan script "Autofill Kuesioner Dosen AIS Unmul" ada di daftar dan statusnya "Enabled"
4. Pastikan URL halaman KHS sesuai: `https://ais.unmul.ac.id/mahasiswa/khs`
5. Refresh halaman (F5 atau Ctrl+R)

</details>

<details>
<summary><strong>Tombol "Autofill Semua Kuesioner" tidak muncul</strong></summary>

**Kemungkinan penyebab:**
- Script belum ter-load dengan benar
- JavaScript error di console

**Solusi:**
1. Buka Developer Console (F12) → tab Console
2. Cek apakah ada error merah
3. Refresh halaman dan coba lagi
4. Pastikan script enabled di Tampermonkey dashboard

</details>

<details>
<summary><strong>Form tidak terisi dengan nilai yang dikonfigurasi</strong></summary>

**Kemungkinan penyebab:**
- Form belum fully loaded
- Struktur form berubah (update dari AIS)

**Solusi:**
1. Tunggu beberapa detik, pastikan form sudah ter-load sepenuhnya
2. Buka console (F12) dan jalankan manual: `fillAllWithValue()` (atau `fillAllWithValue(5)` untuk nilai 5)
3. Cek apakah ada error di console
4. Refresh halaman dan coba lagi
5. Jika masih gagal, buka issue di GitHub dengan detail error

</details>

<details>
<summary><strong>Script stuck di satu step atau tidak lanjut ke step berikutnya</strong></summary>

**Kemungkinan penyebab:**
- Validasi form gagal
- Tombol Next tidak terdeteksi
- Timing issue (script terlalu cepat)

**Solusi:**
1. Buka console (F12) untuk melihat log
2. Cek apakah ada pesan error atau warning
3. Coba jalankan manual: `clickNext()` di console
4. Refresh halaman dan jalankan lagi
5. Jika masalah berlanjut, mungkin struktur form berubah → buka issue di GitHub

</details>

<details>
<summary><strong>Script tidak submit form di step terakhir</strong></summary>

**Kemungkinan penyebab:**
- Tombol Submit tidak terdeteksi
- Form validation gagal

**Solusi:**
1. Buka console untuk melihat log
2. Pastikan semua pertanyaan sudah terisi (cek manual)
3. Coba submit manual dengan klik tombol Submit
4. Jika masih gagal, refresh dan coba lagi dari awal

</details>

<details>
<summary><strong>Script berhenti di tengah jalan (tidak lanjut ke kuesioner berikutnya)</strong></summary>

**Kemungkinan penyebab:**
- Modal/kuesioner tidak tertutup dengan benar setelah submit
- Redirect tidak terjadi
- Link kuesioner berikutnya tidak terdeteksi

**Solusi:**
1. Tunggu beberapa detik, script akan otomatis retry
2. Buka console untuk melihat log proses
3. Jika benar-benar stuck, refresh halaman
4. Cek apakah masih ada link "Isi Kuesioner" di halaman
5. Jalankan lagi script jika masih ada kuesioner yang belum terisi

</details>

<details>
<summary><strong>Semua kuesioner sudah terisi tapi masih ada yang belum</strong></summary>

**Kemungkinan penyebab:**
- Beberapa kuesioner error atau gagal diisi
- Link kuesioner tidak terdeteksi dengan benar

**Solusi:**
1. Refresh halaman KHS
2. Cek manual apakah masih ada link "Isi Kuesioner"
3. Jika masih ada, jalankan script lagi
4. Atau isi manual untuk kuesioner yang tersisa

</details>

## ⚠️ Peringatan & Etika

<details>
<summary><strong>Klik untuk membaca peringatan lengkap</strong></summary>

### ⚠️ Peringatan Penting

1. **Tidak Bisa Diubah**
   - Setelah klik tombol "Submit/Simpan", isian kuesioner **TIDAK DAPAT DIUBAH**
   - Pastikan kamu benar-benar yakin dengan nilai yang akan digunakan
   - Script akan mengisi semua pertanyaan dengan nilai yang sama (sesuai konfigurasi)
   - Pastikan nilai yang dikonfigurasi sesuai dengan evaluasi yang ingin kamu berikan

2. **Gunakan dengan Tanggung Jawab**
   - Script ini adalah tool untuk membantu, bukan untuk menyontek atau curang
   - Gunakan dengan bijak dan sesuai kebutuhan
   - Pertimbangkan etika: apakah memberi nilai 5 untuk semua pertanyaan sesuai dengan pengalaman belajar kamu?

3. **Tidak Ada Garansi**
   - Script ini dibuat untuk membantu, tapi tidak ada jaminan 100% berhasil
   - Struktur website AIS bisa berubah sewaktu-waktu
   - Jika script tidak bekerja, mungkin perlu di-update

4. **Risiko Penggunaan**
   - Gunakan dengan risiko sendiri
   - Maintainer tidak bertanggung jawab jika terjadi masalah akibat penggunaan script ini
   - Pastikan kamu memahami apa yang dilakukan script sebelum menggunakannya

### 🤔 Pertimbangan Etika

Sebelum menggunakan script ini, pertimbangkan:

- Apakah mengisi semua kuesioner dengan nilai yang sama mencerminkan evaluasi yang jujur?
- Apakah ini sesuai dengan tujuan kuesioner evaluasi dosen?
- Apakah kamu nyaman dengan konsekuensi memberikan nilai yang sama untuk semua pertanyaan?
- Pilih nilai yang sesuai dengan pengalaman belajar kamu, bukan hanya karena ingin cepat selesai

**Saran**: 
- Gunakan nilai yang mencerminkan evaluasi jujur kamu terhadap pengajaran dosen
- Jika pengalaman belajar berbeda untuk setiap dosen, pertimbangkan untuk mengisi manual atau menggunakan nilai yang berbeda-beda
- Script ini adalah tool untuk membantu, bukan untuk menghindari evaluasi yang bermakna

</details>

## 🤝 Kontribusi

Script ini open source dan bebas untuk digunakan, dimodifikasi, dan didistribusikan. Jika kamu menemukan bug atau punya ide yang bisa ditingkatin, silakan:

1. **Buka Issue di GitHub**
   - Jelaskan masalah atau ide yang kamu punya
   - Sertakan screenshot jika diperlukan
   - Jelaskan langkah-langkah untuk reproduce masalah

2. **Pull Request**
   - Fork repository ini
   - Buat branch baru untuk fitur/fix kamu
   - Commit perubahan kamu
   - Buat Pull Request dengan deskripsi yang jelas

3. **Berbagi ke Teman**
   - Jika script ini membantu, bagikan ke teman-teman yang membutuhkan
   - Bantu spread awareness tentang tool ini

### Credits & Attribution

- **Script Development**: Dibuat dengan bantuan AI (Claude/ChatGPT)
- **Repository Maintainer**: [Aris](https://github.com/ariscandra)
- **License**: Free to use and modify

---

## 📞 Support & Contact

Jika ada pertanyaan atau butuh bantuan:

- **GitHub Issues**: [Buka issue di repo ini](https://github.com/ariscandra/FormAISAutofill/issues)
- **WhatsApp**: [Hubungi via WhatsApp](https://wa.me/82141172579)

---

---

<div align="center">

### Dibuat dengan ❤️ untuk memudahkan proses akademik mahasiswa Unmul

**⚠️ Gunakan dengan bijak dan tanggung jawab**

[⬆️ Kembali ke Awal](#autofill-kuesioner-dosen-ais-unmul-)

</div>
