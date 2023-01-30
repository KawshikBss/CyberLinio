import { View, Text, StyleSheet } from 'react-native'
import React, { lazy } from 'react'
import OrdersScreen from './AllOrdersScreen';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PendingOrdersScreen from './PendingOrdersScreen';
import CancelledOrdersScreen from './CancelledOrdersScreen';
import DeliveredOrdersScreen from './DeliveredOrdersScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const OrdersStack = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarStyle: { ...styles.navBar },
            headerShown: false,
            tabBarLabelStyle: {...styles.tabLabel},
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = "all-inclusive-box";
                if (route.name === "Pending") {
                    iconName = "timer-sand";
                } else if (route.name === "Cancelled") {
                    iconName = "cancel";
                } else if (route.name === "Delivered") {
                    iconName = "truck-delivery";
                }
                return (
                        <MaterialCommunityIcons
                            name={iconName}
                            color={color}
                            size={focused ? 30 : 24}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                );
            },
            tabBarInactiveTintColor: "#8D72E1",
            tabBarActiveTintColor: "#B9E0FF",
        })}
    >
        <Tab.Screen name="All" component={OrdersScreen} />
        <Tab.Screen name="Pending" component={PendingOrdersScreen} />
        <Tab.Screen name="Cancelled" component={CancelledOrdersScreen} />
        <Tab.Screen name="Delivered" component={DeliveredOrdersScreen} />
    </Tab.Navigator>
);
}

const styles = StyleSheet.create({
    navBar: {
        height: 80,
        backgroundColor: '#6C4AB6',
        padding: 10,
    },
    tabActiveInner: {
        backgroundColor: "#8D72E133",
        // flexDirection: "row",
    },
    tabLabel: {
        // color: "#8D72E1",
        fontWeight: "bold",
        fontSize: 10,
        alignSelf: 'center',
        marginBottom: 10,
    },
});

export default OrdersStack