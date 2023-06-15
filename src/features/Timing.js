import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingWrapper}>
      <View style={styles.timingButton}>
        <RoundedButton
          title="10"
          onPress={() => onChangeTime(10)}
          variant="circle"
          fontSize="lg"
          size={80}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          title="15"
          onPress={() => onChangeTime(15)}
          variant="circle"
          fontSize="lg"
          size={80}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          title="20"
          onPress={() => onChangeTime(20)}
          variant="circle"
          fontSize="lg"
          size={80}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
