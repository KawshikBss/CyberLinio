import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ShopScreen from "./ShopScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./ProfileScreen";
import WishScreen from "./WishScreen";
import Feather from "react-native-vector-icons/Feather";
import { StyleSheet, View } from "react-native";
import { CartProvider } from "react-use-cart";

const Tab = createBottomTabNavigator();

const ShopStack = () => {
    return (
        <CartProvider>
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
        </Tab.Navigator></CartProvider>
    );
};

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

export default ShopStack;
