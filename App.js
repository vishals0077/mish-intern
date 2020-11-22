import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PollPage from './PollPage';
import ImageSelectionScreen from './ImageSelectionScreen';
import PreviewScreen from './PreviewScreen';
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen
            name="Poll Page"
            component={PollPage}
            options={{title:'create poll'}}
          />
           <Stack.Screen
            name="Image Selection Screen"
            component={ImageSelectionScreen}
            options={{title:'select images'}}
          />
          <Stack.Screen
            name="Preview Screen"
            component={PreviewScreen}
            options={{title:'select images'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}