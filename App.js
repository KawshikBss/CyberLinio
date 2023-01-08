import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShopScreen from './src/screens/ShopScreen';
import SplashScreen from './src/screens/SplashScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: {...styles.navBar},
      }}>
        <Tab.Screen name='Splash' component={SplashScreen} />
        <Tab.Screen name='Shop' component={ShopScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navBar: {
    borderTopLeftRadius:21, 
    borderTopRightRadius:21,
    backgroundColor:"#6c63ff",
    position:'absolute',
    bottom: 0,
    padding:10,
    width: '100%',
    height: 54,
    zIndex: 8 
  }
});
