import { View, Text, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const CardSkeleton = ({ shopView = false }) => {
    const [leftAnim, setLeftAnim] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            let tmp = leftAnim;
            if (leftAnim <= 100) {
                tmp += 40;
            } else {
                tmp = 0;
            }
            setLeftAnim(tmp);
        }, 1);
    });
    return (
        <View
            style={StyleSheet.flatten([
                styles.container,
                shopView ? { width: 170, margin: 5 } : {},
            ])}
        >
            <View style={[styles.animatedView, { left: leftAnim }]}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 220,
        height: 220,
        borderRadius: 20,
        backgroundColor: "#6C4AB6",
        marginRight: 10,
        position: "relative",
    },
    animatedView: {
        width: 120,
        height: 220,
        backgroundColor: "#8D72E1",
        opacity: 0.2,
        position: "absolute",
        borderRadius: 20,
    },
});

export default CardSkeleton;
