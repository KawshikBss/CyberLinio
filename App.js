import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import OrdersScreen from "./src/screens/AllOrdersScreen";
import ShopStack from "./src/screens/ShopStack";
import OrdersStack from "./src/screens/OrdersStack";
import MessageScreen from "./src/screens/MessageScreen";
import ReviewsScreen from "./src/screens/ReviewsScreen";
import RedeemScreen from "./src/screens/RedeemScreen";
import HelpScreen from "./src/screens/HelpScreen";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import toastConfig from "./src/toastConfig";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthContext from "./src/services/AuthContext";
import { CartProvider } from "react-use-cart";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext>
                <CartProvider>
                    <NavigationContainer>
                        <Stack.Navigator
                            initialRouteName="Splash"
                            screenOptions={{
                                headerShown: false,
                                navigationBarHidden: true,
                            }}
                        >
                            <Stack.Screen
                                name="Splash"
                                component={SplashScreen}
                            />
                            <Stack.Screen
                                name="ShopStack"
                                component={ShopStack}
                            />
                            <Stack.Screen
                                name="Product"
                                component={ProductScreen}
                            />
                            <Stack.Screen
                                name="Checkout"
                                component={CheckoutScreen}
                            />
                            <Stack.Screen
                                name="OrdersStack"
                                component={OrdersStack}
                            />
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                            />
                            <Stack.Screen
                                name="Signup"
                                component={SignupScreen}
                            />
                            <Stack.Screen
                                name="Notifications"
                                component={MessageScreen}
                            />
                            <Stack.Screen
                                name="Reviews"
                                component={ReviewsScreen}
                            />
                            <Stack.Screen
                                name="Redeem"
                                component={RedeemScreen}
                            />
                            <Stack.Screen name="Help" component={HelpScreen} />
                        </Stack.Navigator>
                        <Toast config={toastConfig} />
                    </NavigationContainer>
                </CartProvider>
            </AuthContext>
        </QueryClientProvider>
    );
}
