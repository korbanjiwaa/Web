import { Platform, StatusBar, StyleSheet } from 'react-native';

// External styles: diimpor dan digunakan oleh App.tsx.
export const styles = StyleSheet.create({
  layar: {
    flex: 1,
    backgroundColor: '#f5f4fa',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 24) + 12 : 60,
  },
  konten: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    padding: 22,
    paddingBottom: 44,
  },
  judul: { fontSize: 30, fontWeight: '800', color: '#29233f' },
  subjudul: { fontSize: 15, color: '#706b80', marginTop: 4, marginBottom: 24 },
  banner: { backgroundColor: '#5145a6', borderRadius: 20, padding: 24, marginBottom: 28 },
  labelBanner: { color: '#e1dcff', fontSize: 11, fontWeight: '700', letterSpacing: 2 },
  judulBanner: { color: '#ffffff', fontSize: 25, lineHeight: 33, fontWeight: '700', marginTop: 12 },
  teksBanner: { color: '#eeeaff', fontSize: 14, lineHeight: 22, marginTop: 12 },
  judulBagian: { color: '#29233f', fontSize: 20, fontWeight: '700' },
  keterangan: { color: '#706b80', fontSize: 12, lineHeight: 18, marginTop: 6, marginBottom: 16 },
  kartu: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e8e4f0', borderRadius: 16, padding: 20, marginBottom: 14 },
  tanggal: { color: '#706b80', fontSize: 12 },
  nama: { color: '#29233f', fontSize: 18, fontWeight: '700', marginTop: 6 },
  baris: { flexDirection: 'row', marginTop: 18, gap: 16 },
  kolom: { flex: 1 },
  label: { color: '#706b80', fontSize: 12 },
  jam: { color: '#29233f', fontSize: 24, fontWeight: '600', marginTop: 5 },
  tombol: { backgroundColor: '#5145a6', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 8 },
  teksTombol: { color: '#ffffff', fontSize: 14, fontWeight: '700' },
  footer: { color: '#706b80', fontSize: 12, textAlign: 'center', marginTop: 24 },
});
