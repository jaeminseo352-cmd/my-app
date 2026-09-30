import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';

const CONGESTION_OPTIONS = [
  { key: 'low', label: '여유' },
  { key: 'medium', label: '보통' },
  { key: 'high', label: '혼잡' },
];

const CLEAN_OPTIONS = [
  { key: 'clean', label: '깨끗함' },
  { key: 'normal', label: '보통' },
  { key: 'dirty', label: '더러움' },
];

export default function ReportScreen() {
  const { id } =
    useLocalSearchParams<{ id: string }>();

  const router = useRouter();

  const [congestion, setCongestion] =
    useState<string | null>(null);

  const [clean, setClean] =
    useState<string | null>(null);

  const canSubmit =
    !!congestion && !!clean;

  const handleSubmit = () => {
    console.log({
      toiletId: id,
      congestion,
      clean,
    });

    Alert.alert(
      '제보 완료',
      '소중한 제보 감사합니다!'
    );

    router.back();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        지금 상태를 알려주세요
      </Text>

      <Text style={styles.sectionLabel}>
        혼잡도
      </Text>

      <View style={styles.row}>
        {CONGESTION_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={[
              styles.option,
              congestion === option.key &&
                styles.optionActive,
            ]}
            onPress={() =>
              setCongestion(option.key)
            }
          >
            <Text
              style={[
                styles.optionText,
                congestion === option.key &&
                  styles.optionTextActive,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionLabel}>
        청결 상태
      </Text>

      <View style={styles.row}>
        {CLEAN_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={[
              styles.option,
              clean === option.key &&
                styles.optionActive,
            ]}
            onPress={() =>
              setClean(option.key)
            }
          >
            <Text
              style={[
                styles.optionText,
                clean === option.key &&
                  styles.optionTextActive,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.submitButton,
          !canSubmit &&
            styles.submitButtonDisabled,
        ]}
        disabled={!canSubmit}
        onPress={handleSubmit}
      >
        <Text style={styles.submitText}>
          제보하기
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 60,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 21,
    fontWeight: '800',
    color: Colors.light.text,
    marginBottom: 30,
  },

  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },

  option: {
    flex: 1,
    paddingVertical: 17,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: Colors.light.white,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },

  optionActive: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },

  optionText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.light.textSecondary,
  },

  optionTextActive: {
    color: Colors.light.white,
    fontWeight: '800',
  },

  submitButton: {
    marginTop: 'auto',
    marginBottom: 40,
    backgroundColor: Colors.light.point,
    paddingVertical: 17,
    borderRadius: 14,
    alignItems: 'center',
  },

  submitButtonDisabled: {
    backgroundColor: '#D9DEE5',
  },

  submitText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.light.text,
  },
});