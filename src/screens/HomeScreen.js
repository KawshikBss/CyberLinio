import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";
// import products from "../products";
import ProductsSlider from "../components/ProductsSlider";
import catagories from "../catagories";
import CatagorySlider from "../components/CatagorySlider";
import useFetch from "../hooks/useFetch";

const HomeScreen = () => {
    const {
        data: products,
        isLoading,
        isError,
        isSuccess,
    } = useFetch("products-home", "products");
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header />
                <Image
                    style={styles.banner}
                    source={require("../../assets/HomeBanner.gif")}
                />
                <CatagorySlider />
                <ProductsSlider
                    header={"Hot sales"}
                    isLoading={isLoading}
                    isSuccess={isSuccess}
                    items={products ? products.slice(0, 10) : []}
                />
                <ProductsSlider
                    header={"Recently Viewed"}
                    isLoading={isLoading}
                    isSuccess={isSuccess}
                    items={products ? products : []}
                    finalSection
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#8D72E1",
        flexDirection: "column",
    },
    banner: {
        width: 360,
        height: 180,
        resizeMode: "cover",
        alignSelf: "center",
    },
});

export default HomeScreen;
