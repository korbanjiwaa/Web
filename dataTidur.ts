// Type: menentukan properti dan tipe data setiap catatan.
export type CatatanTidur = {
  id: number;
  nama: string;
  tanggal: string;
  jamTidur: string;
  jamBangun: string;
};

// Array of Objects: satu array berisi beberapa object CatatanTidur.
// Gunakan jam berformat HH:MM (24 jam).
export const daftarTidur: CatatanTidur[] = [
  { id: 1, nama: 'Bima', tanggal: '4 Oktober 2026', jamTidur: '22:00', jamBangun: '06:00' },
  { id: 2, nama: 'Julianda', tanggal: '4 Oktober 2026', jamTidur: '23:30', jamBangun: '06:00' },
  { id: 3, nama: 'Bima', tanggal: '3 Oktober 2026', jamTidur: '21:45', jamBangun: '05:00' },
];

// Custom function: menghitung selisih waktu dalam menit.
export function hitungDurasi(jamTidur: string, jamBangun: string): number {
  const [jamMulai, menitMulai] = jamTidur.split(':').map(Number);
  const [jamSelesai, menitSelesai] = jamBangun.split(':').map(Number);
  const mulai = jamMulai * 60 + menitMulai;
  const selesai = jamSelesai * 60 + menitSelesai;
  let durasi = selesai - mulai;

  // Jika melewati tengah malam, tambahkan jumlah menit dalam satu hari.
  if (durasi < 0) {
    durasi = durasi + 24 * 60;
  }

  return durasi;
}

export function formatDurasi(menit: number): string {
  const jam = Math.floor(menit / 60);
  const sisaMenit = menit % 60;
  return `${jam} jam ${sisaMenit} menit`;
}
