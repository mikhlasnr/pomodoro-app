import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing, radiusSize, heightSizes } from '../utils/sizes';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = '100%',
  variant = 'rounded',
  fontSize = 'md',
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[stylesButton(size, variant).button, style]}
      onPress={props.onPress}>
      <Text style={[stylesText(fontSize).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const stylesButton = (size, variant) => ({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: variant === 'circle' ? size : heightSizes.md,
    borderColor: colors.white,
    borderRadius: variant === 'circle' ? size / 2 : radiusSize,
    borderWidth: 1,
    paddingVertical: variant === 'circle' ? 0 : spacing.sm,
    paddingHorizontal: variant === 'circle' ? 0 : spacing.md,
  },
});
const stylesText = (fontSize) => ({
  text: {
    color: colors.white,
    fontSize: fontSizes[fontSize],
    fontWeight: '500',
  },
});
