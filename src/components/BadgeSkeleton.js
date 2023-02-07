import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const BadgeSkeleton = () => {
    const [leftAnim, setLeftAnim] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            let tmp = leftAnim;
            if (leftAnim <= 10) {
                tmp += 20;
            } else {
                tmp = 0;
            }
            setLeftAnim(tmp);
        }, 1);
    });
  return (
    <View style={styles.catagory}>
    <View style={[styles.animatedView, { left: leftAnim }]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    catagory: {
        width: 60,
        height: 35,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#FCF7FF",
        color: "#6C4AB6",
        marginLeft: 16,
        borderRadius: 20,
        position: 'relative'
    },
    animatedView: {
        width: 40,
        height: 35,
        backgroundColor: "#B9E0FF",
        opacity: 0.2,
        position: "absolute",
        borderRadius: 20,
    },
});

export default BadgeSkeleton