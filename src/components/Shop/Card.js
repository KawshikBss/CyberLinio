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

const Card = ({ product, backgroundColor='rgba(207, 207, 207, 0.25)' }) => {
    const navigation = useNavigation();
    return (
        <View style={{...styles.container, backgroundColor: backgroundColor}}>
            <ImageBackground source={product.images[0]} style={styles.productImage} imageStyle={{borderRadius: 20, shadowColor: '#232323', shadowRadius: 10}} >
            <Text style={styles.tag}>
                    {product?.tag ? product.tag : "-20%"}
                </Text>
                <TouchableOpacity style={styles.cartBtn}>
                    <Fontisto
                        style={styles.cartIcon}
                        name="shopping-basket-add"
                    />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Product', { screen: 'Product', params: {product} })}>
                <Text style={styles.title}>{product.title? product.title: 'Product Title'}</Text></TouchableOpacity>
                <View style={styles.rating}>
                <Text style={styles.ratingText}>{product.rating? product.rating: '0.0'}
                </Text>
                <AntDesign name="star" style={styles.ratingText} /></View>
                </View>
                <Text style={styles.price}>{product.price? product.price: 'Product Price'}$</Text>
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
        backgroundColor: 'rgba(207, 207, 207, 0.25)'
    },
    productImage: {
        width: '100%',
        height: 140,
        resizeMode: "cover",
        alignSelf: 'center',
    },
    tag: {
        backgroundColor: "#FFF",
        color: "#FF5500",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        alignSelf: "flex-start",
        marginTop: 10,
        marginLeft: 5,
    },
    cartBtn: {
        backgroundColor: "#FFF",
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
        color: "#FF5500",
    },
    wrapper: {
        height: '100%',
        padding: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    rating: {
        flexDirection: 'row'
    },
    ratingText: {
        color: "#FF5500",
        fontSize: 16,
        marginRight: 2,
    },
    title: {
        color: "#343A40",
        fontSize: 16,
    },
    priceContainer: {
        flexDirection: "row",
    },
    price: {
        color: "#FF5500",
        fontSize: 16,
    },
    discount: {
        color: "gray",
        fontSize: 18,
        textDecorationLine: "line-through",
    },
});

export default Card;
