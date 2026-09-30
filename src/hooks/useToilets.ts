import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Toilet } from '../types/toilet';

export function useToilets() {
  const [toilets, setToilets] = useState<Toilet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const response = await fetch('/data/공중화장실정보_utf8.csv');
      const text = await response.text();

      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (h) => h.replace(/^\uFEFF/, '').trim(),
        complete: (results) => {
          const raw = results.data as Record<string, string>[];

          // ⚠️ 실제 컬럼명은 콘솔에 찍은 걸 보고 여기서만 맞춰주면 됩니다.
          const mapped: Toilet[] = raw.map((row, i) => ({
            id: String(i),
            name: row['화장실명'] || '이름 없음',
            address: row['소재지도로명주소'] || row['소재지지번주소'] || '주소 정보 없음',
            lat: parseFloat(row['위도']) || 0,
            lng: parseFloat(row['경도']) || 0,
            hours: row['개방시간상세'] || row['개방시간'] || '정보 없음',
            amenities: {
              disabled: row['장애인용변기수'] ? Number(row['장애인용변기수']) > 0 : false,
              babyChair: row['기저귀교환대수'] ? Number(row['기저귀교환대수']) > 0 : false,
              bidet: false,
              separated: true,
            },
            source: 'public',
          }));

          setToilets(mapped);
          setLoading(false);
        },
      });
    } catch (error) {
      console.error('CSV 불러오기 실패:', error);
      setLoading(false);
    }
  };

  return { toilets, loading };
}