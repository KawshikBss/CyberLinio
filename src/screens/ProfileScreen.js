import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import ProfileUser from "../components/ProfileUser";
import ProfileSection from "../components/ProfileSection";
import ProfileSlider from "../components/ProfileSlider";

const ProfileScreen = () => {
    const [extended, setExtended] = useState(false);
    const toggle = () => {
        setExtended((curr) => {
            return !curr;
        });
    };
    return (
        <SafeAreaView style={styles.container}>
            <ProfileUser extended={extended} toggle={toggle} />
            {!extended ? <ProfileSlider /> : ""}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#8D72E1",
        flexDirection: "column",
    },
});

export default ProfileScreen;
