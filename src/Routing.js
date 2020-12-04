import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ListUsers from './pages/ApiTab/ListUsers';
import ListPosts from './pages/ApiTab/LIstsPosts';
import DetailPost from './pages/ApiTab/DetailPost/DetailPost';
import Map from './pages/MapTab/Map';
import Camera from './pages/CameraTab/Camera';

const Api = createStackNavigator()
const Tab = createBottomTabNavigator();

function ApiNavigator() {
  return (
    <Api.Navigator>
      <Api.Screen 
        name="Users" 
        component={ListUsers} 
      />
      <Api.Screen 
        name="Posts" 
        component={ListPosts} 
      />
      <Api.Screen 
        name="Detail" 
        component={DetailPost} 
      />
  </Api.Navigator>
  );
}

export default function Routing() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="API" component={ApiNavigator} />
        <Tab.Screen name="MAPS" component={Map} />
        <Tab.Screen name="CAMERA" component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
