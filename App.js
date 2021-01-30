// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './components/Login';
import RegistrationScreen from './components/Registration';
import AccountScreen from './components/Dashboard';
import HomeScreen from './components/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Regristration" component={RegistrationScreen} />
        <Stack.Screen name="SignIn" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

