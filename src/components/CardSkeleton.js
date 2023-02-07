import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CardSkeleton = ({ shopView = false }) => {
    return (
        <View
            style={StyleSheet.flatten([
                styles.container,
                shopView ? { width: 170, margin: 5 } : {},
            ])}
        ></View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 220,
        height: 220,
        borderRadius: 20,
        backgroundColor: "#6C4AB6",
        marginRight: 10,
    },
});

export default CardSkeleton;
