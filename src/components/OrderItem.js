import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const OrderItem = ({order, handleView}) => {
  return (
    <View style={styles.container}>
        {/* <View style={styles.imageContainer}>
      <Image source={order?.line_items? order?.line_items[0]?.image?.src: ''} style={styles.image} /></View> */}
      <View style={styles.wrapper}>
        <View style={styles.section}>
            <Text style={styles.itemName}>Order Number {order?.id} </Text>
            <Text style={styles.itemPrice}>{order?.total}$</Text>
        </View>
            <Text style={styles.seller}>Seller: {order.seller}</Text>
            <Text style={styles.date}>Ordered At: {order.date_created}</Text>
            <Text style={StyleSheet.flatten([styles.status, order.status === 'completed'? styles.delivered: order.status === 'cancelled'? styles.cancelled: {}])}>{order.status}</Text>
      </View>
            <TouchableOpacity style={styles.viewBtn} onPress={() => handleView(order)}>
                {/* <AntDesign name='eye' style={styles.viewBtnText} /> */}
                <Text style={styles.viewBtnText}>View</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#B9E0FF',
        borderRadius: 5,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 20,
        marginLeft: 45,
        marginRight: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 90,
        position: 'absolute',
        left: -35,
        top: -40,
    },
    wrapper: {
        flex: 4,
        padding: 10,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemName: {
        color: '#6C4AB6',
        fontSize: 16,
        fontWeight: '700',
    },
    itemAmount: {
        color: '#8D72E1',
        fontSize: 16,
    },
    itemPrice: {
        color: '#6C4AB6',
        fontSize: 16,
    },
    seller: {
        color: '#8D72E1',
        fontSize: 12,
    },
    date: {
        color: '#8D72E1',
        fontSize: 12,
    },
    status: {
        color: '#B9E0FF',
        backgroundColor: '#8D72E1',
        borderRadius: 10,
        padding: 5,
        width: '40%',
        textAlign: 'center',
        fontSize: 12,
    },
    delivered: {
        backgroundColor: '#8D9EFF',
    },
    cancelled: {
        backgroundColor: '#6C4AB6',
    },
    viewBtn: {
        padding: 2,
        paddingVertical: 1,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#6C4AB6',
    },
    viewBtnText: {
        color: '#6C4AB6',
        // fontSize: 20,
        fontWeight: '700',
    },
});

export default OrderItem