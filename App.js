import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen";
import Feather from "react-native-vector-icons/Feather";
import ShopScreen from "./src/screens/ShopScreen";
import CartScreen from "./src/screens/CartScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import WishScreen from "./src/screens/WishScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: { ...styles.navBar },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "home";
                    if (route.name === "Shop") {
                        iconName = "shopping-bag";
                    } else if (route.name === "Wishlist") {
                        iconName = "heart";
                    } else if (route.name === "Cart") {
                        iconName = "shopping-cart";
                    } else if (route.name === "Profile") {
                        iconName = "user";
                    }
                    return (
                        <View
                            style={
                                focused
                                    ? styles.tabActiveContainer
                                    : styles.tabContainer
                            }
                        >
                            <View style={focused? styles.tabActiveInner: {}}>
                            <Feather
                                name={iconName}
                                color={color}
                                size={focused ? 30 : 24}
                                style={{
                                    height: 30,
                                    width: 30
                                }}
                            />
                            </View>
                        </View>
                    );
                },
                tabBarInactiveTintColor: "#6C4AB6",
                tabBarActiveTintColor: "#8D72E1",
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Shop" component={ShopScreen} />
            <Tab.Screen name="Wishlist" component={WishScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    navigationBarHidden: true,
                }}
            >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="HomeTab" component={HomeTab} />
                <Stack.Screen name="Product" component={ProductScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    navBar: {
        borderRadius: 50,
        position: "absolute",
        left: "5%",
        right: "5%",
        bottom: 10,
        width: "90%",
        height: 60,
        zIndex: 8,
        paddingHorizontal: 10,
        backgroundColor: '#FCF7FF'
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    tabActiveInner: {
        backgroundColor: "#8D72E133",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        padding: 10,
    },
    tabActiveContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        position: 'absolute',
        top: -20,
        backgroundColor: '#FCF7FF',
        padding: 10,
    },
    tabLabel: {
        color: "#FF5500",
        fontWeight: "500",
        fontSize: 16,
        marginLeft: 4,
        height: 16,
        width: 16
    },
});
