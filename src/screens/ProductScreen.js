import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import BuyProductModal from "../components/BuyProductModal";
import ImagePopModal from "../components/ImagePopModal";
import ProductReviews from "../components/ProductReviews";
import reviews from "../reviews";

const ProductScreen = ({ route }) => {
    const { product } = route.params.params;
    const navigation = useNavigation();
    const [amount, setAmount] = useState(1);
    const changeAmount = (number) => {
        setAmount((curr) => {
            if (amount + number >= 0) return curr + number;
            return curr;
        });
    };
    const [currentImage, setCurrentImage] = useState(0);
    const [currentVariant, setCurrentVariant] = useState(0);
    const [showBuyModal, setShowBuyModal] = useState(false);
    const toggleBuyModal = () => {
        setShowBuyModal(curr => {
            return !curr;
        })
    }
    const [showImageModal, setShowImageModal] = useState(false);
    const toggleImageModal = () => {
        setShowImageModal(curr => {
            return !curr;
        })
    }
    return (
        <ScrollView style={styles.container}>
            <BuyProductModal visible={showBuyModal} toggle={toggleBuyModal} product={product} amount={amount} variant={currentVariant} />
            <ImagePopModal visible={showImageModal} toggle={toggleImageModal} images={product.images} selected={currentImage} />
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.headerBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Feather name="chevron-left" style={styles.headerBtnText} />
                </TouchableOpacity>
                <View style={styles.headerInner}>
                    <TouchableOpacity style={styles.headerBtn}>
                        <Feather name="heart" style={styles.headerBtnText} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerBtn}>
                        <Feather name="share-2" style={styles.headerBtnText} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.imageContainer} onPress={toggleImageModal}>
                <Image
                    style={styles.image}
                    source={{uri: product.images[currentImage].src}}
                />
            </TouchableOpacity>
            <View style={styles.imageListContainer}>
                {product?.images
                    ? product.images.map((image, index) => {
                          return (
                              <TouchableOpacity
                                  key={index}
                                  onPress={() => setCurrentImage(index)}
                              >
                                  <View style={styles.listImageContainer}>
                                      <Image
                                          style={styles.listImage}
                                          source={{uri: image.src}}
                                      />
                                  </View>
                              </TouchableOpacity>
                          );
                      })
                    : ""}
            </View>
            <View style={styles.wrapper}>
                <View style={styles.wrapperHead}>
                    {
                        product?.discountPercentage? (
                            <Text style={styles.wrapperHeadText}>-{product?.discountPercentage}%</Text>
                            ): ''
                    }
                    <View style={styles.rating}>
                        
                        <AntDesign name="star" style={styles.ratingIcon} />
                        <Text style={styles.ratingText}>{product?.average_rating? product.average_rating: '0.0'}</Text>
                    </View>
                </View>
                <Text style={styles.title}>
                    {product?.title ? product.title : "Product Title"}
                </Text>
                <Text style={styles.description}>
                    {product?.description
                        ? product.description
                        : "Product Description"}
                </Text>
                <View style={styles.infoWrapper}>
                    <Text style={styles.price}>
                        $ {product?.price ? product.price : "0"}
                    </Text>
                    {product?.variants ? (
                        <View style={styles.variantContainer}>
                            {product.variants.map((variant, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={
                                            currentVariant === index
                                                ? styles.variantBtnActive
                                                : styles.variantBtn
                                        }
                                        onPress={() => setCurrentVariant(index)}
                                    >
                                        <View
                                            style={
                                                StyleSheet.flatten([styles.variant,
                                                {backgroundColor: variant}])
                                            }
                                        />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    ) : (
                        ""
                    )}
                </View>
                <ProductReviews reviews={reviews} />
                <View style={styles.buyWrapper}>
                    <View style={styles.amount}>
                        <TouchableOpacity
                            style={styles.amountBtn}
                            onPress={() => changeAmount(-1)}
                        >
                            <Text style={styles.amountBtnText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.amountText}>{amount}</Text>
                        <TouchableOpacity
                            style={styles.amountBtn}
                            onPress={() => changeAmount(1)}
                        >
                            <Text style={styles.amountBtnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.buyBtn} onPress={toggleBuyModal}>
                        <Text style={styles.buyBtnText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8D72E1",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 16,
    },
    headerInner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerBtn: {
        backgroundColor: "#FCF7FF",
        width: 44,
        height: 44,
        borderRadius: 50,
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        marginTop: 10,
    },
    headerBtnText: {
        color: "#6C4AB6",
        fontSize: 24,
    },
    image: {
        borderRadius: 20,
        height: 270,
        width: 340,
        resizeMode: 'contain',
    },
    imageContainer: {
        backgroundColor: "#FCF7FF",
        borderRadius: 20,
        height: 230,
        width: 230,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 34,
    },
    imageListContainer: {
        flexDirection: "row",
        // alignItems: 'center',
        justifyContent: "center",
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginTop: 45,
        marginBottom: 30,
    },
    listImage: {
        width: 70,
        height: 70,
        resizeMode: "cover",
        borderRadius: 20,
    },
    listImageContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#FCF7FF",
        padding: 5,
        margin: 5,
    },
    wrapper: {
        backgroundColor: "#FCF7FF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
        paddingBottom: 25,
    },
    wrapperHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    wrapperHeadText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#8D72E1",
    },
    rating: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    ratingIcon: {
        color: "#6C4AB6",
        fontSize: 16,
        marginRight: 5,
    },
    ratingText: {
        color: "#6C4AB6",
        fontSize: 16,
    },
    title: {
        color: "#6C4AB6",
        fontSize: 20,
        fontWeight: "600",
        marginTop: 18,
        marginBottom: 14,
    },
    description: {
        color: "#8D72E1",
        // fontSize: 16,
        fontWeight: "600",
        marginBottom: 22,
    },
    infoWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginBottom: 36,
    },
    price: {
        color: "#6C4AB6",
        fontSize: 18,
        fontWeight: "600",
    },
    variantContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    variant: {
        width: 24,
        height: 24,
        borderRadius: 50,
    },
    variantBtn: {
        marginLeft: 10,
    },
    variantBtnActive: {
        borderRadius: 50,
        padding: 2,
        borderWidth: 1,
        marginLeft: 10,
    },
    buyWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buyBtn: {
        backgroundColor: "#6C4AB6",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 55,
        paddingVertical: 10,
        borderRadius: 50,
        marginLeft: 10,
    },
    buyBtnText: {
        color: "#FCF7FF",
        fontSize: 16,
        fontWeight: "600",
    },
    amount: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#6C4AB6",
        borderWidth: 1,
        borderRadius: 20,
    },
    amountText: {
        color: "#6C4AB6",
        marginHorizontal: 20,
        marginVertical: 6,
        fontSize: 16,
        fontWeight: "500",
    },
    amountBtn: {
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    amountBtnText: {
        color: "#6C4AB6",
        fontSize: 20,
        fontWeight: "500",
    },
});

export default ProductScreen;
