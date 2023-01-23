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

const Card = ({ product, shopView=false }) => {
    const navigation = useNavigation();
    return (
        <View style={StyleSheet.flatten([styles.container, shopView? {width: 170, margin: 5}: {marginRight: 10}])}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Product", {
                        screen: "Product",
                        params: { product: product },
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
                    <Text style={{...styles.tag, backgroundColor: product.new? '#8D72E1': styles.tag.backgroundColor, color: product.new? '#B9E0FF': styles.tag.color}}>
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
                    {shopView? '': (<View style={styles.rating}>
                        <Text style={styles.ratingText}>
                            {product.rating ? product.rating : "0.0"}
                        </Text>
                        <AntDesign name="star" style={styles.ratingIcon} />
                    </View>)}
                </View>
                <View style={styles.header}>
                <Text style={styles.price}>
                    {product.price ? product.price : "Product Price"}$
                </Text>
                    {shopView? (<View style={styles.rating}>
                        <Text style={styles.ratingText}>
                            {product.rating ? product.rating : "0.0"}
                        </Text>
                        <AntDesign name="star" style={styles.ratingIcon} />
                    </View>): ''}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 220,
        height: 220,
        borderRadius: 20,
        backgroundColor: "#6C4AB6",
    },
    productImage: {
        width: "100%",
        height: 140,
        resizeMode: "cover",
        alignSelf: "center",
    },
    tag: {
        backgroundColor: "#FCF7FF",
        color: "#8D72E1",
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
        color: "#8D72E1",
    },
    wrapper: {
        height: "100%",
        padding: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    ratingText: {
        color: "#B9E0FF",
        // fontSize: 16,
        marginRight: 2,
    },
    ratingIcon: {
        color: "#B9E0FF",
        fontSize: 16,
        marginRight: 2,
    },
    title: {
        color: "#B9E0FF",
        // fontSize: 16,
        fontWeight: '900',
    },
    priceContainer: {
        flexDirection: "row",
    },
    price: {
        color: "#B9E0FF",
        // fontSize: 16,
    },
});

export default Card;
