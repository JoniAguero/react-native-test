import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import { GetPostsApi } from '../../../shared/services/ApiService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default ({route, navigation}) => {

  const { userId, userName } = route.params;

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    GetPostsApi(userId)
      .then(response => response.json())
      .then(data =>{ 
        setPosts(data)
        setLoading(false)
      })
  }, [])

  if(loading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => <ListItem text={item.title} onPress={() => navigation.navigate('Detail', {title: item.title, body: item.body, userName }) } /> }
        keyExtractor={ item => item.id.toString() }
      />
    </View>
  );
}