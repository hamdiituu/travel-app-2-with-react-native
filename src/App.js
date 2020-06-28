import React from 'react';
import {HomeScreen, DetailScreen} from './screens';

//Navigation
//react
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

const App = () => {
  return <AppNavigation />;
};

export default App;
