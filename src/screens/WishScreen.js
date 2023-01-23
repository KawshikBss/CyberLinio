import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WishItem from '../components/WishItem'
import products from '../products'

const WishScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Wishlist</Text>
      <ScrollView contentContainerStyle={styles.wishItems}>
        {
          products?.new?
            products.new.map((item, index) => {
              return (
                <WishItem key={index} item={item} />
              );
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
  heading: {
    color: '#B9E0FF',
    fontSize: 22,
    fontWeight: '900',
    marginHorizontal: 10,
    marginVertical: 10,
    // borderColor: '#B9E0FF',
    // borderBottomWidth: 2,
    // borderBottomWidth: 2,
    backgroundColor: '#6C4AB6',
    padding: 10,
    borderRadius: 10,
  },
  wishItems: {
    marginHorizontal: 10,
    marginVertical: 20,
  }
});

export default WishScreen