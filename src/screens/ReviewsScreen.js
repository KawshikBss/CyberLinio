import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import reviews from '../reviews';
import Review from '../components/Review';
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

const ReviewsScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
    <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => navigation.goBack()}
    >
        <Feather name="chevron-left" style={styles.headerBtnText} />
    </TouchableOpacity>
    <Text style={styles.heading}>My Reviews</Text></View>
        <View style={styles.reviewsContainer}>
      <ScrollView>
        {
            reviews?
                reviews.map((item, index) => {
                    return (
                        <View style={styles.reviewWrapper} key={index}>
                        <Review item={item} /></View>
                    );
                }): ''
        }
        {
            reviews?
                reviews.map((item, index) => {
                    return (
                        <View style={styles.reviewWrapper} key={index}>
                        <Review item={item} /></View>
                    );
                }): ''
        }
        {
            reviews?
                reviews.map((item, index) => {
                    return (
                        <View style={styles.reviewWrapper} key={index}>
                        <Review item={item} /></View>
                    );
                }): ''
        }
      </ScrollView></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#8D72E1'
    },
    heading: {
      color: '#B9E0FF',
      fontSize: 24,
      fontWeight: '900',
      marginHorizontal: 20,
      marginTop: 20,
      // alignSelf: 'center',
    },
    reviewsContainer: {
        marginBottom: 80,
    },
    reviewWrapper: {
        backgroundColor: '#FCF7FF',
        borderRadius: 10,
        padding: 5,
        margin: 5
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
    },
    headerBtn: {
        backgroundColor: "#FCF7FF",
        width: 44,
        height: 44,
        borderRadius: 50,
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        marginTop: 10,
    },
    headerBtnText: {
        color: "#6C4AB6",
        fontSize: 24,
    },
});

export default ReviewsScreen