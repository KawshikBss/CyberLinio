import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Review from "./Review";

const ProductReviews = ({ reviews }) => {
    const [ratings, setRatings] = useState([false, false, false, false, false]);
    const selectRating = (index = 0) => {
        setRatings(curr => {
            return (
                curr.map((item, i) => {
                    return i <= index;
                })
            )
        });
        console.log(ratings);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Reviews</Text>
            <View style={styles.addInputGroup}>
                <TextInput
                    style={styles.addInput}
                    placeholder="Leave A Review"
                />
                <TouchableOpacity style={styles.addBtn}>
                    <MaterialIcons
                        name="rate-review"
                        style={styles.addBtnText}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.ratingBtnContainer}>
                {ratings.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => selectRating(index)}>
                            <AntDesign
                                name="star"
                                style={StyleSheet.flatten([styles.ratingBtnText, item? styles.ratingBtnActive: {}])}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View
                style={styles.reviewsContainer}>
            <ScrollView
                nestedScrollEnabled
                contentContainerStyle={styles.reviewItems}
            >
                {
                    reviews?
                    reviews.map((item, index) => {
                        return (
                            <Review item={item} key={index} />
                        );
                    }): (
                        <Text>No Reviews</Text>
                    )
                }
            </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 20,
    },
    heading: {
        fontSize: 16,
        color: "#6C4AB6",
        fontWeight: "700",
    },
    addInputGroup: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    addInput: {
        width: "50%",
        color: "#6C4AB6",
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#6C4AB6",
        marginHorizontal: 10,
    },
    addBtn: {
        width: 40,
        height: 30,
        borderRadius: 40,
        backgroundColor: "#6C4AB6",
        alignItems: "center",
        justifyContent: "center",
    },
    addBtnText: {
        color: "#B9E0FF",
        fontSize: 18,
    },
    ratingBtnContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "60%",
    },
    ratingBtnActive: {
        color: '#6C4AB6'
    },
    ratingBtnText: {
        color: "#B9E0FF",
        fontSize: 22,
    },
    reviewsContainer: {
        marginTop: 10,
        alignItems: 'center',
        height: 250,
    },
    reviewItems: {
        alignItems: 'center',
    }
});

export default ProductReviews;
