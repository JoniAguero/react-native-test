import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location';

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center"
  }
});

export default () => {

  const [location, setLocation] = useState({}
    )
  const searchLocation = async () => {
    const { status }  = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert("You don't have the necessary permissions")
    }
    const location = await Location.getCurrentPositionAsync({})
    setLocation(location)
  }


  useEffect(() => {
    searchLocation()
  }, [])


  return (
    <View style={styles.container} >
      <MapView  style={styles.map} >
        { location.coords ? <Marker coordinate={location.coords} title="Marker" description="Description" /> : null }
      </MapView>
    </View>
  )
}
