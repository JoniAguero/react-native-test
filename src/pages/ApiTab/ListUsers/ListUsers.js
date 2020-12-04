import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { GetUsersApi } from '../../../shared/services/ApiService';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import { fetchUsers } from '../../../redux/actions/usersActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

const ListUsers = ({navigation}) => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const state = useSelector(state => state.state)

  if(loading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => <ListItem text={item.name} onPress={() => navigation.navigate('Posts', {userId: item.id, userName: item.name}) } />}
        keyExtractor={ item => item.id.toString() }
      />
    </View>
  );
}

const mapStateToProps = state => {
  return { data : state.users }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers)
})

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers)
