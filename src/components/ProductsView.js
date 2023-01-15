import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";

const ProductsView = ({ products }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ProductsView;
