import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import ProfileUser from "../components/ProfileUser";
import ProfileSection from "../components/ProfileSection";
import ProfileSlider from "../components/ProfileSlider";
import { UserContext } from "../services/AuthContext";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
    const [extended, setExtended] = useState(false);
    const toggle = () => {
        setExtended((curr) => {
            return !curr;
        });
    };
    const { authUser, isSignedIn } = useContext(UserContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {isSignedIn ? (
                <ProfileUser user={authUser} extended={extended} toggle={toggle} />
            ) : (
                <View style={styles.authWrapper}>
                    <TouchableOpacity style={styles.authBtn} onPress={() => {navigation.navigate('Login')}}>
                        <Text style={styles.authBtnText}>Log In</Text>
                    </TouchableOpacity>
                    <Text style={styles.authText}>OR</Text>
                    <TouchableOpacity style={styles.authBtn} onPress={() => {navigation.navigate('Signup')}}>
                        <Text style={styles.authBtnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            )}
            {isSignedIn && !extended ? <ProfileSlider /> : ""}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#8D72E1",
        flexDirection: "column",
    },
    authWrapper: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    authBtn: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    authBtnText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#8D9EFF",
        backgroundColor: "#6C4AB6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    authText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#6C4AB6",
    }
});

export default ProfileScreen;
