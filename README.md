# SleepTrack - Materi Modul 2

Project utama: `J:\Mobile\Demo 1\Web` (folder berisi package.json).
Acuan perubahan hanya materi Modul 2 dan kriteria penilaian pada screenshot, bukan langkah Codelab atau instruksi Tugas Pekan Demo.

## Menjalankan

```powershell
cd "J:\Mobile\Demo 1\Web"
npm install
npx expo start --go
```

Gunakan Expo Go yang mendukung SDK project (SDK 57), atau emulator yang sesuai.

## Yang ditambahkan

Tampilan utama, warna, tiga data contoh, rumus durasi, dan tombol Tentang aplikasi tetap dipertahankan. Kartu sekarang dapat ditekan untuk membuka detail. Di detail ada favorit sementara, penghitung lama halaman dibuka, dan tombol kembali.

Ini masih aplikasi latihan: belum ada login, database, API, penyimpanan favorit, atau formulir tambah/edit catatan. Favorit direset setelah detail ditutup. Penghitung mengukur waktu halaman terbuka, bukan durasi tidur atau stopwatch presisi.

## Pemetaan kriteria penilaian

| Kriteria | File | Penerapan |
| --- | --- | --- |
| useState dan useEffect (10%) | app/detail.tsx | State favorit dan detik; effect memasang timer dan membersihkannya ketika detail ditutup. |
| push, back, satu fungsi lain (10%) | App.tsx dan app/detail.tsx | push membuka detail; back kembali; canGoBack memeriksa riwayat. replace menjadi cadangan jika tidak ada riwayat. |
| Layout dan Stack.Screen (10%) | app/_layout.tsx | Mengatur halaman index dan detail dalam Stack. |
| Menjawab pertanyaan (15%) | Penjelasan di bawah | Bergantung pada pemahamanmu, bukan fitur aplikasi. |
| Modifikasi kode (15%) | Latihan di bawah | Bergantung pada kemampuan mengubah kode, bukan otomatis terpenuhi oleh fitur. |

Codelab 1-2 (40%) tidak dikerjakan sesuai permintaan. Perubahan ini tidak berarti seluruh nilai 100% otomatis terpenuhi.
Screenshot menulis _layout.ts, tetapi materi halaman 26 menggunakan _layout.tsx. Karena berisi JSX (<Stack>), file yang dipakai adalah .tsx.

## File dan alur program

```text
index.js          -> menjalankan Expo Router
app/_layout.tsx   -> mengatur Stack dan Stack.Screen
app/index.tsx     -> menampilkan App.tsx yang sudah ada
App.tsx           -> kartu ditekan: push ke /detail dengan parameter id
app/detail.tsx    -> membaca id, menampilkan data, favorit, timer, kembali
```

Data dan fungsi durasi tetap di dataTidur.ts. styles.ts hanya mendapat satu style teks petunjuk. package.json/package-lock.json memuat paket navigasi. app.json menambahkan plugin Router dan scheme sleeptrack. tsconfig.json mengecualikan sleeptrack_ui_only, salinan lama yang impor filenya tidak lengkap; salinan tidak dihapus dan bukan halaman aktif.

## Penjelasan sesuai Modul 2

### useState - halaman 7-8

```tsx
const [favorit, setFavorit] = useState(false);
// Dijalankan ketika tombol ditekan:
setFavorit(!favorit);
```

favorit menyimpan nilai. setFavorit mengubahnya dan meminta React memperbarui tampilan. Awalnya false, menjadi true setelah ditekan, lalu false jika ditekan lagi. Teks tombol ikut berubah. State detik bekerja dengan cara yang sama untuk angka penghitung.

### useEffect - halaman 9-10

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    setDetik((nilaiSebelumnya) => nilaiSebelumnya + 1);
  }, 1000);
  return () => clearInterval(timer);
}, []);
```

Array kosong [] membuat effect dipasang ketika komponen detail muncul, bukan setiap detik. setInterval menjalankan fungsi kira-kira setiap 1000 milidetik (1 detik). Bentuk nilaiSebelumnya => nilaiSebelumnya + 1 mengambil state terbaru. Fungsi return adalah cleanup untuk menghentikan timer ketika komponen detail dilepas. Tanpa cleanup, timer bisa terus berjalan setelah kembali.

### Parameter dan halaman - halaman 21-24

```tsx
router.push({ pathname: '/detail', params: { id } });
const { id } = useLocalSearchParams<{ id: string }>();
```

Kartu mengirim ID. Detail membaca ID lalu mencari data menggunakan daftarTidur.find(...). Number(id) mengubah parameter teks menjadi angka untuk dibandingkan dengan ID data. Jika ID tidak ditemukan, tampil pesan dan tombol kembali tetap tersedia. app/index.tsx adalah halaman awal; app/detail.tsx adalah normal page.

### Layout dan Stack.Screen - halaman 26, 30-32

_layout.tsx mengatur navigasi bersama. Stack menyimpan tumpukan halaman. Stack.Screen mengatur halaman berdasarkan nama file dan options. name="detail" mengacu pada detail.tsx. Header bawaan disembunyikan melalui headerShown: false agar tampilan tetap mirip sebelumnya; detail menyediakan judul dan tombol kembali sendiri.

### Navigasi - halaman 32-34

- push: menambahkan halaman detail di atas halaman utama.
- back: kembali ke halaman sebelumnya.
- canGoBack: menghasilkan true jika tersedia riwayat kembali. Ini fungsi tambahan untuk kriteria.
- replace: mengganti halaman detail dengan halaman utama jika tidak ada riwayat, misalnya detail dibuka langsung.

## Cara mencoba

1. Buka aplikasi: tiga kartu lama tetap terlihat.
2. Tekan kartu Julianda: detail menampilkan 23:30 sampai 06:00, durasi 6 jam 30 menit.
3. Tunggu beberapa detik: penghitung bertambah.
4. Tekan Tandai favorit: teks berubah. Tekan lagi: kembali ke kondisi awal.
5. Tekan Kembali: halaman utama muncul.
6. Buka kartu lagi: favorit kembali belum ditandai dan detik mulai dari 0.
7. Coba kartu Bima dan tombol Tentang aplikasi untuk memeriksa fitur lama.

## Pertanyaan dan latihan sederhana

- Mengapa bukan variabel biasa? Perubahannya tidak meminta React memperbarui tampilan.
- Apa beda state dan effect? State menyimpan nilai untuk tampilan; effect menjalankan pekerjaan setelah render, misalnya memasang timer.
- Apa beda push dan replace? Push menambah riwayat; replace mengganti halaman aktif.
- Mengapa favorit hilang? State lokal dihapus ketika halaman detail ditutup; belum ada penyimpanan permanen.
- Latihan: ubah tulisan tombol favorit tanpa mengubah alurnya.
- Latihan: ubah nilai awal favorit menjadi true, lalu amati hasilnya.
- Latihan: ubah interval ke 2000 dan label menjadi "Jumlah pembaruan" supaya hitungan tidak keliru dianggap detik.
- Latihan: ubah jam tidur di dataTidur.ts dan amati durasi di kedua halaman.

Pemeriksaan kode: `npm run typecheck`.
Instalasi Router mengikuti [dokumentasi resmi Expo](https://docs.expo.dev/router/installation/).
