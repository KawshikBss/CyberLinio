import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const CartItem = ({ item, updateItemQuantity, removeItem, vary = false }) => {
    const navigation = useNavigation();
    const goToItem = () => {
        navigation.navigate("Product", {
            params: { product: item },
        });
    };
    const [amount, setAmount] = useState(1);
    const changeAmount = (number) => {
        setAmount((curr) => {
            if (amount + number >= 0) return curr + number;
            return curr;
        });
    };
    const removeFromCart = () => {
        removeItem(item.id);
        Toast.show({
            type: "success",
            text1: item.title,
            text2: "Has been removed from your cart",
        })
    };
    useEffect(() => {
        updateItemQuantity(item.id, amount);
    }, [amount]);
    return (
        <View style={styles.container}>
            <View
                style={StyleSheet.flatten([
                    styles.imageWrapper,
                    {
                        backgroundColor: vary
                            ? "#6C4AB6"
                            : styles.imageWrapper.backgroundColor,
                    },
                ])}
            >
                <TouchableOpacity
                    style={styles.imageBackGround}
                    onPress={goToItem}
                >
                    <Image
                        source={{ uri: item.thumbnail }}
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.headerBtn}
                        onPress={removeFromCart}
                    >
                        <FontAwesome
                            name="trash"
                            style={styles.headerBtnIcon}
                        />
                    </TouchableOpacity>
                    <View style={styles.amount}>
                        <TouchableOpacity
                            style={styles.amountBtn}
                            onPress={() => changeAmount(-1)}
                        >
                            <Text style={styles.amountBtnText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.amountText}>{amount}</Text>
                        <TouchableOpacity
                            style={styles.amountBtn}
                            onPress={() => changeAmount(1)}
                        >
                            <Text style={styles.amountBtnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.infoWrapper}>
                    <TouchableOpacity onPress={goToItem}>
                        <Text style={styles.title}>
                            {item?.title ? item.title : "Title"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.price}>
                        ${item?.price ? item.price * amount : "0"}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#B9E0FF",
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomWidth: 2,
        borderRightWidth: 3,
        borderColor: "#6C4AB6",
        borderTopRightRadius: 10,
        padding: 10,
        paddingLeft: 0,
        margin: 10,
    },
    imageWrapper: {
        width: "40%",
        height: 50,
        backgroundColor: "#8D9EFF",
        alignItems: "center",
    },
    imageBackGround: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#FCF7FF",
        padding: 5,
        position: "absolute",
        right: -15,
        top: -38,
        alignSelf: "center",
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderColor: "#8D9EFF",
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        borderRadius: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerBtn: {},
    headerBtnIcon: {
        color: "#6C4AB6",
        marginHorizontal: 16,
        marginVertical: 6,
        fontSize: 20,
        fontWeight: "500",
    },
    headerBtnText: {},
    wrapper: {
        width: "50%",
    },
    infoWrapper: {},
    title: {
        color: "#6C4AB6",
        fontSize: 16,
        fontWeight: "700",
    },
    price: {
        color: "#8D72E1",
        // fontSize: 20,
    },
    amount: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#6C4AB6",
        borderWidth: 1,
        borderRadius: 20,
    },
    amountText: {
        color: "#6C4AB6",
        marginHorizontal: 5,
        marginVertical: 3,
        // fontSize: 16,
        fontWeight: "500",
    },
    amountBtn: {
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    amountBtnText: {
        color: "#6C4AB6",
        fontSize: 16,
        fontWeight: "500",
    },
});

export default CartItem;
