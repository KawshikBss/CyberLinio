import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Message = ({message}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image style={styles.userImg} source={message.user_image} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.userName}>{message.username}</Text>
        <Text style={styles.desc}>{message.desc}</Text>
      </View>
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
        width: '30%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#6C4AB6',
        padding: 5,
    },
    userImg: {
        height: 70,
        width: 70,
        borderRadius: 10,
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
});

export default Message