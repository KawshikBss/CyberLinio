import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ForgotPasswordModal from '../components/ForgotPasswordModal';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({}) => {
    const navigation = useNavigation();
    const [showForgot, setShowForgot] = useState(false);
    const toggleShowForgot = () => {setShowForgot(curr => {return !curr;})}
  return (
    <View style={styles.container}>
        <ForgotPasswordModal visible={showForgot} toggle={toggleShowForgot} />
      <View style={styles.inputWrapper}>
        <View style={styles.inputIcon}>
        <FontAwesome name='user' style={styles.inputIconText} />
        </View>
        <TextInput style={styles.inputField} placeholder='Enter Email / Phone' />
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.inputIcon}>
        <FontAwesome name='lock' style={styles.inputIconText} />
        </View>
        <TextInput style={styles.inputField} placeholder='Enter Password' />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('ShopStack', {screen: 'Home'})}>
        <Text style={styles.loginBtnText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={toggleShowForgot}>
        <Text style={styles.linkText}>Forgot Your Password?</Text>
      </TouchableOpacity>
        
      <TouchableOpacity style={styles.linkWrapper} onPress={() => navigation.navigate('Signup', {screen: 'Signup'})}>
        <Text style={styles.linkText}>Dont have an account?</Text>
        <Text style={styles.signBtnText}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8D72E1',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#8D9EFF',
        borderRadius: 50,
        padding: 10,
        marginVertical: 20,
    },
    inputIcon: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderColor: '#6C4AB6',
        borderWidth: 2,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputIconText: {
        fontSize: 16,
        color: '#6C4AB6',
    },
    inputField: {
        marginHorizontal: 10,
        width: '60%',
        fontSize: 16,
        color: '#6C4AB6',
    },
    loginBtn: {
        marginVertical: 10,
    },
    loginBtnText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#8D9EFF',
        backgroundColor: '#6C4AB6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
    },
    signBtnText: {
        color: '#6C4AB6',
        fontSize: 18,
        fontWeight: '700',
    },
    link: {
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 50,
    },
    linkText: {
        color: '#B9E0FF',
    },
    linkWrapper: {
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 50,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default LoginScreen