import { useNavigation } from "@react-navigation/native";
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const RecentCard = ({
    product,
    backgroundColor = "rgba(77, 10, 142, 0.2)",
}) => {
    const navigation = useNavigation();
    return (
        <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
            <TouchableOpacity style={styles.favBtn}>
                <Feather name="heart" style={styles.favBtnText} />
            </TouchableOpacity>
            <Image source={product.image} style={styles.productImage} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Product", { product })}
            >
                <Text style={styles.title}>
                    {product?.title
                        ? product.title.length < 10
                            ? product.title
                            : `${product.title.slice(0, 10)}...`
                        : "Title"}
                </Text>
            </TouchableOpacity>
            <Text style={styles.price}>
                ${product?.price ? product.price : "0"}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 190,
        marginRight: 16,
        borderRadius: 20,
        alignItems: "center",
    },
    productImage: {
        width: 130,
        height: 90,
        resizeMode: "contain",
    },
    favBtn: {
        backgroundColor: "#FFF",
        width: 34,
        height: 34,
        borderRadius: 50,
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        marginTop: 10,
    },
    favBtnText: {
        color: "#FF5500",
        fontSize: 16,
    },
    title: {
        color: "#343A40",
        fontWeight: "500",
        fontSize: 18,
        marginVertical: 2,
    },
    price: {
        color: "#343A40",
        fontWeight: "700",
        fontSize: 20,
        marginBottom: 38,
    },
});

export default RecentCard;
