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
import React from "react";

const SplashScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../../assets/SplashImg.jpg")}
            style={styles.container}
            imageStyle={styles.splashImg}
        >
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipBtn}>
                <Text
                    style={styles.skipBtnText}
                    onPress={() => navigation.navigate("HomeTab")}
                >
                    SKIP
                </Text>
            </TouchableOpacity>
            <StatusBar hidden />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    splashImg: {
        borderWidth: 1,
        borderColor: "#000",
        resizeMode: "contain",
    },
    loginBtn: {
        position: "absolute",
        bottom: 60,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    loginBtnText: {
        paddingHorizontal: 120,
        paddingVertical: 10,
        borderRadius: 50,
        backgroundColor: "#FFF",
        color: "#FF5500",
        fontSize: 18,
        fontWeight: "600",
    },
    skipBtn: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    skipBtnText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#FFF",
    },
});

export default SplashScreen;
