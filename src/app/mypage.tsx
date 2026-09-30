import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Colors } from '@/constants/theme';

export default function MyPageScreen() {
  const stats = {
    visitCount: 0,
    favoriteCount: 0,
    reviewCount: 0,
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        마이페이지
      </Text>

      {/* 프로필 */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            ?
          </Text>
        </View>

        <View>
          <Text style={styles.nickname}>
            로그인이 필요해요
          </Text>

          <Text style={styles.profileSub}>
            로그인하고 이용 기록을 관리해보세요.
          </Text>
        </View>
      </View>

      {/* 통계 */}
      <View style={styles.statsCard}>
        <Stat
          label="방문한 곳"
          value={stats.visitCount}
        />

        <Stat
          label="즐겨찾기"
          value={stats.favoriteCount}
        />

        <Stat
          label="작성한 후기"
          value={stats.reviewCount}
        />
      </View>

      {/* 메뉴 */}
      <MenuItem label="방문 기록" />
      <MenuItem label="내가 쓴 후기" />
      <MenuItem label="불편 신고" />
      <MenuItem label="설정" />

    </View>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>
        {value}
      </Text>

      <Text style={styles.statLabel}>
        {label}
      </Text>
    </View>
  );
}

function MenuItem({
  label,
}: {
  label: string;
}) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuText}>
        {label}
      </Text>

      <Text style={styles.arrow}>
        ›
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: Colors.light.text,
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: Colors.light.white,
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Colors.light.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  avatarText: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.light.primary,
  },

  nickname: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.light.text,
  },

  profileSub: {
    marginTop: 5,
    fontSize: 12,
    color: Colors.light.textSecondary,
  },

  statsCard: {
    backgroundColor: Colors.light.white,
    borderRadius: 18,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },

  stat: {
    alignItems: 'center',
  },

  statValue: {
    fontSize: 21,
    fontWeight: '800',
    color: Colors.light.primary,
  },

  statLabel: {
    marginTop: 5,
    fontSize: 12,
    color: Colors.light.textSecondary,
  },

  menuItem: {
    backgroundColor: Colors.light.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF1F4',
  },

  menuText: {
    fontSize: 14,
    color: Colors.light.text,
  },

  arrow: {
    fontSize: 22,
    color: '#98A2B3',
  },
});