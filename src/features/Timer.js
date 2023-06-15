import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, Vibration } from 'react-native';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing, fontSizes, radiusSize } from '../utils/sizes';
import { ProgressBar, Avatar } from 'react-native-paper';
import { Timing } from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleLabel}>FOCUSING ON</Text>
        <Text style={styles.titleTask}>{focusSubject}</Text>
      </View>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{
            height: spacing.sm,
            borderBottomRightRadius: radiusSize,
            borderBottomLeftRadius: radiusSize,
          }}
        />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.actionWrapper}>
        <RoundedButton
          title={isStarted ? 'PAUSE' : 'START'}
          onPress={() => setIsStarted(!isStarted)}
          variant="circle"
          fontSize="lg"
          size={120}
          style={styles.buttonStart}
        />
        <RoundedButton
          title="-"
          onPress={clearSubject}
          variant="circle"
          fontSize="lg"
          size={80}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  titleWrapper: {
    marginTop: spacing.xxl,
    marginBottom: spacing.xl,
  },
  titleLabel: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.md,
    marginBottom: spacing.sm,
  },
  titleTask: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  countdown: {
    width: '100%',
    marginBottom: spacing.xl,
  },

  timingWrapper: {
    marginBottom: spacing.lg,
  },

  actionWrapper: {
    fle: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.xl,
    marginBottom: spacing.xxl,
  },
  buttonStart: {
    marginBottom: spacing.md,
  },
  cancelWrapper: {},
});
