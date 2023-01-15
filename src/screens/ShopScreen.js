import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ProductsView from "../components/ProductsView";
import products from "../products";
import Header from "../components/Header";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ShopScreen = ({ route }) => {
    const [selections, setSelections] = useState({
      match: false,
      sales: false,
      price: false,
      filter: false,
    });
    const handleSelection = (selection) => {
      setSelections(curr => {
        if (selection === 0) return {...curr, match: !curr.match};
        else if (selection === 1) return {...curr, sales: !curr.sales};
        else if (selection === 2) return {...curr, price: !curr.price};
        return {...curr, filter: !curr.filter};
      })
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.header}>
              <TouchableOpacity style={styles.headerBtn} onPress={() => handleSelection(0)}>
                <FontAwesome name="thumbs-up" style={StyleSheet.flatten([styles.headerBtnIcon, selections.match? styles.headerBtnActive: {}])} />
                <Text style={StyleSheet.flatten([styles.headerBtnText, selections.match? styles.headerBtnActive: {}])}>Best Match</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerBtn} onPress={() => handleSelection(1)}>
                <FontAwesome name="fire" style={StyleSheet.flatten([styles.headerBtnIcon, selections.sales? styles.headerBtnActive: {}])} />
                <Text style={StyleSheet.flatten([styles.headerBtnText, selections.sales? styles.headerBtnActive: {}])}>Top Sales</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerBtn} onPress={() => handleSelection(2)}>
                <FontAwesome name="dollar" style={StyleSheet.flatten([styles.headerBtnIcon, selections.price? styles.headerBtnActive: {}])} />
                <Text style={StyleSheet.flatten([styles.headerBtnText, selections.price? styles.headerBtnActive: {}])}>Price</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerBtn} onPress={() => handleSelection()}>
                <FontAwesome name="filter" style={StyleSheet.flatten([styles.headerBtnIcon, selections.filter? styles.headerBtnActive: {}])} />
              </TouchableOpacity>
            </View>
            <ProductsView products={products.new} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#8D72E1",
        flexDirection: "column",
    },
    header: {
      // width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FCF7FF',
      marginHorizontal: 10,
      marginVertical: 5,
      padding: 10,
      borderRadius: 5,
    },
    headerBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerBtnText: {
      color: '#6C4AB6',
      fontSize: 14,
    },
    headerBtnIcon: {
      color: '#6C4AB6',
      fontSize: 18,
      marginRight: 2,
    },
    headerBtnActive: {
      color: '#B9E0FF',
    },
});

export default ShopScreen;
