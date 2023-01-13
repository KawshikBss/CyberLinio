import { useNavigation } from "@react-navigation/native";
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";

const Card = ({ product, backgroundColor = "#FCF7FF" }) => {
    const navigation = useNavigation();
    return (
        <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Product", {
                        screen: "Product",
                        params: { product },
                    })
                }
            >
                <ImageBackground
                    source={product.images[0]}
                    style={styles.productImage}
                    imageStyle={{
                        borderRadius: 20,
                        shadowColor: "#232323",
                        shadowRadius: 10,
                    }}
                >
                    <Text style={styles.tag}>
                        {product?.tag ? product.tag : "-20%"}
                    </Text>
                    <TouchableOpacity
                        style={styles.cartBtn}
                        onPress={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <Fontisto
                            style={styles.cartIcon}
                            name="shopping-basket-add"
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </TouchableOpacity>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Product", {
                                screen: "Product",
                                params: { product },
                            })
                        }
                    >
                        <Text style={styles.title}>
                            {product.title
                                ? product.title.length > 10
                                    ? `${product.title.slice(0, 10)}...`
                                    : product.title
                                : "Product Title"}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>
                            {product.rating ? product.rating : "0.0"}
                        </Text>
                        <AntDesign name="star" style={styles.ratingIcon} />
                    </View>
                </View>
                <Text style={styles.price}>
                    {product.price ? product.price : "Product Price"}$
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: "#FCF7FF",
    },
    productImage: {
        width: "100%",
        height: 140,
        resizeMode: "cover",
        alignSelf: "center",
    },
    tag: {
        backgroundColor: "#FCF7FF",
        color: "#6C63FF",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        alignSelf: "flex-start",
        marginTop: 10,
        marginLeft: 5,
    },
    cartBtn: {
        backgroundColor: "#FCF7FF",
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 10,
        right: 10,
    },
    cartIcon: {
        fontSize: 20,
        color: "#6C63FF",
    },
    wrapper: {
        height: "100%",
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    ratingText: {
        color: "#484554",
        fontSize: 16,
        marginRight: 2,
    },
    ratingIcon: {
        color: "#D5CABD",
        fontSize: 18,
        marginRight: 2,
    },
    title: {
        color: "#484554",
        fontSize: 16,
    },
    priceContainer: {
        flexDirection: "row",
    },
    price: {
        color: "#6C63FF",
        fontSize: 16,
    },
    discount: {
        color: "gray",
        fontSize: 18,
        textDecorationLine: "line-through",
    },
});

export default Card;
