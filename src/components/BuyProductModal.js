import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BuyProductModal = ({ visible, toggle, product, amount, variant }) => {
    const navigation = useNavigation();
    return (
        <Modal
            visible={visible}
            onRequestClose={toggle}
            transparent={true}
            animationType={"slide"}
        >
            <View style={styles.container}>
                <Image style={styles.image} source={product.images[0]} />
                <Text style={styles.title}>
                    {product?.title ? product.title : "Product Title"}
                </Text>
                <View style={styles.info}>
                  <View style={styles.infoWrapper}>
                    <Text style={styles.infoText}>Amount X </Text>
                    <Text style={styles.infoText}>
                        {amount ? amount : "0"}
                    </Text>
                    </View>
                    <Text style={styles.infoText}>
                        $ {product?.price ? product.price * amount : "0"}
                    </Text>
                </View>
                <View style={styles.info}>
                  <View style={styles.infoWrapper}>
                    <Text style={styles.infoText}>Selected Variant: </Text>
                    <View
                        style={StyleSheet.flatten([
                            styles.variant,
                            { backgroundColor: product?.variants? product.variants[variant]: '#FFF' },
                        ])}
                    />
                    </View>
                </View>
                <View style={styles.info}>
                <TouchableOpacity onPress={toggle} style={StyleSheet.flatten([styles.btn, {backgroundColor: '#8D9EFF'}])}>
                    <Text style={styles.btnText}>Buy Now</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {toggle(); navigation.navigate('HomeTab', {screen: 'Cart'})}} style={StyleSheet.flatten([styles.btn, {backgroundColor: '#8D9EFF'}])}>
                    <Text style={styles.btnText}>Go To Cart</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={toggle} style={StyleSheet.flatten([styles.btn, {backgroundColor: '#6C4AB6'}])}>
                    <Text style={styles.btnText}>Keep Shopping</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "70%",
        width: "80%",
        backgroundColor: "#8D72E1",
        borderRadius: 50,
        borderBottomWidth: 5,
        borderRightWidth: 5,
        borderColor: "#8D9EFF",
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    image: {
        borderRadius: 20,
        height: 240,
        width: 240,
    },
    title: {
        color: "#B9E0FF",
        fontSize: 24,
        fontWeight: "600",
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
    },
    infoWrapper: {
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    },
    infoText: {
        fontSize: 18,
        color: "#B9E0FF",
    },
    variant: {
        width: 24,
        height: 24,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#B9E0FF',
    },
    btn: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 20,
      marginVertical: 10,
    },
    btnText: {
      fontSize: 18,
      color: "#B9E0FF",
    }
});

export default BuyProductModal;