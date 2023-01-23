import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from "react-native-modal"

const ForgotPasswordModal = ({visible, toggle}) => {
  return (
    <Modal
        isVisible={visible}
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
        onBackdropPress={toggle}
        onRequestClose={toggle}
        statusBarTranslucent
        deviceHeight={"100%"}
    >
        <View style={styles.container}>
            <Text style={styles.title}>
                Your region does not support this feature yet. Please try remembering your password.
            </Text>
            <TouchableOpacity
                onPress={toggle}
                style={StyleSheet.flatten([
                    styles.btn,
                    { backgroundColor: "#B9E0FF" },
                ])}
            >
                <Text style={styles.btnText}>I Remember, Continue</Text>
            </TouchableOpacity>
        </View>
    </Modal>
);
}
const styles = StyleSheet.create({
    container: {
        height: "45%",
        width: "90%",
        backgroundColor: "#6C4AB6",
        borderRadius: 50,
        // borderBottomWidth: 2,
        borderRightWidth: 5,
        borderColor: "#8D9EFF",
        marginTop: 100,
        justifyContent: "space-evenly",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        padding: 16,
    },
    title: {
        color: "#B9E0FF",
        fontSize: 20,
        fontWeight: "600",
    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        marginVertical: 10,
    },
    btnText: {
        fontSize: 16,
        color: "#6C4AB6",
    },
});

export default ForgotPasswordModal