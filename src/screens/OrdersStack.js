import { View, Text, StyleSheet } from 'react-native'
import React, { lazy } from 'react'
import OrdersScreen from './AllOrdersScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PendingOrdersScreen from './PendingOrdersScreen';
import CancelledOrdersScreen from './CancelledOrdersScreen';
import DeliveredOrdersScreen from './DeliveredOrdersScreen';

const Tab = createMaterialTopTabNavigator();

const OrdersStack = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarStyle: { ...styles.navBar },
            headerShown: false,
            tabBarLabelStyle: {...styles.tabLabel},
            tabBarInactiveTintColor: "#8D72E1",
            tabBarActiveTintColor: "#B9E0FF",
        })}
    >
        <Tab.Screen name="All" component={OrdersScreen} />
        <Tab.Screen name="Pending" component={PendingOrdersScreen} />
        <Tab.Screen name="Cancelled" component={CancelledOrdersScreen} />
        <Tab.Screen name="Devilered" component={DeliveredOrdersScreen} />
    </Tab.Navigator>
);
}

const styles = StyleSheet.create({
    navBar: {
        height: 60,
        backgroundColor: '#6C4AB6'
    },
    tabActiveInner: {
        backgroundColor: "#8D72E133",
        flexDirection: "row",
        borderWidth: 1,
    },
    tabLabel: {
        // color: "#8D72E1",
        fontWeight: "bold",
        fontSize: 10,
        alignSelf: 'center'
    },
});

export default OrdersStack