import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// TODO: 로그인 붙으면 서버에서 즐겨찾기 목록 fetch로 교체
export default function FavoritesScreen() {
  const favorites: { id: string; name: string; address: string }[] = [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>즐겨찾기</Text>
      {favorites.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>⭐ 아직 저장한 화장실이 없어요</Text>
          <Text style={styles.emptySub}>화장실 상세화면에서 별 버튼을 눌러 저장해보세요</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>{item.address}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  empty: { alignItems: 'center', marginTop: 60 },
  emptyText: { fontSize: 16, marginBottom: 8 },
  emptySub: { fontSize: 13, color: '#888' },
  card: { backgroundColor: '#F5FAFF', borderRadius: 15, padding: 16, marginBottom: 12 },
  name: { fontSize: 16, fontWeight: 'bold' },
  address: { fontSize: 13, color: '#555' },
});