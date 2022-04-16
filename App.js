import { View, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name='Home' options={{headerShown:false}}>{(props)=><Home {...props} startUpName={"geekashram"}/>}</Stack.Screen>
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Course" component={Course} 
        options={{
          headerTitleStyle:{
            fontSize: 25
          },
          headerTitle:'Courses',
          headerTitleAlign:'center'
        }}/>
        <Stack.Screen name="UserData" component={UserData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// For navigation
// npm install @react-navigation/native
// expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack