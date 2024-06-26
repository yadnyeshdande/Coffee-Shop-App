import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import SplashScreen from 'react-native-splash-screen';

const stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide ();
  }, []);
  return (
   <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='Tab' 
        component={TabNavigator} 
        options={{animation:'slide_from_bottom'}}></stack.Screen>

        <stack.Screen name='Details' 
        component={DetailsScreen} 
        options={{animation:'slide_from_bottom'}}></stack.Screen>

        <stack.Screen name='Payment' 
        component={PaymentScreen} 
        options={{animation:'slide_from_bottom'}}></stack.Screen>
      </stack.Navigator>
   </NavigationContainer>
  );
};

{/* TIME 1:48 */}

export default App;