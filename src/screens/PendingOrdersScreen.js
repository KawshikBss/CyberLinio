import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import OrderItem from "../components/OrderItem";
import OrderModal from "../components/OrderModal";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import { UserContext } from "../services/AuthContext";
import useFetch from "../hooks/useFetch";

const PendingOrdersScreen = () => {
    const navigation = useNavigation();
    const [showOrder, setShowOrder] = useState(false);
    const toggleOrderModal = (order = {}) => {
        setSelectedOrder(order);
        setShowOrder((curr) => {
            return !curr;
        });
    };
    const [selectedOrder, setSelectedOrder] = useState({});
    const { authUser } = useContext(UserContext);
    const {
        data: orders,
        isSuccess,
        isLoading,
    } = useFetch(
        ["pending-orders"],
        `orders?customer_id=${authUser.id}&status=processing`
    );
    console.log(orders);
    return (
        <SafeAreaView style={styles.container}>
            <OrderModal
                visible={showOrder}
                toggle={toggleOrderModal}
                order={selectedOrder}
            />
            <TouchableOpacity
                style={styles.headerBtn}
                onPress={() => navigation.navigate("Profile")}
            >
                <Feather name="chevron-left" style={styles.headerBtnIcon} />
                <Text style={styles.headerBtnText}>Go Back</Text>
            </TouchableOpacity>
            <View>
                <ScrollView>
                    {isLoading ? (
                        <Text style={styles.headerBtnText}>Loading...</Text>
                    ) : isSuccess && orders ? (
                        orders.map((order, index) => {
                            return (
                                <OrderItem
                                    order={order}
                                    key={index}
                                    handleView={toggleOrderModal}
                                />
                            );
                        })
                    ) : (
                        ""
                    )}
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
    headerBtn: {
        backgroundColor: "#FCF7FF",
        borderRadius: 50,
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginLeft: 10,
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
});

export default PendingOrdersScreen;
