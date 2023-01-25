import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import orders from '../orders';
import OrderItem from '../components/OrderItem';

const PendingOrdersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
      <ScrollView>
        {
          orders?
          orders.map((order, index) => {
            return order.status === 'Pending'?(
              <OrderItem order={order} key={index} />
            ): '';
          }): ''
        }
        </ScrollView>
        </View>
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

export default PendingOrdersScreen