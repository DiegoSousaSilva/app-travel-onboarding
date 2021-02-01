import React from 'react';
import  "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';

// Screens
import {
  Onboarding
} from './app/screens/Onboarding';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={Onboarding} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

/* export default () =>{
  return <App />
}  */

export default App;
