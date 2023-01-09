import { useNavigation } from "@react-navigation/native";
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

const Card = ({ product }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.tag}>
                {product?.tag ? product.tag : "Free shipping"}
            </Text>
            <Image source={product.image} style={styles.productImage} />
            <TouchableOpacity
                onPress={() => navigation.navigate('Product', { screen: 'Product', params: {product} })}
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
        width: 160,
        marginRight: 16,
        backgroundColor: "rgba(207, 207, 207, 0.2)",
        borderRadius: 20,
    },
    productImage: {
        width: 110,
        height: 70,
        resizeMode: "contain",
        alignSelf: "center",
    },
    tag: {
        backgroundColor: "#FFF",
        color: "#FF5500",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        alignSelf: "flex-start",
        marginVertical: 10,
        marginLeft: 10,
    },
    title: {
        color: "#343A40",
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 2,
        marginLeft: 10,
    },
    price: {
        color: "#343A40",
        fontWeight: '700',
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 10,
    },
});

export default Card;
