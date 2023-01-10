import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import products from "../products";
import ShopSection from "../components/Shop/ShopSection";
import catagories from "../catagories";

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <Image
                style={styles.banner}
                source={require("../../assets/ShopBanner.png")}
            />
            {catagories ? (
                <ScrollView horizontal style={styles.catagoriesContainer} showsHorizontalScrollIndicator={false}>
                    {catagories.map((cat, index) => {
                        return (
                            <Text style={styles.catagory} key={index}>
                                {cat}
                            </Text>
                        );
                    })}
                </ScrollView>
            ) : (
                <Text>None</Text>
            )}
            <ShopSection header={"Hot sales"} items={products.sale} />
            <ShopSection
                header={"Recently Viewed"}
                items={products.new}
                vary
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#F7F6F4",
        flexDirection: "column",
        marginBottom: 60,
    },
    banner: {
        width: 350,
        height: 170,
        resizeMode: "cover",
        alignSelf: "center",
    },
    catagoriesContainer: {
      marginVertical: 18,
    },
    catagory: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: '#FFF',
      color: '#343A40',
      marginLeft: 16,
      borderRadius: 20,
    },
});

export default HomeScreen;
