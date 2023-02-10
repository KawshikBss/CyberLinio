import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

const OrderModal = ({ visible, toggle, order }) => {
    const navigation = useNavigation();
    return (
        <Modal
            isVisible={visible}
            animationIn={"slideInRight"}
            animationOut={"slideOutLeft"}
            onBackdropPress={toggle}
            onRequestClose={toggle}
            statusBarTranslucent
            deviceHeight={"100%"}
        >
            <View style={styles.container}>
                <Text
                    style={StyleSheet.flatten([
                        styles.status,
                        order.status === "completed"
                            ? styles.delivered
                            : order.status === "cancelled"
                            ? styles.cancelled
                            : {},
                    ])}
                >
                    {order.status}
                </Text>
                <View style={styles.header}>
                    {/* <Image source={order?.line_items[0]?.image?.src} style={styles.image} /> */}
                    <View style={styles.headerInner}>
                        <Text style={styles.id}>ID: {order.order_key}</Text>
                        <Text style={styles.date}>
                            Ordered at : {order.date_created}
                        </Text>
                    </View>
                </View>
                {order?.line_items?.length
                    ? order.line_items.map((item, index) => {
                          return (
                              <View style={styles.section} key={index}>
                                  <Text style={styles.name}>
                                      {item.name.length >= 10
                                          ? item.name.slice(0, 10)
                                          : item.name}
                                  </Text>
                                  <Text style={styles.amount}>
                                      {" "}
                                      X {item.quantity}{" "}
                                  </Text>
                                  <Text style={styles.price}>
                                      {item.price}$
                                  </Text>
                              </View>
                          );
                      })
                    : ""}
                <View style={styles.section}>
                    {order.status === "cancelled" ? (
                        ""
                    ) : (
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>
                                {order.status === "completed"
                                    ? "Return"
                                    : order.status === "processing"
                                    ? "Cancel"
                                    : ""}
                            </Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity style={styles.btn} onPress={toggle}>
                        <Text style={styles.btnText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "45%",
        width: "90%",
        backgroundColor: "#B9E0FF",
        borderRadius: 20,
        borderRightWidth: 5,
        borderColor: "#8D9EFF",
        marginTop: 100,
        justifyContent: "space-evenly",
        // alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        paddingHorizontal: 10,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        // justifyContent: 'flex-start',
        alignItems: "center",
        // paddingHorizontal: 20,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 20,
    },
    headerInner: {
        marginLeft: 10,
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    section: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: {
        color: "#6C4AB6",
        fontWeight: "700",
        marginLeft: 10,
    },
    id: {
        color: "#6C4AB6",
        fontWeight: "700",
        // marginLeft: 10,
        // borderBottomWidth: 1,
        borderColor: "#6C4AB6",
    },
    amount: {
        color: "#8D72E1",
    },
    price: {
        color: "#8D72E1",
    },
    seller: {
        color: "#8D72E1",
    },
    date: {
        color: "#8D72E1",
    },
    status: {
        color: "#B9E0FF",
        backgroundColor: "#8D72E1",
        borderRadius: 10,
        padding: 5,
        // width: '40%',
        textAlign: "center",
        fontSize: 12,
        alignSelf: "flex-end",
        marginRight: 10,
    },
    delivered: {
        backgroundColor: "#8D9EFF",
    },
    cancelled: {
        backgroundColor: "#6C4AB6",
    },
    btn: {
        alignSelf: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: "#8D72E1",
    },
    btnText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#B9E0FF",
    },
});
export default OrderModal;
