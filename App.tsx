import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from "./Screens/WelcomePage";
import Rules from "./Screens/Rules";
import Homepage from "./Screens/Homepage";
import Settings from "./Screens/Settings";
import Support from "./Screens/Support";
import Tutorial from "./Screens/Tutorial";
import SelectLevel from "./Screens/SelectLevel";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='main'>
        <Stack.Screen name='main' component={WelcomePage}/>
        <Stack.Screen name='rules' component={Rules} />
        <Stack.Screen name='homepage' component={Homepage} />
        <Stack.Screen name='settings' component={Settings} />
        <Stack.Screen name='support' component={Support} />
        <Stack.Screen name='tutorial' component={Tutorial} />
        <Stack.Screen name='selectLevel' component={SelectLevel} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}