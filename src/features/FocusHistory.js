import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View style={styles.container}>
      {!history || !history.length ? (
        <Text style={styles.title}>We havent focused on anything yet!</Text>
      ) : (
        <>
          <Text style={styles.title}>Things weve focused on:</Text>
          <FlatList data={history} renderItem={renderItem} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    marginBottom: spacing.md,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingBottom: spacing.sm,
  },
});
