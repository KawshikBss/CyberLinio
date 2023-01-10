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
                    }
                    else if (route.name === "Cart") {
                        iconName = "shopping-cart";
                    }
                    else if (route.name === "Profile") {
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
                            <Feather name={iconName} color={color} size={focused? 30: 24} />
                            {/* {focused ? (
                                <Text style={styles.tabLabel}>
                                    {route.name}
                                </Text>
                            ) : (
                                ""
                            )} */}
                        </View>
                    );
                },
                tabBarInactiveTintColor: "#CFCFCF",
                tabBarActiveTintColor: "#FF5500",
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Shop" component={ShopScreen} />
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
                }}
            >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="HomeTab" component={HomeTab} />
                <Stack.Screen name="Product" component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    navBar: {
        /* borderTopLeftRadius: 30,
        borderTopRightRadius: 30, */
        borderRadius: 50,
        position: "absolute",
        left: '5%',
        right: '5%',
        bottom: 10,
        width: "90%",
        height: 60,
        zIndex: 8,
        paddingHorizontal: 10,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    tabActiveContainer: {
        backgroundColor: "rgba(255, 85, 0, 0.1)",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 50,
    },
    tabLabel: {
        color: "#FF5500",
        fontWeight: "500",
        fontSize: 16,
        marginLeft: 4,
    },
});
