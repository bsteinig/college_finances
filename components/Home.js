// The screen the user sees when they open the app

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import GlobalStyles from '../GlobalStyles';

function HomeScreen({ navigation }) {
    return (
      <View style={GlobalStyles.container}>
        <Text>College Finance</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Registration')}
        />
      </View>
    );
  }
  

export default HomeScreen