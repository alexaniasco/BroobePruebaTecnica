import {Dimensions} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

// Obtén las dimensiones de la pantalla y define constantes base
const {width: screenWidth} = Dimensions.get('window');
const BASE_WIDTH = 375; // Ancho base de diseño en Figma
const MIN_SCALE = 0.5; // Factor de escala mínimo
const MAX_SCALE = 1.5; // Factor de escala máximo

// Función mejorada para escalar según el ancho con límites
export const horizontalScale = size => {
  const scale = screenWidth / BASE_WIDTH;
  const boundedScale = Math.min(Math.max(scale, MIN_SCALE), MAX_SCALE);
  return size * boundedScale;
};

const FontSizes = {
  XS: horizontalScale(9), // Muy pequeño
  S: horizontalScale(11), // Pequeño
  M: horizontalScale(13), // Mediano
  L: horizontalScale(15), // Grande
  XL: horizontalScale(17), // Muy grande
  XXL: horizontalScale(19), // Títulos destacados
};

export const FontWeights = {
  Regular: '400',
  Medium: '500',
  SemiBold: '600',
  Bold: '700',
};

export const Typography = {
  heading1: {
    fontSize: FontSizes.XXL,
    fontWeight: FontWeights.Bold,
  },
  heading2: {
    fontSize: FontSizes.XL,
    fontWeight: FontWeights.SemiBold,
  },
  body: {
    fontSize: FontSizes.M,
    fontWeight: FontWeights.Regular,
  },
  smallText: {
    fontSize: FontSizes.S,
    fontWeight: FontWeights.Regular,
  },
  caption: {
    fontSize: FontSizes.XS,
    fontWeight: FontWeights.Regular,
  },
};

export default FontSizes;
