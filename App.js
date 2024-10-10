import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import Home from './components/Home';
import Login from './components/Login';
import Account from './components/Account';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = ({ route }) => {
  const { number = '', password = '' } = route.params || {}; 

  return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide the header for the tab navigator
        tabBarShowLabel: true, // Hide the tab labels
        tabBarActiveTintColor: '#7b51fd',
        tabBarInactiveTintColor: '#000', 
        tabBarStyle: {
          backgroundColor: '#efedf5',
        },
      }}
      >
          <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}  />
          <Tab.Screen name="Account" options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }} >
              {(props) => <Account {...props} number={number} password={password} />}
          </Tab.Screen>
      </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff" 
        hidden={false}
      />
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ title: 'Buzz' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  animatedBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
});
