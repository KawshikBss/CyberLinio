import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { useCart } from "react-use-cart";

const BuyProductModal = ({ visible, toggle, product, amount, variant }) => {
    const navigation = useNavigation();
    const { addItem } = useCart();
    return (
        <Modal
            isVisible={visible}
            animationIn={"zoomIn"}
            animationOut={"zoomOut"}
            onBackdropPress={toggle}
            onRequestClose={toggle}
            statusBarTranslucent
            deviceHeight={"100%"}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    {product?.title ? product.title : "Product Title"}
                </Text>
                <View style={styles.info}>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.infoText}>Amount X </Text>
                        <Text style={styles.infoText}>
                            {amount ? amount : "0"}
                        </Text>
                    </View>
                    <Text style={styles.infoText}>
                        $ {product?.price ? product.price * amount : "0"}
                    </Text>
                </View>
                <View style={styles.info}>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.infoText}>Selected Variant: </Text>
                        <View
                            style={StyleSheet.flatten([
                                styles.variant,
                                {
                                    backgroundColor: product?.variants
                                        ? product.variants[variant]
                                        : "#FFF",
                                },
                            ])}
                        />
                    </View>
                </View>
                <View style={styles.info}>
                    <TouchableOpacity
                        onPress={toggle}
                        style={StyleSheet.flatten([
                            styles.btn,
                            { backgroundColor: "#8D9EFF" },
                        ])}
                    >
                        <Text style={styles.btnText}>Buy Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            toggle();
                            addItem(product, amount);
                            navigation.navigate("ShopStack", {
                                screen: "Cart",
                            });
                        }}
                        style={StyleSheet.flatten([
                            styles.btn,
                            { backgroundColor: "#8D9EFF" },
                        ])}
                    >
                        <Text style={styles.btnText}>Go To Cart</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        toggle();
                        addItem(product, amount);
                    }}
                    style={StyleSheet.flatten([
                        styles.btn,
                        { backgroundColor: "#B9E0FF" },
                    ])}
                >
                    <Text style={styles.btnText}>Keep Shopping</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "45%",
        width: "90%",
        backgroundColor: "#6C4AB6",
        borderRadius: 50,
        // borderBottomWidth: 2,
        borderRightWidth: 5,
        borderColor: "#8D9EFF",
        marginTop: 100,
        justifyContent: "space-evenly",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
    },
    image: {
        borderRadius: 20,
        height: 240,
        width: 240,
        marginTop: 20,
    },
    title: {
        color: "#B9E0FF",
        fontSize: 20,
        fontWeight: "600",
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
    },
    infoWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    infoText: {
        // fontSize: 16,
        color: "#B9E0FF",
    },
    variant: {
        width: 24,
        height: 24,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: "#B9E0FF",
    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        marginVertical: 10,
    },
    btnText: {
        fontSize: 16,
        color: "#6C4AB6",
    },
});

export default BuyProductModal;
