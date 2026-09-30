/**
 * 화장실 나우 브랜드 아이덴티티
 *
 * 주조색
 * Deep Cerulean Blue  #1E88E5
 *
 * 보조색
 * Light Ice Blue      #E3F2FD
 *
 * 포인트
 * Pastel Neon Yellow  #E6FF00
 *
 * 배경색
 * White / Light Gray  #F5F7FA
 */

import '@/global.css';

import { Platform } from 'react-native';

/* --------------------------------
 * Colors
 * -------------------------------- */

export const Colors = {
  light: {
    // 브랜드 주조색
    primary: '#1E88E5',

    // 브랜드 보조색
    secondary: '#E3F2FD',

    // 브랜드 포인트
    point: '#E6FF00',

    // 기본 텍스트
    text: '#17212B',

    // 앱 배경
    background: '#F5F7FA',

    // 카드 / 버튼 배경
    backgroundElement: '#FFFFFF',

    // 선택된 영역의 배경
    backgroundSelected: '#E3F2FD',

    // 보조 텍스트
    textSecondary: '#667085',

    // 테두리
    border: '#DCE3EA',

    // 흰색
    white: '#FFFFFF',
  },

  dark: {
    primary: '#42A5F5',
    secondary: '#163B5C',
    point: '#E6FF00',

    text: '#FFFFFF',
    background: '#101418',
    backgroundElement: '#1B2229',
    backgroundSelected: '#243B4D',

    textSecondary: '#AAB4BE',
    border: '#303A43',
    white: '#FFFFFF',
  },
} as const;


/* --------------------------------
 * Theme Color Type
 * -------------------------------- */

export type ThemeColor =
  keyof typeof Colors.light &
  keyof typeof Colors.dark;


/* --------------------------------
 * Fonts
 * -------------------------------- */

export const Fonts = Platform.select({

  ios: {
    // 한글 본문
    sans: 'Pretendard',

    // 한글 포인트
    koreanPoint: 'GmarketSans',

    // 영어
    english: 'Montserrat',

    // 숫자 / 짧은 포인트
    number: 'RobotoCondensed',

    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },

  default: {
    // 한글 본문
    sans: 'Pretendard',

    // 한글 포인트
    koreanPoint: 'GmarketSans',

    // 영어
    english: 'Montserrat',

    // 숫자 / 짧은 포인트
    number: 'RobotoCondensed',

    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },

  web: {
    sans: 'Pretendard',
    koreanPoint: 'Gmarket Sans',
    english: 'Montserrat',
    number: 'Roboto Condensed',

    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});


/* --------------------------------
 * Spacing
 * -------------------------------- */

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;


/* --------------------------------
 * Layout
 * -------------------------------- */

export const BottomTabInset =
  Platform.select({
    ios: 50,
    android: 80,
  }) ?? 0;

export const MaxContentWidth = 800;