// Type: struktur data yang wajib dimiliki setiap catatan tidur.
export type CatatanTidur = {
  id: number;
  nama: string;
  tanggal: string;
  jamTidur: string;
  jamBangun: string;
};

// Array of Objects: kumpulan catatan dengan tipe CatatanTidur.
// Gunakan jam berformat HH:MM (24 jam).
export const daftarTidur: CatatanTidur[] = [
  { id: 1, nama: 'Bima', tanggal: '4 Oktober 2026', jamTidur: '22:00', jamBangun: '06:00' },
  { id: 2, nama: 'Julianda', tanggal: '4 Oktober 2026', jamTidur: '23:30', jamBangun: '06:00' },
  { id: 3, nama: 'Bima', tanggal: '3 Oktober 2026', jamTidur: '21:45', jamBangun: '05:00' },
];

// Custom function: mengubah waktu HH:MM menjadi total menit.
function ubahKeMenit(waktu: string): number {
  const [jam, menit] = waktu.split(':').map(Number);
  return jam * 60 + menit;
}

// Custom function: menghitung lama tidur, termasuk saat berganti hari.
export function hitungDurasi(jamTidur: string, jamBangun: string): number {
  const selisih = ubahKeMenit(jamBangun) - ubahKeMenit(jamTidur);
  return selisih < 0 ? selisih + 24 * 60 : selisih;
}

export function formatDurasi(menit: number): string {
  const jam = Math.floor(menit / 60);
  const sisaMenit = menit % 60;
  return `${jam} jam ${sisaMenit} menit`;
}
