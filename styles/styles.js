import {ScaledSheet} from 'react-native-size-matters';

export const Scaledsheet = ScaledSheet.create({
  paddingVertical: {
    paddingVertical: '60@vs',
  },
  paddingHorizontall: {
    paddingHorizontal: '28@ms',
  },
  paddingHorizontal: {
    paddingHorizontal: '28@s',
  },
  text: {
    fontSize: '14@ms',
  },
});

// typography.js
export const Typography = {
  XS: 12,
  S: 14,
  M: 16, // Base size
  L: 20,
  XL: 24,
  XXL: 32,
  FontWeights: {
    Regular: '400',
    Medium: '500',
    Bold: '700',
  },
};

// spacing.js
export const Spacing = {
  XS: 4,
  S: 8,
  M: 16,
  L: 24,
  XL: 32,
};
