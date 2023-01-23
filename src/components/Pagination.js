import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Pagination = ({ items, selected }) => {
    return (
        <View style={styles.container}>
            {items
                ? items.map((_, index) => {
                      return  (
                          <View key={index} style={index === selected ?styles.selected: styles.bullets} />
                      );
                  })
                : ""}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    bullets: {
        backgroundColor: "#6C4AB6",
        width: 10,
        height: 10,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    selected: {
        backgroundColor: "#8D9EFF",
        width: 14,
        height: 14,
        borderRadius: 14,
        marginHorizontal: 5,
    },
});

export default Pagination;
