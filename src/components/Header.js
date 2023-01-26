import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.searchWrapper}>
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name="search" style={styles.searchBtnText} />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchInput}
                    placeholder={"What are you looking for?"}
                />
            </View>
            <View style={styles.notificationBtnWrapper}>
                <TouchableOpacity
                    style={styles.notificationBtn}
                    onPress={() => navigation.navigate("Notifications")}
                >
                    <Ionicons
                        name="notifications-outline"
                        style={styles.notificationBtnText}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginHorizontal: 8,
        marginTop: 16,
        marginBottom: 7,
    },
    searchWrapper: {
        flex: 4,
        flexDirection: "row",
        alignItems: "center",
        padding: 24,
        backgroundColor: "#FCF7FF",
        borderRadius: 50,
    },
    searchInput: {
        width: "80%",
        position: "absolute",
        left: 60,
    },
    searchBtn: {
        position: "absolute",
        left: 11,
        alignSelf: "center",
        zIndex: 1,
    },
    searchBtnText: {
        color: "#6C4AB6",
        fontSize: 28,
    },
    notificationBtnWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    notificationBtn: {
        backgroundColor: "#FCF7FF",
        alignItems: "center",
        justifyContent: "center",
        width: 46,
        height: 46,
        borderRadius: 50,
        marginRight: 8,
    },
    notificationBtnText: {
        color: "#6C4AB6",
        fontSize: 28,
    },
});

export default Header;
