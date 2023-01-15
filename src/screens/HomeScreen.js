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

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header />
                <Image
                    style={styles.banner}
                    source={require("../../assets/HomeBanner.gif")}
                />
                <CatagorySlider catagories={catagories} />
                <ProductsSlider header={"Hot sales"} items={products.sale} />
                <ProductsSlider
                    header={"Recently Viewed"}
                    items={products.new}
                    vary
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
