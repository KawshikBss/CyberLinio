import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigation } from "@react-navigation/native";
import BadgeSkeleton from "./BadgeSkeleton";

const CatagorySlider = ({ currentCatagory }) => {
    const navigation = useNavigation();
    const { data, isSuccess, isLoading, isError } = useFetch(
        "categories",
        "products/categories"
    );
    const isCurrentCat = (name) => {
        return currentCatagory ? name === currentCatagory : false;
    };
    const handleCatagory = (name, id) => {
        if (name === currentCatagory) {
            navigation.navigate("ShopStack", { screen: "Shop" });
        } else {
            navigation.navigate("ShopStack", {
                screen: "Shop",
                params: { category_name: name, category_id: id },
            });
        }
    };
    return (
        <ScrollView
            horizontal
            style={styles.catagoriesContainer}
            showsHorizontalScrollIndicator={false}
        >
            {isSuccess && data
                ? data.map((cat, index) => {
                      return (
                          <TouchableOpacity
                              key={index}
                              onPress={() => handleCatagory(cat.name, cat.id)}
                          >
                              <Text
                                  style={StyleSheet.flatten([
                                      styles.catagory,
                                      isCurrentCat(cat.name)
                                          ? styles.catagoryActive
                                          : {},
                                  ])}
                              >
                                  {cat.name}
                              </Text>
                          </TouchableOpacity>
                      );
                  })
                : isLoading
                ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => {
                      return <BadgeSkeleton key={index} />;
                  })
                : ""}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
    catagoryActive: {
        backgroundColor: "#6C4AB6",
        color: "#FCF7FF",
    },
});

export default CatagorySlider;
