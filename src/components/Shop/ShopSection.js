import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Card from "./Card";

const ShopSection = ({
    header,
    subHeader,
    next,
    items,
    navigation,
    vary = false,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header ? header : "Header"}</Text>
            <ScrollView
                horizontal
                style={styles.itemsContainer}
                showsHorizontalScrollIndicator={false}
            >
                {items ? (
                    items.map((item, index) => {
                        return (
                            <Card
                                key={item.id}
                                product={item}
                                navigation={navigation}
                                backgroundColor={
                                    vary
                                        ? index % 2 === 0
                                            ? "#B2CFD3"
                                            : "#36A1AF"
                                        : "#FCF7FF"
                                }
                            />
                        );
                    })
                ) : (
                    <Text>No Products</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    header: {
        color: "#484554",
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 10,
        marginLeft: 18,
    },
    itemsContainer: {
        marginLeft: 16,
    },
});

export default ShopSection;
