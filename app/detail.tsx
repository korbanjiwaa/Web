import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router, useLocalSearchParams } from 'expo-router';
import { daftarTidur, formatDurasi, hitungDurasi } from '../dataTidur';
import { styles } from '../styles';

export default function DetailTidur() {
  // Parameter id dikirim dari kartu di halaman utama.
  const { id } = useLocalSearchParams<{ id: string }>();
  const catatan = daftarTidur.find((item) => item.id === Number(id));
  const [favorit, setFavorit] = useState(false);
  const [detik, setDetik] = useState(0);

  // Effect mulai menghitung saat halaman dibuka.
  useEffect(() => {
    const timer = setInterval(() => {
      setDetik((nilaiSebelumnya) => nilaiSebelumnya + 1);
    }, 1000);

    // Hentikan timer ketika halaman ditutup agar tidak terus berjalan.
    return () => clearInterval(timer);
  }, []);

  function kembali() {
    // canGoBack adalah fungsi tambahan Expo Router dari Modul 2.
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  }

  return (
    <View style={styles.layar}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.konten}>
        <Text style={styles.judul}>Detail tidur</Text>
        <Text style={styles.subjudul}>Lihat kembali catatan istirahatmu.</Text>

        {catatan ? (
          <View style={styles.kartu}>
            <Text style={styles.tanggal}>{catatan.tanggal}</Text>
            <Text style={styles.nama}>{catatan.nama}</Text>
            <View style={styles.baris}>
              <View style={styles.kolom}>
                <Text style={styles.label}>Jam tidur</Text>
                <Text style={styles.jam}>{catatan.jamTidur}</Text>
              </View>
              <View style={styles.kolom}>
                <Text style={styles.label}>Jam bangun</Text>
                <Text style={styles.jam}>{catatan.jamBangun}</Text>
              </View>
            </View>
            <Text style={{ color: '#5145a6', fontWeight: '700', marginTop: 16 }}>
              Durasi tidur: {formatDurasi(hitungDurasi(catatan.jamTidur, catatan.jamBangun))}
            </Text>
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected: favorit }}
              style={styles.tombol}
              onPress={() => setFavorit(!favorit)}
            >
              <Text style={styles.teksTombol}>
                {favorit ? 'Hapus dari favorit' : 'Tandai favorit'}
              </Text>
            </Pressable>
            <Text style={styles.petunjuk}>
              {favorit ? 'Catatan ini ditandai sebagai favorit.' : 'Catatan ini belum ditandai.'}
            </Text>
          </View>
        ) : (
          <Text style={styles.keterangan}>Catatan tidak ditemukan.</Text>
        )}

        <Text style={styles.keterangan}>Halaman detail dibuka selama {detik} detik.</Text>
        <Pressable accessibilityRole="button" style={styles.tombol} onPress={kembali}>
          <Text style={styles.teksTombol}>Kembali</Text>
        </Pressable>
        <Text style={styles.footer}>Favorit sementara, direset saat detail ditutup.</Text>
      </ScrollView>
    </View>
  );
}
