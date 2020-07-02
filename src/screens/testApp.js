// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Drop from './Drop';
import Gallery from './Gallery';
import QrScan from './QrScan';

const Stack = createStackNavigator();

function testApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drop">
        <Stack.Screen
          name="Drop"
          component={Drop}
          options={{title: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={{title: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="QrScan"
          component={QrScan}
          options={{title: '', headerTransparent: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default testApp;
