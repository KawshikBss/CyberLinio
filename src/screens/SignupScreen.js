import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import requests from "../services/httpServices";
import { UserContext } from "../services/AuthContext";

const SignupScreen = ({}) => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
    });
    const handleUsername = (value) => {
        let name = value.split(" ");
        let last_name = name.length > 1 ? name[1] : "";
        setFormData((curr) => {
            return {
                ...curr,
                first_name: name[0],
                last_name: last_name,
                username: value,
            };
        });
    };
    const handleEmail = (value) => {
            setFormData((curr) => {
                return {
                    ...curr,
                    email: value,
                };
            });
    };
    const navigation = useNavigation();
    const {signIn} = useContext(UserContext);
    const signUp = () => {
        console.log(formData);
        requests
            .post("customers", {...formData})
            .then((res) => {
                signIn(res);
                navigation.navigate("ShopStack", { screen: "Home" });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <View style={styles.inputIcon}>
                    <FontAwesome name="user" style={styles.inputIconText} />
                </View>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter Username"
                    onChangeText={(value) => handleUsername(value)}
                />
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputIcon}>
                    <Ionicons name="mail" style={styles.inputIconText} />
                </View>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter Email"
                    onChangeText={(value) => handleEmail(value)}
                />
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputIcon}>
                    <FontAwesome
                        name="unlock-alt"
                        style={styles.inputIconText}
                    />
                </View>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter Password"
                />
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputIcon}>
                    <FontAwesome name="lock" style={styles.inputIconText} />
                </View>
                <TextInput
                    style={styles.inputField}
                    placeholder="Confirm Password"
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={signUp}>
                <Text style={styles.loginBtnText}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.linkWrapper}
                onPress={() =>
                    navigation.navigate("Login", { screen: "Login" })
                }
            >
                <Text style={styles.linkText}>Already have an account?</Text>
                <Text style={styles.signBtnText}> Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8D72E1",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#8D9EFF",
        borderRadius: 50,
        padding: 10,
        marginVertical: 20,
    },
    inputIcon: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderColor: "#6C4AB6",
        borderWidth: 2,
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    inputIconText: {
        fontSize: 16,
        color: "#6C4AB6",
    },
    inputField: {
        marginHorizontal: 10,
        width: "60%",
        fontSize: 16,
        color: "#6C4AB6",
    },
    loginBtn: {
        marginVertical: 10,
    },
    loginBtnText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#8D9EFF",
        backgroundColor: "#6C4AB6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
    },
    signBtnText: {
        color: "#6C4AB6",
        fontSize: 18,
        fontWeight: "700",
    },
    link: {
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: 50,
    },
    linkText: {
        color: "#B9E0FF",
    },
    linkWrapper: {
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: 50,
        flexDirection: "row",
        alignItems: "center",
    },
});

export default SignupScreen;
