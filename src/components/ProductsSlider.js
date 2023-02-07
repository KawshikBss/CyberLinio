import { useState } from "react";
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Card from "./Card";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import CardSkeleton from "./CardSkeleton";

const ProductsSlider = ({
    header,
    items,
    isLoading = true,
    isSuccess = false,
    finalSection = false,
}) => {
    const navigation = useNavigation();
    const [currentItem, setCurrentItem] = useState(0);
    const handleScroll = (event) => {
        const xOffset = event.nativeEvent.contentOffset.x;
        let currentSelect = Math.ceil(xOffset / 230);
        if (currentSelect > items.length - 1) currentSelect -= 1;
        setCurrentItem(currentSelect);
    };
    return (
        <View
            style={StyleSheet.flatten([
                styles.container,
                {
                    marginBottom: finalSection
                        ? styles.finalContainer.marginBottom
                        : styles.container.marginBottom,
                },
            ])}
        >
            <Text style={styles.header}>{header ? header : "Header"}</Text>
            <ScrollView
                horizontal
                style={styles.itemsContainer}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                snapToInterval={230}
                snapToAlignment={"center"}
                onScroll={handleScroll}
            >
                {isSuccess && items ? (
                    items.map((item, index) => {
                        return (
                            <Card
                                key={item.id}
                                product={item}
                                focused={index === currentItem}
                            />
                        );
                    })
                ) : isLoading ? (
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => {
                        return <CardSkeleton key={index} />;
                    })
                ) : (
                    <Text>No Products</Text>
                )}
                {isSuccess && items ? (
                    <View style={styles.allBtnWrapper}>
                        <TouchableOpacity
                            style={styles.allBtn}
                            onPress={() =>
                                navigation.navigate("ShopStack", {
                                    screen: "Shop",
                                })
                            }
                        >
                            <Text style={styles.allBtnText}>See All </Text>
                            <AntDesign
                                name="arrowright"
                                style={styles.allBtnIcon}
                            />
                        </TouchableOpacity>
                    </View>
                ) : (
                    ""
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    finalContainer: {
        marginBottom: 100,
    },
    header: {
        color: "#FCF7FF",
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
        marginLeft: 18,
    },
    itemsContainer: {
        marginLeft: 16,
    },
    allBtnWrapper: {
        height: 200,
        width: 140,
        marginHorizontal: 10,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    allBtn: {
        height: 100,
        width: 90,
        borderRadius: 100,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: "#6C4AB6",
        backgroundColor: "#FCF7FF",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.8,
    },
    allBtnText: {
        color: "#6C4AB6",
        fontWeight: "700",
    },
    allBtnIcon: {
        color: "#6C4AB6",
        fontSize: 30,
    },
});

export default ProductsSlider;
