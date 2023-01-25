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
    const [ratings, setRatings] = useState({
        selectedIndex: -1,
        indexes: [false, false, false, false, false],
    });
    const selectRating = (index = 0) => {
        setRatings((curr) => {
            return {
                selectedIndex: curr.selectedIndex === index ? -1 : index,
                indexes: curr.selectedIndex === index ? [false, false, false, false, false] :[
                    ...curr.indexes.map((item, i) => {
                        return i <= index;
                    }),
                ],
            };
        });
        console.log(ratings);
    };
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
                {ratings.indexes.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => selectRating(index)}
                        >
                            <AntDesign
                                name="star"
                                style={StyleSheet.flatten([
                                    styles.ratingBtnText,
                                    item ? styles.ratingBtnActive : {},
                                ])}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View style={styles.reviewsContainer}>
                <ScrollView
                    nestedScrollEnabled
                    contentContainerStyle={styles.reviewItems}
                >
                    {reviews ? (
                        reviews.map((item, index) => {
                            return <Review item={item} key={index} />;
                        })
                    ) : (
                        <Text>No Reviews</Text>
                    )}
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
        fontSize: 18,
        color: "#6C4AB6",
        fontWeight: "700",
        alignSelf: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#6C4AB6',
        marginLeft: 10,
    },
    addInputGroup: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        alignSelf: 'flex-start',
    },
    addInput: {
        width: "70%",
        color: "#6C4AB6",
        paddingVertical: 2,
        paddingHorizontal: 20,
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
        color: "#6C4AB6",
    },
    ratingBtnText: {
        color: "#B9E0FF",
        fontSize: 22,
    },
    reviewsContainer: {
        marginTop: 10,
        alignItems: "flex-start",
        height: 250,
    },
    reviewItems: {
        alignItems: "center",
    },
});

export default ProductReviews;
