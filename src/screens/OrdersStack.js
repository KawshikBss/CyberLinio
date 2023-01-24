import { View, Text, StyleSheet } from 'react-native'
import React, { lazy } from 'react'
import OrdersScreen from './OrdersScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
        <Tab.Screen name="Pending" component={OrdersScreen} />
        <Tab.Screen name="Cancelled" component={OrdersScreen} />
        <Tab.Screen name="Waiting" component={OrdersScreen} />
    </Tab.Navigator>
);
}

const styles = StyleSheet.create({
    navBar: {
        // borderRadius: 50,
        // position: "absolute",
        // left: "5%",
        // right: "5%",
        // top: 10,
        // width: "90%",
        height: 60,
        // zIndex: 8,
        paddingHorizontal: 10,
        backgroundColor: '#6C4AB6'
    },
    tabActiveInner: {
        backgroundColor: "#8D72E133",
        flexDirection: "row",
        // width: '100%',
        // justifyContent: "center",
        // alignItems: "center",
        // borderRadius: 50,
        // padding: 10,
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