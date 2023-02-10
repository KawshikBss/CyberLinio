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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

const ProfileUser = ({ user = users[0], extended, toggle }) => {
    const [userName, setUserName] = useState(user?.username ? user?.username : "");
    const [userPhone, setUserPhone] = useState(user?.phone ? user?.phone : "");
    const [userEmail, setUserEmail] = useState(user?.email ? user?.email : "");
    const [userLocation, setUserLocation] = useState(
        user?.location ? user?.location : ""
    );
    const handleFormName = (value) => {
        setUserName(value);
    };
    const handleFormPhone = (value) => {
        setUserPhone(value);
    };
    const handleFormEmail = (value) => {
        setUserEmail(value);
    };
    const handleFormLocation = (value) => {
        setUserLocation(value);
    };
    const [editFields, setEditFields] = useState({
        name: false,
        phone: false,
        email: false,
        location: false,
    });
    const toggleName = () => {
        setEditFields((curr) => {
            return { ...curr, name: !curr.name };
        });
    };
    const togglePhone = () => {
        setEditFields((curr) => {
            return { ...curr, phone: !curr.phone };
        });
    };
    const toggleEmail = () => {
        setEditFields((curr) => {
            return { ...curr, email: !curr.email };
        });
    };
    const toggleLocation = () => {
        setEditFields((curr) => {
            return { ...curr, location: !curr.location };
        });
    };
    return (
        <LinearGradient
            colors={["#8D9EFF", "#B9E0FF"]}
            style={StyleSheet.flatten([
                styles.container,
                {
                    flex: extended ? 4 : styles.container.flex,
                    marginBottom: extended
                        ? 150
                        : styles.container.marginBottom,
                },
            ])}
        >
            {extended ? (
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerBtn} onPress={toggle}>
                        <FontAwesome
                            style={styles.headerBtnIcon}
                            name="angle-left"
                        />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Edit</Text>
                </View>
            ) : (
                ""
            )}
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
                    <Image style={styles.image} source={require('../../assets/User.webp')} />
                </View>
                <View
                    style={StyleSheet.flatten([
                        styles.wrapper,
                        {
                            alignItems: extended
                                ? "flex-start"
                                : styles.wrapper.alignItems,
                        },
                    ])}
                >
                    <View style={styles.section}>
                        {extended ? (
                            <View style={styles.editWrapper}>
                                <FontAwesome
                                    name="user-circle-o"
                                    style={styles.sectionIcon}
                                />
                                <TextInput
                                    style={StyleSheet.flatten([
                                        styles.sectionHeading,
                                        editFields.name
                                            ? styles.editInput
                                            : { marginLeft: 10 },
                                    ])}
                                    value={userName}
                                    onChangeText={(value) =>
                                        handleFormName(value)
                                    }
                                    editable={editFields.name}
                                />
                                <TouchableOpacity
                                    style={styles.editBtn}
                                    onPress={toggleName}
                                >
                                    <Text style={styles.editBtnText}>
                                        {editFields.name ? "Save" : "Edit"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <Text style={StyleSheet.flatten([styles.sectionHeading, styles.sectionShort])}>
                                {user?.username ? user?.username : "N/A"}
                            </Text>
                        )}
                    </View>
                    <View style={styles.section}>
                        <MaterialCommunityIcons
                            name="phone"
                            style={styles.sectionIcon}
                        />

                        {extended ? (
                            <View style={styles.editWrapper}>
                                <TextInput
                                    style={StyleSheet.flatten([
                                        styles.sectionInfo,
                                        editFields.phone
                                            ? styles.editInput
                                            : { marginLeft: 10 },
                                    ])}
                                    value={userPhone}
                                    onChangeText={(value) =>
                                        handleFormPhone(value)
                                    }
                                    editable={editFields.phone}
                                />
                                <TouchableOpacity
                                    style={styles.editBtn}
                                    onPress={togglePhone}
                                >
                                    <Text style={styles.editBtnText}>
                                        {editFields.phone ? "Save" : "Edit"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <Text style={StyleSheet.flatten([styles.sectionInfo, styles.sectionShort])}>
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
                            <View style={styles.editWrapper}>
                                <TextInput
                                    style={StyleSheet.flatten([
                                        styles.sectionInfo,
                                        editFields.email
                                            ? styles.editInput
                                            : { marginLeft: 10 },
                                    ])}
                                    value={userEmail}
                                    onChangeText={(value) =>
                                        handleFormEmail(value)
                                    }
                                    editable={editFields.email}
                                />
                                <TouchableOpacity
                                    style={styles.editBtn}
                                    onPress={toggleEmail}
                                >
                                    <Text style={styles.editBtnText}>
                                        {editFields.email ? "Save" : "Edit"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <Text style={StyleSheet.flatten([styles.sectionInfo, styles.sectionShort])}>
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
                            <View style={styles.editWrapper}>
                                <TextInput
                                    style={StyleSheet.flatten([
                                        styles.sectionInfo,
                                        editFields.location
                                            ? styles.editInput
                                            : { marginLeft: 10 },
                                    ])}
                                    value={userLocation}
                                    onChangeText={(value) =>
                                        handleFormLocation(value)
                                    }
                                    editable={editFields.location}
                                />
                                <TouchableOpacity
                                    style={styles.editBtn}
                                    onPress={toggleLocation}
                                >
                                    <Text style={styles.editBtnText}>
                                        {editFields.location ? "Save" : "Edit"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <Text style={StyleSheet.flatten([styles.sectionInfo, styles.sectionShort])}>
                                {user?.location ? user?.location : "N/A"}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
            {extended ? (
                <TouchableOpacity style={styles.extendBtn} onPress={toggle}>
                    <MaterialCommunityIcons
                        name="content-save"
                        style={styles.extendBtnIcon}
                    />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.extendBtn} onPress={toggle}>
                    <MaterialCommunityIcons
                        name="account-edit"
                        style={styles.extendBtnIcon}
                    />
                </TouchableOpacity>
            )}
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 20,
    },
    headerBtn: {
        marginRight: 10,
    },
    headerBtnIcon: {
        fontSize: 28,
        padding: 10,
        color: "#6C4AB6",
    },
    heading: {
        alignSelf: "flex-start",
        margin: 10,
        fontSize: 20,
        color: "#6C4AB6",
        fontWeight: "700",
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
        justifyContent: "flex-start",
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
    sectionShort: {
        width: '80%',
    },
    editWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    editInput: {
        color: "#6C4AB6",
        marginLeft: 10,
        // paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#6C4AB6",
    },
    editBtn: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#6C4AB6",
        backgroundColor: "#8D9EFF",
        marginLeft: 10,
    },
    editBtnText: {
        color: "#6C4AB6",
        fontSize: 16,
    },
    editIcon: {
        color: "#6C4AB6",
        fontSize: 30,
        position: "absolute",
        right: -16,
    },
    extendBtn: {
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
    extendBtnIcon: {
        color: "#6C4AB6",
        fontSize: 30,
    },
});

export default ProfileUser;
