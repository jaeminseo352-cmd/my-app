import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useToilets } from '../hooks/useToilets';

const FILTERS = [
  { key: 'all', label: '전체' },
  { key: 'open24', label: '24시간' },
  { key: 'disabled', label: '장애인 시설' },
  { key: 'baby', label: '기저귀 교환대' },
  { key: 'separated', label: '남녀 분리' },
] as const;

export default function SearchScreen() {
  const { toilets } = useToilets();
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['key']>('all');

  const results = useMemo(() => {
    return toilets.filter((t) => {
      const matchesKeyword = keyword === '' || t.name.includes(keyword) || t.address.includes(keyword);
      const matchesFilter =
        filter === 'all' ||
        (filter === 'open24' && t.hours.includes('24')) ||
        (filter === 'disabled' && t.amenities.disabled) ||
        (filter === 'baby' && t.amenities.babyChair) ||
        (filter === 'separated' && t.amenities.separated);
      return matchesKeyword && matchesFilter;
    });
  }, [toilets, keyword, filter]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="장소, 지하철역으로 검색"
        value={keyword}
        onChangeText={setKeyword}
      />

      <View style={styles.chipRow}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f.key}
            style={[styles.chip, filter === f.key && styles.chipActive]}
            onPress={() => setFilter(f.key)}
          >
            <Text style={filter === f.key ? styles.chipTextActive : styles.chipText}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {results.length === 0 ? (
        <View style={styles.empty}>
          <Text>검색 결과가 없어요. 다른 키워드로 시도해보세요.</Text>
        </View>
      ) : (
        <FlatList
          data={results.slice(0, 50)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => router.push(`/toilet/${item.id}`)}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>📍 {item.address}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60, paddingHorizontal: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 12, marginBottom: 12 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  chip: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20, backgroundColor: '#eee' },
  chipActive: { backgroundColor: '#4A90E2' },
  chipText: { color: '#333' },
  chipTextActive: { color: '#fff', fontWeight: '600' },
  empty: { alignItems: 'center', marginTop: 40 },
  card: { backgroundColor: '#F5FAFF', borderRadius: 15, padding: 16, marginBottom: 12 },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  address: { fontSize: 13, color: '#555' },
});