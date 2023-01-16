import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem';
import products from '../products';

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Cart</Text>
      <ScrollView>
        {
          products?.new?
            products.new.slice(0, 4).map((item, index) => {
              return (
                <CartItem item={item} key={index} vary={index % 2 === 0} />
              )
            }): ''
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#8D72E1",
    flexDirection: "column",
  },
  header: {
      color: "#6C4AB6",
      fontSize: 24,
      fontWeight: "600",
      marginTop: 10,
      marginLeft: 10,
  },
});

export default CartScreen