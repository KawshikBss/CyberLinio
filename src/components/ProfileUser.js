import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import users from "../users";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const ProfileUser = ({ user = users[0], extended, toggle }) => {
    const [formData, setFormData] = useState({
        name: user?.name ? user?.name : "",
        phone: user?.phone ? user?.phone : "",
        email: user?.email ? user?.email : "",
        location: user?.location ? user?.location : "",
    });
    const handleFormName = (value) => {
        setFormData((curr) => {
            return {
                ...curr,
                name: value,
            };
        });
    };
    const handleFormPhone = (value) => {
        setFormData((curr) => {
            return {
                ...curr,
                phone: value,
            };
        });
    };
    const handleFormEmail = (value) => {
        setFormData((curr) => {
            return {
                ...curr,
                email: value,
            };
        });
    };
    const handleFormLocation = (value) => {
        setFormData((curr) => {
            return {
                ...curr,
                location: value,
            };
        });
    };
    return (
        <LinearGradient
            colors={["#8D9EFF", "#B9E0FF"]}
            style={StyleSheet.flatten([
                styles.container,
                { flex: extended ? 4 : styles.container.flex, marginBottom: extended? 150: styles.container.marginBottom },
            ])}
        >
            <View
                style={StyleSheet.flatten([
                    styles.inner,
                    {
                        flexDirection: extended
                            ? "column"
                            : styles.inner.flexDirection,
                    },
                ])}
            >
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={user.image} />
                </View>
                <View
                    style={StyleSheet.flatten([
                        styles.wrapper,
                        {
                            alignItems: extended
                                ? "center"
                                : styles.wrapper.alignItems,
                        },
                    ])}
                >
                    <View style={styles.section}>
                        {extended ? (
                            <TextInput
                                style={styles.sectionHeading}
                                value={formData.name}
                                onChange={(value) => handleFormName(value)}
                            />
                        ) : (
                            <Text style={styles.sectionHeading}>
                                {user?.name ? user?.name : "N/A"}
                            </Text>
                        )}
                    </View>
                    <View style={styles.section}>
                        <MaterialCommunityIcons
                            name="phone"
                            style={styles.sectionIcon}
                        />

                        {extended ? (
                            <TextInput
                                style={styles.sectionInfo}
                                value={formData.phone}
                                onChange={(value) => handleFormPhone(value)}
                            />
                        ) : (
                            <Text style={styles.sectionInfo}>
                                {user?.phone ? user?.phone : "N/A"}
                            </Text>
                        )}
                    </View>
                    <View style={styles.section}>
                        <MaterialCommunityIcons
                            name="email"
                            style={styles.sectionIcon}
                        />
                        {extended ? (
                            <TextInput
                                style={styles.sectionInfo}
                                value={formData.email}
                                onChange={(value) => handleFormEmail(value)}
                            />
                        ) : (
                            <Text style={styles.sectionInfo}>
                                {user?.email ? user?.email : "N/A"}
                            </Text>
                        )}
                    </View>
                    <View style={styles.section}>
                        <MaterialCommunityIcons
                            name="map-marker"
                            style={styles.sectionIcon}
                        />
                        {extended ? (
                            <TextInput
                                style={styles.sectionInfo}
                                value={formData.location}
                                onChange={(value) => handleFormLocation(value)}
                            />
                        ) : (
                            <Text style={styles.sectionInfo}>
                                {user?.location ? user?.location : "N/A"}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.editBtn} onPress={toggle}>
                <MaterialCommunityIcons
                    name="account-edit"
                    style={styles.editBtnIcon}
                />
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    inner: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    imageWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 140,
        width: 140,
        borderRadius: 140,
        borderColor: "#B9E0FF",
        borderWidth: 2,
    },
    wrapper: {
        flex: 1.3,
        marginRight: 10,
    },
    section: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    sectionIcon: {
        color: "#B9E0FF",
        backgroundColor: "#6C4AB6",
        padding: 8,
        fontSize: 14,
        borderRadius: 50,
    },
    sectionHeading: {
        fontSize: 20,
        color: "#6C4AB6",
        fontWeight: "700",
    },
    sectionInfo: {
        color: "#6C4AB6",
        marginLeft: 10,
    },
    editBtn: {
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: "#6C4AB6",
        backgroundColor: "#8D9EFF",
        position: "absolute",
        bottom: -30,
    },
    editBtnIcon: {
        color: "#6C4AB6",
        fontSize: 30,
    },
});

export default ProfileUser;
