import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useToilets } from '../hooks/useToilets';

export default function MapScreen() {
  const { toilets, loading } = useToilets();
  const router = useRouter();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>화장실 정보를 불러오는 중...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚽 화장실 나우</Text>
      <Text style={styles.count}>총 {toilets.length.toLocaleString()}개</Text>

      {/* TODO: 이 자리에 카카오맵 WebView가 들어갈 예정 */}

      <FlatList
        data={toilets.slice(0, 50)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/toilet/${item.id}`)}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>📍 {item.address}</Text>
            <Text style={styles.time}>🕐 {item.hours}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5FAFF', paddingTop: 60, paddingHorizontal: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold' },
  count: { fontSize: 15, marginVertical: 10, fontWeight: '600' },
  card: { backgroundColor: '#FFF', borderRadius: 15, padding: 16, marginBottom: 12 },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  address: { fontSize: 14, color: '#555', marginBottom: 6 },
  time: { fontSize: 14, color: '#777' },
});