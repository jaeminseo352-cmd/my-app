import { Tabs } from 'expo-router';
import { Colors } from '@/constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: '#98A2B3',

        tabBarStyle: {
          backgroundColor: Colors.light.white,
          borderTopColor: Colors.light.border,
          height: 70,
          paddingTop: 8,
          paddingBottom: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '지도',
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: '검색',
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: '즐겨찾기',
        }}
      />

      <Tabs.Screen
        name="mypage"
        options={{
          title: '마이',
        }}
      />

      {/* 하단 탭에서 숨길 화면 */}
      <Tabs.Screen
        name="login"
        options={{
          title: '로그인',
        }}
      />

      <Tabs.Screen
        name="report"
        options={{
          title: '제보',
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="favorite"
        options={{
          title: '즐겨찾기',
        }}
      />
    </Tabs>
  );
}