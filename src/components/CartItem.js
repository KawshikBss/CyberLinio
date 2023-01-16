import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CartItem = ({item, vary=false}) => {
    const [amount, setAmount] = useState(1);
    const changeAmount = (number) => {
        setAmount((curr) => {
            if (amount + number >= 0) return curr + number;
            return curr;
        });
    };
  return (
    <View style={styles.container}>
      <View style={StyleSheet.flatten([styles.imageWrapper, {backgroundColor: vary? '#6C4AB6': styles.imageWrapper.backgroundColor}])}>
        <TouchableOpacity style={styles.imageBackGround}>
            <Image source={item.images[0]} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerBtn} onPress={() => setAmount(1)}>
            <FontAwesome name='trash' style={styles.headerBtnIcon} />
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
            <TouchableOpacity>
            <Text style={styles.title}>{item?.title? item.title: 'Title'}</Text>
            </TouchableOpacity>
            <Text style={styles.price}>${item?.price? (item.price * amount): '0'}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#B9E0FF',
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomWidth: 2,
        borderRightWidth: 3,
        borderColor: '#6C4AB6',
        borderTopRightRadius: 10,
        padding: 10,
        paddingLeft: 0,
        margin: 10,
    },
    imageWrapper: {
        width: '40%',
        height: 50,
        backgroundColor: '#8D9EFF',
        alignItems: 'center',
    },
    imageBackGround: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#FCF7FF",
        padding: 10,
        position: 'absolute',
        right: -15,
        top: -35,
        alignSelf: 'center'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        borderRadius: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerBtn: {},
    headerBtnIcon: {
        color: "#6C4AB6",
        marginHorizontal: 16,
        marginVertical: 6,
        fontSize: 26,
        fontWeight: "500",
    },
    headerBtnText: {},
    wrapper: {
        width: '50%',
    },
    infoWrapper: {},
    title: {
        color: '#6C4AB6',
        fontSize: 20,
        fontWeight: '700',
    },
    price: {
        color: '#8D72E1',
        fontSize: 20,
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
        marginVertical: 6,
        fontSize: 16,
        fontWeight: "500",
    },
    amountBtn: {
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    amountBtnText: {
        color: "#6C4AB6",
        fontSize: 16,
        fontWeight: "500",
    },
});

export default CartItem