import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { daftarTidur, hitungDurasi, formatDurasi } from './dataTidur';
import { styles } from './styles';

// Custom function: dijalankan ketika tombol ditekan.
function tampilkanInfo() {
  Alert.alert(
    'Tentang SleepTrack',
    'Aplikasi sederhana untuk melihat contoh catatan tidur dan menghitung durasinya. Data contoh dapat diubah di file dataTidur.ts.',
  );
}

export default function App() {
  return (
    <View style={styles.layar}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.konten}>
        <Text style={styles.judul}>SleepTrack</Text>
        <Text style={styles.subjudul}>Kenali waktu istirahatmu.</Text>

        <View style={styles.banner}>
          <Text style={styles.labelBanner}>CATATAN TIDUR</Text>
          <Text style={styles.judulBanner}>Malam yang tenang, pagi yang segar.</Text>
          <Text style={styles.teksBanner}>
            Lihat jam tidur, jam bangun, dan lama istirahat dalam satu tempat.
          </Text>
        </View>

        <Text style={styles.judulBagian}>Riwayat tidur</Text>
        <Text style={styles.keterangan}>
          {daftarTidur.length} data contoh · Tanggal mengikuti hari bangun
        </Text>

        {/* Loop: map mengubah setiap object menjadi kartu. */}
        {daftarTidur.map((catatan) => {
          const durasi = hitungDurasi(catatan.jamTidur, catatan.jamBangun);

          return (
            <View key={catatan.id} style={styles.kartu}>
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

              {/* Inline style: ditulis langsung pada komponen. */}
              <Text style={{ color: '#5145a6', fontWeight: '700', marginTop: 16 }}>
                Durasi tidur: {formatDurasi(durasi)}
              </Text>
            </View>
          );
        })}

        <Pressable
          accessibilityRole="button"
          onPress={tampilkanInfo}
          style={({ pressed }) => [styles.tombol, { opacity: pressed ? 0.7 : 1 }]}
        >
          <Text style={styles.teksTombol}>Tentang aplikasi</Text>
        </Pressable>
        <Text style={styles.footer}>SleepTrack · Modul 1 · Data contoh</Text>
      </ScrollView>
    </View>
  );
}
