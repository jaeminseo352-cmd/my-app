import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';

export default function LoginScreen() {
  const router = useRouter();

  const handleSocialLogin = (provider: 'kakao' | 'google' | 'apple') => {
    // TODO: 실제 소셜 로그인 SDK 연동
    console.log(`${provider} 로그인 시도`);
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Text style={styles.logo}>🚽</Text>
        <Text style={styles.title}>화장실 나우</Text>
        <Text style={styles.subtitle}>
          가장 가까운 화장실을 가장 빠르게
        </Text>
      </View>

      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#FEE500' }]}
          onPress={() => handleSocialLogin('kakao')}
        >
          <Text style={styles.socialButtonText}>카카오로 시작하기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, styles.googleButton]}
          onPress={() => handleSocialLogin('google')}
        >
          <Text style={styles.googleButtonText}>Google로 시작하기</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/')}>
          <Text style={styles.skipText}>나중에 하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    justifyContent: 'space-between',
    paddingVertical: 80,
    paddingHorizontal: 24,
  },

  logoArea: {
    alignItems: 'center',
    marginTop: 60,
  },

  logo: {
    fontSize: 56,
    marginBottom: 12,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },

  buttonArea: {
    gap: 12,
  },

  socialButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  socialButtonText: {
    fontWeight: '700',
    fontSize: 15,
    color: '#3A1D1D',
  },

  googleButton: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
  },

  googleButtonText: {
    fontWeight: '700',
    fontSize: 15,
    color: Colors.light.text,
  },

  skipText: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 13,
    color: Colors.light.textSecondary,
    textDecorationLine: 'underline',
  },
});
