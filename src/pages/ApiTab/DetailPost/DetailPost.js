import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 30,
   alignItems: 'center',
   textAlign: 'center',
   backgroundColor: '#fff'
  },
  userName: {
    fontSize: 30,
    borderBottomColor: '#eee',
    borderBottomWidth: 2
  },
  title: {
    fontSize: 20,
    paddingTop: 10
  },
  body: {
    fontSize: 16,
    paddingTop: 10

  }
});

export default ({route}) => {

  const { title, body, userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  )
}
