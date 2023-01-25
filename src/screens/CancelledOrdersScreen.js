import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import orders from "../orders";
import OrderItem from "../components/OrderItem";
import OrderModal from "../components/OrderModal";

const CancelledOrdersScreen = () => {
    const [showOrder, setShowOrder] = useState(false);
    const toggleOrderModal = (order = {}) => {
        setSelectedOrder(order);
        setShowOrder((curr) => {
            return !curr;
        });
    };
    const [selectedOrder, setSelectedOrder] = useState({});
    return (
        <SafeAreaView style={styles.container}>
            <OrderModal
                visible={showOrder}
                toggle={toggleOrderModal}
                order={selectedOrder}
            />
            <View>
                <ScrollView>
                    {orders
                        ? orders.map((order, index) => {
                              return order.status === "Cancelled" ? (
                                  <OrderItem
                                      order={order}
                                      key={index}
                                      handleView={toggleOrderModal}
                                  />
                              ) : (
                                  ""
                              );
                          })
                        : ""}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#8D72E1",
        flexDirection: "column",
    },
    heading: {
        color: "#B9E0FF",
        fontSize: 22,
        fontWeight: "900",
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#6C4AB6",
        padding: 10,
        borderRadius: 10,
    },
});

export default CancelledOrdersScreen;
