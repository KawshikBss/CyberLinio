import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import paymentMethods from '../paymentMethods';
import PaymentSection from '../components/PaymentSection';

const CheckoutScreen = () => {
    const navigation = useNavigation();
    const [paymentMethod, setPaymentMethod] = useState('None');
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
            <TextInput style={styles.inputField} placeholder='First Name' placeholderTextColor={styles.inputField.color} />
            <TextInput style={styles.inputField} placeholder='Last Name' placeholderTextColor={styles.inputField.color} />
        </View>
        <View style={styles.inputGroup}>
            <TextInput style={styles.inputField} placeholder='Phone' placeholderTextColor={styles.inputField.color} />
            <TextInput style={styles.inputField} placeholder='Email' placeholderTextColor={styles.inputField.color} />
        </View>
        <View style={styles.inputGroup}>
            <TextInput style={styles.inputField} placeholder='Shipping Address' placeholderTextColor={styles.inputField.color} />
        </View>
        <View style={styles.paymentWrapper}>
            {
                paymentMethods?
                    paymentMethods.map((item, index) => {
                        return (
                            <PaymentSection key={index} method={item} selectMethod={setPaymentMethod} />
                        );
                    }): ''
            }
        </View>
    </ScrollView>
      </View>
      
      <View style={styles.statsSection}>
          <Text style={styles.statsText}>Total Bill:</Text>
          <Text style={styles.statsText}>0$</Text>
        </View>
      <View style={styles.statsSection}>
          <Text style={styles.statsText}>Selected Payment Method:</Text>
          <Text style={styles.statsText}>{paymentMethod}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.checkoutBtnText}>Check Out</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

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
        flexDirection: 'row',
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
        color: '#FCF7FF',
        fontWeight: '700',
        fontSize: 20,
        marginVertical: 10,
    },
    formContainer: {
        height: '74%',
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    inputField: {
        backgroundColor: '#FCF7FF',
        color: '#6C4AB6',
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        padding: 6,
        width: '40%',
    },
    statsSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: '#FCF7FF',
      borderBottomWidth: 1,
    },
    statsText: {
      fontSize: 16,
      color: '#FCF7FF',
    },
    checkoutBtn: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkoutBtnText: {
      fontSize: 18,
      color: '#6C4AB6',
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 20,
      backgroundColor: '#FCF7FF',
    }
});

export default CheckoutScreen