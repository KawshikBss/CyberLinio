import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem';
import products from '../products';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
      <View style={styles.couponContainer}>
        <TextInput style={styles.couponInput} placeholder='Apply Coupon' />
        <TouchableOpacity style={styles.applyBtn}>
          <FontAwesome name='chevron-right' style={styles.applyBtnText} />
        </TouchableOpacity>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsSection}>
          <Text style={styles.statsText}>Cart Total:</Text>
          <Text style={styles.statsText}>0$</Text>
        </View>
        <View style={styles.statsSection}>
          <Text style={styles.statsText}>Discount:</Text>
          <Text style={styles.statsText}>0$</Text>
        </View>
        <View style={styles.statsSection}>
          <Text style={styles.statsText}>Final Price:</Text>
          <Text style={styles.statsText}>0$</Text>
        </View>
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
  header: {
      color: "#FCF7FF",
      fontSize: 20,
      fontWeight: "600",
      marginTop: 10,
      marginLeft: 20,
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  couponInput: {
    backgroundColor: '#FCF7FF',
    width: '70%',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
    marginRight: 20,
  },
  applyBtn: {
    backgroundColor: '#FCF7FF',
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyBtnText: {
    fontSize: 16,
    color: '#8D72E1',
  },
  statsContainer: {
    backgroundColor: '#FCF7FF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 90,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#8D72E1',
    borderBottomWidth: 1,
  },
  statsText: {
    // fontSize: 18,
    color: '#8D72E1',
  }
});

export default CartScreen