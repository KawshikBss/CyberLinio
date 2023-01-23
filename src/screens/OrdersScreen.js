import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const OrdersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        
      <Text style={styles.heading}>All Orders</Text>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#8D72E1",
        flexDirection: "column",
    },
    heading: {
      color: '#B9E0FF',
      fontSize: 22,
      fontWeight: '900',
      marginHorizontal: 10,
      marginVertical: 10,
      backgroundColor: '#6C4AB6',
      padding: 10,
      borderRadius: 10,
    },
});

export default OrdersScreen