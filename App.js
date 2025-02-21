import React from 'react';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, View } from 'react-native';
//import * as SystemUI from 'expo-system-ui';
import HomeScreen from './AppData/HomeScreen';
import DialPad from './AppData/DialPad';
import Contacts from './AppData/Contacts';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false}}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DialPad" component={DialPad} />
        <Stack.Screen name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>

      // <HomeScreen />
      //<DialPad/>
      // <Contacts/> 

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });


