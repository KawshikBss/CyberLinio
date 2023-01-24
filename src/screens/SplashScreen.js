import {
    View,
    Text,
    StyleSheet,
    Button,
    ImageBackground,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = ({  }) => {
    const navigation = useNavigation();
    return (
        <LinearGradient
        colors={['#B9E0FF', '#8D9EFF']}
            style={styles.container}
        >
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login', {screen: 'Login'})}>
                <Text style={styles.loginBtnText}>LOG IN</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <TouchableOpacity style={styles.regBtn} onPress={() => navigation.navigate('Signup', {screen: 'Signup'})}>
                <Text style={styles.regBtnText}>REGISTER NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipBtn}
                    onPress={() => navigation.navigate("ShopStack")}>
                <Text
                    style={styles.skipBtnText}
                >
                    SKIP
                </Text>
            </TouchableOpacity>
            <StatusBar hidden />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },
    splashImg: {
        borderWidth: 1,
        borderColor: "#000",
        resizeMode: "contain",
    },
    loginBtn: {
        // position: "absolute",
        // bottom: 60,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
    },
    loginBtnText: {
        paddingHorizontal: 120,
        paddingVertical: 10,
        borderRadius: 50,
        backgroundColor: "#6C4AB6",
        color: "#B9E0FF",
        fontSize: 18,
        fontWeight: "600",
    },
    orText: {
        fontSize: 16,
        color: '#FFF',
    },
    regBtn: {
        // position: "absolute",
        // bottom: 60,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
    },
    regBtnText: {
        paddingHorizontal: 80,
        paddingVertical: 10,
        borderRadius: 50,
        backgroundColor: "#8D72E1",
        color: "#B9E0FF",
        fontSize: 18,
        fontWeight: "600",
    },
    skipBtn: {
        // position: "absolute",
        // bottom: 20,
        // right: 20,
        alignSelf: 'flex-end',
    },
    skipBtnText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#FFF",
    },
});

export default SplashScreen;
