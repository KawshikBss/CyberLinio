import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = ({route}) => {
    const {product} = route.params.params;
    const navigation = useNavigation();
    const [amount, setAmount] = useState(1);
    const [currentVariant, setCurrentVariant] = useState(0);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.headerBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Feather name="chevron-left" style={styles.headerBtnText} />
                </TouchableOpacity>
                <View style={styles.headerInner}>
                    <TouchableOpacity style={styles.headerBtn}>
                        <Feather name="heart" style={styles.headerBtnText} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerBtn}>
                        <Feather name="share-2" style={styles.headerBtnText} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../../assets/ProductS.png")}
                />
            </View>
            <View style={styles.imageListContainer}>
                <View style={styles.listImageContainer}>
                    <Image
                        style={styles.listImage}
                        source={require("../../assets/ProductS1.png")}
                    />
                </View>
                <View style={styles.listImageContainer}>
                    <Image
                        style={styles.listImage}
                        source={require("../../assets/ProductS2.png")}
                    />
                </View>
                <View style={styles.listImageContainer}>
                    <Image
                        style={styles.listImage}
                        source={require("../../assets/ProductS3.png")}
                    />
                </View>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.wrapperHead}>
                    <Text style={styles.wrapperHeadText}>Free Shipping</Text>
                    <View style={styles.rating}>
                        <FontAwesome name="star" style={styles.ratingIcon} />
                        <Text style={styles.ratingText}>4.8</Text>
                    </View>
                </View>
                <Text style={styles.title}>
                    {product?.title ? product.title : "Product Title"}
                </Text>
                <Text style={styles.description}>
                    {product?.description
                        ? product.description
                        : "Product Description"}
                </Text>
                <View style={styles.infoWrapper}>
                    <Text style={styles.price}>
                        $ {product?.price ? product.price : "0"}
                    </Text>
                    {product?.variants ? (
                        <View style={styles.variantContainer}>
                            {product.variants.map((variant, index) => {
                                return (
                                    <TouchableOpacity
                                    key={index}
                                        style={
                                            currentVariant === index
                                                ? styles.variantBtnActive
                                                : styles.variantBtn
                                        }
                                        onPress={() => setCurrentVariant(index)}
                                    >
                                        <View
                                            style={{
                                                ...styles.variant,
                                                backgroundColor: variant,
                                            }}
                                        />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    ) : (
                        ""
                    )}
                </View>
                <View style={styles.buyWrapper}>
                    <View style={styles.amount}>
                        <TouchableOpacity style={styles.amountBtn}>
                            <Text style={styles.amountBtnText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.amountText}>{amount}</Text>
                        <TouchableOpacity style={styles.amountBtn}>
                            <Text style={styles.amountBtnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.buyBtn}>
                        <Text style={styles.buyBtnText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E5E5",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 16,
    },
    headerInner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerBtn: {
        backgroundColor: "#FFF",
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
        color: "#FF5500",
        fontSize: 24,
    },
    image: {},
    imageContainer: {
        backgroundColor: "#FFF",
        borderRadius: 20,
        height: 245,
        width: 245,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 34,
    },
    imageListContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 65,
        marginTop: 45,
        marginBottom: 30,
    },
    listImage: {
        width: 40,
        height: 40,
        resizeMode: "cover",
    },
    listImageContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#FFF",
        padding: 12,
    },
    wrapper: {
        backgroundColor: "#FFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
        paddingBottom: 25,
    },
    wrapperHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    wrapperHeadText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#909090",
    },
    rating: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    ratingIcon: {
        color: "#E6BB66",
        fontSize: 18,
    },
    ratingText: {
        color: "#3F4343",
        fontSize: 18,
    },
    title: {
        color: "#343A40",
        fontSize: 24,
        fontWeight: "600",
        marginTop: 18,
        marginBottom: 14,
    },
    description: {
        color: "#909090",
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 22,
    },
    infoWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 36,
    },
    price: {
        color: "#FF5500",
        fontSize: 20,
        fontWeight: "600",
    },
    variantContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    variant: {
        width: 24,
        height: 24,
        borderRadius: 50,
    },
    variantBtn: {
        marginLeft: 10,
    },
    variantBtnActive: {
        borderRadius: 50,
        padding: 2,
        borderWidth: 1,
        marginLeft: 10,
    },
    buyWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buyBtn: {
        backgroundColor: "#FF5500",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 55,
        paddingVertical: 10,
        borderRadius: 50,
    },
    buyBtnText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "600",
    },
    amount: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#C4C4C4",
        borderWidth: 1,
        borderRadius: 20,
    },
    amountText: {
        color: "#909090",
        marginHorizontal: 20,
        marginVertical: 6,
        fontSize: 20,
        fontWeight: "500",
    },
    amountBtn: {
        marginHorizontal: 10,
    },
    amountBtnText: {
        color: "#909090",
        fontSize: 20,
        fontWeight: "500",
    },
});

export default ProductScreen;
