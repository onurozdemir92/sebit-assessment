/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/Home';
import OpenImageScreen from './src/screens/OpenImage';
import QuestionScreen from './src/screens/Question';
import OpenVideoScreen from './src/screens/OpenVideo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OpenImage" component={OpenImageScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="OpenVideo" component={OpenVideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
