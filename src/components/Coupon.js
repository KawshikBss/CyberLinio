import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Coupon = ({coupon}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(curr => {return !curr});
  };
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Ionicons style={styles.userImg} name='gift' />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.userName}>Code: {coupon.code}</Text>
        <Text style={styles.desc}>Valid Till: {coupon.validity}</Text>
      </View>
      <TouchableOpacity style={styles.copyBtn} onPress={handleCopy}>
        <FontAwesome5 style={StyleSheet.flatten([styles.copyBtnIcon, copied? styles.copyBtnIconActive: {}])} name='copy' />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#FCF7FF',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userWrapper: {
        width: '20%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#6C4AB6',
        padding: 5,
    },
    userImg: {
        fontSize: 40,
        color: '#6C4AB6'
    },
    wrapper: {
        width: '60%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginLeft: 5,
    },
    userName: {
        color: '#6C4AB6',
        fontWeight: '700',
        // fontSize: 16,
    },
    desc: {
        fontSize: 12,
        color: '#8D9EFF',
    },
    copyBtn: {
      // marginRight: 20,
      height: 50,
      width: 50,
      borderRadius: 50,
      backgroundColor: '#6C4AB6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    copyBtnIcon: {
      fontSize: 26,
      color: '#FCF7FF',
    },
    copyBtnIconActive: {
      color: '#B9E0FF',
    }
});

export default Coupon