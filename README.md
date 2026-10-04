# SleepTrack — Modul 1

Aplikasi React Native + Expo + TypeScript sederhana. Project berada langsung di folder **SleepTrack_UI_Only**. Buka terminal di folder ini (folder yang berisi `package.json`). Folder `Web` bukan aplikasi utama.

## Menjalankan

```powershell
npm install
npx expo start --go
```

Buka dengan Expo Go yang mendukung SDK project (Expo SDK 57), lalu scan QR dari terminal. Komputer dan HP harus berada di jaringan yang sama. Bisa juga tekan `a` jika emulator Android sudah tersedia.

## Fitur

- Menampilkan tiga contoh catatan tidur.
- Menghitung durasi dari jam tidur hingga jam bangun, termasuk melewati tengah malam.
- Tombol **Tentang aplikasi** membuka informasi singkat.

Data masih berupa contoh tetap, bukan hasil pencatatan pengguna. Ubah data di `dataTidur.ts`, lalu simpan file untuk melihat perubahan. Tidak memerlukan login, database, atau API.

## Letak tiga ketentuan

| Ketentuan | Penerapan |
| --- | --- |
| Custom Function & Loop | `hitungDurasi()` dan `formatDurasi()` di `dataTidur.ts`; `tampilkanInfo()` dan loop `daftarTidur.map()` di `App.tsx`. |
| Type & Array of Objects | `type CatatanTidur` dan `daftarTidur: CatatanTidur[]` di `dataTidur.ts`. |
| Inline & External Styles | Inline `style={{ ... }}` pada teks durasi di `App.tsx`; external `StyleSheet.create()` di `styles.ts`, diimpor ke `App.tsx`. |

## Urutan belajar

1. Baca `dataTidur.ts`: type menentukan struktur satu catatan; array menyimpan beberapa catatan.
2. Baca `hitungDurasi()`: jam diubah menjadi menit, lalu dikurangi. Contoh 22:00 sampai 06:00 menghasilkan -960 menit; ditambah 1440 menjadi 480 menit (8 jam).
3. Baca `App.tsx`: `map()` membuat satu kartu untuk setiap catatan. `key` menggunakan ID unik.
4. Baca `styles.ts`: style di file terpisah digunakan melalui `styles.namaStyle`.

Jam harus dalam format `HH:MM` yang valid, dari `00:00` hingga `23:59`. Jam bangun yang lebih awal berarti hari berikutnya. Jam sama dianggap 0 menit; contoh ini tidak menangani durasi 24 jam atau lebih. Tanggal adalah tanggal bangun dan hanya digunakan sebagai label.

Latihan sederhana: tambah object dengan ID baru, ubah jam tidur, atau ubah warna inline durasi. Alur masuk aplikasi: `index.js` → `App.tsx`.

## Pemeriksaan tipe

```powershell
npm run typecheck
```
