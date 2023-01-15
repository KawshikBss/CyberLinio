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

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header />
                <Image
                    style={styles.banner}
                    source={require("../../assets/HomeBanner.gif")}
                />
                {catagories ? (
                    <ScrollView
                        horizontal
                        style={styles.catagoriesContainer}
                        showsHorizontalScrollIndicator={false}
                    >
                        {catagories.map((cat, index) => {
                            return (
                                <TouchableOpacity key={index}>
                                    <Text style={styles.catagory}>{cat}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                ) : (
                    <Text>None</Text>
                )}
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
    catagoriesContainer: {
        marginVertical: 18,
    },
    catagory: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#FCF7FF",
        color: "#6C4AB6",
        marginLeft: 16,
        borderRadius: 20,
    },
});

export default HomeScreen;
