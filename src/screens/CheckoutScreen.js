import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import paymentMethods from "../paymentMethods";
import PaymentSection from "../components/PaymentSection";
import { useCart } from "react-use-cart";
import requests from "../services/httpServices";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const CheckoutScreen = () => {
    const navigation = useNavigation();
    const { items, cartTotal, emptyCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState("None");
    const [formData, setFormData] = useState({
        payment_method: paymentMethod,
        payment_method_title: paymentMethod,
        set_paid: true,
        billing: {
            first_name: "",
            last_name: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
            email: "",
            phone: "",
        },
        shipping: {
            first_name: "",
            last_name: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
        },
        line_items: items.map((item) => {
            return { product_id: item.id, quantity: item.quantity };
        }),
        shipping_lines: [
            {
                method_id: "flat_rate",
                method_title: "Flat Rate",
                total: "10.00",
            },
        ],
    });
    const handleFirstName = (value) => {
        setFormData((curr) => {
            return {
                ...curr,
                billing: { ...curr.billing, first_name: value },
                shipping: { ...curr.shipping, first_name: value },
            };
        });
    };
    const handleLastName = (value) => {
        setFormData((curr) => {
            return {
                ...curr,
                billing: { ...curr.billing, last_name: value },
                shipping: { ...curr.shipping, last_name: value },
            };
        });
    };
    const handlePhone = (value) => {
        setFormData((curr) => {
            return { ...curr, billing: { ...curr.billing, phone: value } };
        });
    };
    const handleEmail = (value) => {
        setFormData((curr) => {
            return { ...curr, billing: { ...curr.billing, email: value } };
        });
    };
    const handleAddress = (value) => {
        setFormData((curr) => {
            return {
                ...curr,
                billing: {
                    ...curr.billing,
                    address_1: value,
                    address_2: value,
                    city: value,
                    country: value,
                    state: value,
                    postcode: value,
                },
                shipping: {
                    ...curr.shipping,
                    address_1: value,
                    address_2: value,
                    city: value,
                    country: value,
                    state: value,
                    postcode: value,
                },
            };
        });
    };

    const submitOrder = () => {
        requests
            .post(`orders`, { ...formData })
            .then((res) => {
                console.log(res);
                emptyCart();
                Toast.show({
                    type: 'success',
                    text1: 'Order Successfull',
                });
            })
            .catch((err) => {
                console.log(err);
                Toast.show({
                    type: 'success',
                    text1: 'Unfortunately The Order Was Unsuccessfull',
                });
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Checkout</Text>
                <TouchableOpacity
                    style={styles.headerBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Feather name="chevron-left" style={styles.headerBtnIcon} />
                    <Text style={styles.headerBtnText}>Go Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
                <ScrollView>
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.inputField}
                            placeholder="First Name"
                            placeholderTextColor={styles.inputField.color}
                            onChangeText={(value) => handleFirstName(value)}
                        />
                        <TextInput
                            style={styles.inputField}
                            placeholder="Last Name"
                            placeholderTextColor={styles.inputField.color}
                            onChangeText={(value) => handleLastName(value)}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Phone"
                            placeholderTextColor={styles.inputField.color}
                            onChangeText={(value) => handlePhone(value)}
                        />
                        <TextInput
                            style={styles.inputField}
                            placeholder="Email"
                            placeholderTextColor={styles.inputField.color}
                            onChangeText={(value) => handleEmail(value)}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Shipping Address"
                            placeholderTextColor={styles.inputField.color}
                            onChangeText={(value) => handleAddress(value)}
                        />
                    </View>
                    <View style={styles.paymentWrapper}>
                        {paymentMethods
                            ? paymentMethods.map((item, index) => {
                                  return (
                                      <PaymentSection
                                          key={index}
                                          method={item}
                                          selectMethod={setPaymentMethod}
                                      />
                                  );
                              })
                            : ""}
                    </View>
                </ScrollView>
            </View>

            <View style={styles.statsSection}>
                <Text style={styles.statsText}>Cart Total:</Text>
                <Text style={styles.statsText}>{cartTotal}$</Text>
            </View>
            <View style={styles.statsSection}>
                <Text style={styles.statsText}>Shipping:</Text>
                <Text style={styles.statsText}>10$</Text>
            </View>
            <View style={styles.statsSection}>
                <Text style={styles.statsText}>Total Bill:</Text>
                <Text style={styles.statsText}>{cartTotal + 10}$</Text>
            </View>
            <View style={styles.statsSection}>
                <Text style={styles.statsText}>Selected Payment Method:</Text>
                <Text style={styles.statsText}>{paymentMethod}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutBtn} onPress={submitOrder}>
                <Text style={styles.checkoutBtnText}>Check Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#8D72E1",
        flexDirection: "column",
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
    },
    headerBtn: {
        backgroundColor: "#FCF7FF",
        borderRadius: 50,
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        flexDirection: "row",
        padding: 5,
        paddingRight: 10,
    },
    headerBtnIcon: {
        color: "#6C4AB6",
        fontSize: 24,
    },
    headerBtnText: {
        color: "#6C4AB6",
        fontSize: 16,
    },
    heading: {
        color: "#FCF7FF",
        fontWeight: "700",
        fontSize: 20,
        marginVertical: 10,
    },
    formContainer: {
        height: "70%",
    },
    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    },
    inputField: {
        backgroundColor: "#FCF7FF",
        color: "#6C4AB6",
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        padding: 6,
        width: "40%",
    },
    paymentWrapper: {

    },
    statsSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#FCF7FF",
        borderBottomWidth: 1,
    },
    statsText: {
        fontSize: 16,
        color: "#FCF7FF",
    },
    checkoutBtn: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    checkoutBtnText: {
        fontSize: 18,
        color: "#6C4AB6",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: "#FCF7FF",
    },
});

export default CheckoutScreen;
