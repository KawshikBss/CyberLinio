import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const Review = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.userWrapper}>
                <Image
                    source={require("../../assets/User.webp")}
                    style={styles.userImg}
                />
                <Text style={styles.userName}>{item.username}</Text>
            </View>
            <Text style={styles.userName}>{'>'}</Text>
            <View style={styles.wrapper}>
                <Text style={styles.reviewDesc}>{item.desc}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>{item.rating}</Text>
                    <AntDesign name="star" style={styles.ratingIcon} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical: 10,
    },
    userWrapper: {
        width: '30%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#8D9EFF',
        padding: 5,
    },
    userImg: {
        height: 50,
        width: 50,
        borderRadius: 10,
    },
    userName: {
        color: '#8D9EFF',
    },
    wrapper: {
        width: '60%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginLeft: 5,
    },
    reviewDesc: {
        fontSize: 12,
        color: '#6C4AB6',
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    ratingIcon: {
        color: '#8D9EFF',
    },
    ratingText: {
        color: '#8D9EFF',
    },
});

export default Review;
