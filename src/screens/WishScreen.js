import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WishItem from '../components/WishItem'
import products from '../products'

const WishScreen = () => {
  return (
    <View style={styles.container}>
    <SafeAreaView>
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
    </SafeAreaView></View>
  )
}

const styles = StyleSheet.create({
  container: {
      height: "100%",
      backgroundColor: "#8D72E1",
      flexDirection: "column",
      paddingBottom: 140,
  },
  heading: {
    color: '#B9E0FF',
    fontSize: 24,
    fontWeight: '900',
    marginHorizontal: 20,
    marginTop: 20,
    // alignSelf: 'center',
  },
  wishItems: {
    marginHorizontal: 10,
    marginVertical: 10,
  }
});

export default WishScreen