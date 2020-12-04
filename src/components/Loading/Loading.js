import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
});

export default () => {
  return <View style={styles.container}>
     <ActivityIndicator size="large" color="#00ff00" />
  </View>
}