import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";

const ProductsView = ({ products }) => {
    return (
        <View style={styles.container}>
        <ScrollView >
            <View style={styles.wrapper}>
            {products ? (
                products.map((product, index) => {
                    return <Card key={index} product={product} shopView />;
                })
            ) : (
                <Text>No Products</Text>
            )}
            {products ? (
                products.map((product, index) => {
                    return <Card key={index} product={product} shopView />;
                })
            ) : (
                <Text>No Products</Text>
            )}
            </View>
        </ScrollView></View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 270,
    },
    wrapper: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ProductsView;
