import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const WishItem = ({ item }) => {
    const navigation = useNavigation();
    const goToItem = (item) => {
        // console.log(item);
        navigation.navigate('Product', {
            params: {product: item}
        })
    }
    const [isFavourite, setIsFavourite] = useState(true);
    const toggleFavourite = () => {
        setIsFavourite((curr) => {
            return !curr;
        });
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => goToItem(item)}>
            <Image style={styles.image} source={item.images[0]} />
            </TouchableOpacity>
            <View style={styles.inner}>
                <Text style={styles.title}>
                    {item.title.length < 15
                        ? item.title
                        : `${item.title.slice(0, 12)}...`}
                </Text>

                <View style={styles.itemsContainer}>
                    {item.catagory
                        ? item.catagory.length > 4
                            ? item.catagory.slice(0, 4).map((item, index) => {
                                  return (
                                      <Text style={styles.item} key={index}>
                                          {item}
                                      </Text>
                                  );
                              })
                            : item.catagory.map((item, index) => {
                                  return (
                                      <Text style={styles.item} key={index}>
                                          {item}
                                      </Text>
                                  );
                              })
                        : ""}
                </View>
                <View
                    style={StyleSheet.flatten([
                        styles.wrapper,
                        { justifyContent: "flex-end" },
                    ])}
                >
                    <Text style={styles.title}>${item.price}</Text>
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>
                            {item.rating ? item.rating : "0.0"}
                        </Text>
                        <AntDesign name="star" style={styles.ratingIcon} />
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <TouchableOpacity style={styles.removeBtn}>
                            <FontAwesome5
                                name="shopping-cart"
                                style={styles.removeBtnIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.removeBtn}
                            onPress={toggleFavourite}
                        >
                            <AntDesign
                                name={isFavourite ? "heart" : "hearto"}
                                style={styles.removeBtnIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#6C4AB6",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    inner: {
        // flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flex: 1,
        // marginLeft: 20,
        paddingHorizontal: 20,
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
        // borderWidth: 1,
        width: "100%",
        // flex: 1,
        // borderWidth: 2,
    },
    title: {
        color: "#B9E0FF",
        fontSize: 18,
        fontWeight: "700",
    },
    price: {
        color: "#B9E0FF",
        fontSize: 16,
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    ratingText: {
        color: "#B9E0FF",
        marginRight: 2,
    },
    ratingIcon: {
        color: "#B9E0FF",
        fontSize: 16,
        marginRight: 2,
    },
    removeBtn: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#B9E0FF",
        padding: 5,
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginLeft: 10,
    },
    removeBtnIcon: {
        color: "#B9E0FF",
        fontSize: 14,
    },
    item: {
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 10,
        // backgroundColor: "#B9E0FF",
        borderColor: "#B9E0FF",
        borderWidth: 1,
        color: "#B9E0FF",
        textAlign: "center",
        margin: 3,
        fontSize: 10,
    },
    itemsContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
    },
});

export default WishItem;
