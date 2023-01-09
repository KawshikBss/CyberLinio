import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';
import ShopScreen from './src/screens/ShopScreen';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ShopTab = () => {
      return (<Tab.Navigator screenOptions={{
        tabBarStyle: {...styles.navBar},
        headerShown: false,
      }}>
        <Tab.Screen name='Shop' component={ShopScreen} />
      </Tab.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='ShopTab' component={ShopTab} />
        <Stack.Screen name='Product' component={ProductScreen} />
  </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navBar: {
    borderTopLeftRadius:30, 
    borderTopRightRadius:30,
    position:'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    zIndex: 8,
  }
});
