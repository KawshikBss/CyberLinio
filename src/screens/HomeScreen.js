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
import products from "../products";
import ProductsSlider from "../components/ProductsSlider";
import catagories from "../catagories";
import CatagorySlider from "../components/CatagorySlider";
import useFetch from "../hooks/useFetch";

const HomeScreen = () => {
    const {data: products, isLoading, isError, isSuccess} = useFetch('products', 'products');
    // console.log(data);
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header />
                <Image
                    style={styles.banner}
                    source={require("../../assets/HomeBanner.gif")}
                />
                <CatagorySlider catagories={catagories} />
                {
                    isSuccess? (
                <ProductsSlider header={"Hot sales"} items={products.products.slice(0, 10)} />
                    ): ''
                }
                {
                    isSuccess? (
                <ProductsSlider
                    header={"Recently Viewed"}
                    items={products.products.slice(10, 20)}
                    vary
                    finalSection
                />
                ): ''
            }
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
