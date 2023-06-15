import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing, fontSizes, heightSizes } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>POMODORO APP</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          placeholder="What would you like to focus on?"
        />
        <RoundedButton
          title="START FOCUS"
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
  },
  title: {
    marginTop: spacing.xl,
    marginBottom: spacing.xxl,
    fontSize: fontSizes.xl,
    color: colors.white,
    textAlign: 'center',
  },

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: spacing.xxl,
  },
  textInput: {
    width: '100%',
    marginBottom: spacing.lg,
    height: heightSizes.md,
  },
});
