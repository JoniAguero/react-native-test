import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera';
import { Button, StyleSheet, Text, View } from 'react-native';

export default () => {

  const styles = StyleSheet.create({
    camera: {
      flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingTop: 22
    },
    button: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  })

  const [permissions, setPermissions] = useState(null)
  const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.back)

  const getPermissions = async () => {
    const { status } = await Camera.requestPermissionsAsync()
    setPermissions(status)
  }

  useEffect(() => {
    getPermissions()
  }, [])

  if(permissions === null) {
    return <View><Text>Esperando permisos</Text></View>
  } 

  if(permissions === false) {
    return <View><Text> No tenemos acceso a la cámara </Text></View>
  } 

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={typeCamera}>
        <View style={styles.button}>
          <Button 
            title='Change'
            onPress={() => {
              const {front, back} = Camera.Constants.Type
              const newType = typeCamera === back ? front : back;
              setTypeCamera(newType);
            }}
          />
        </View>
      </Camera>
    </View>
  )
}
