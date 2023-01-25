import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Card from "./Card";

const ProductsSlider = ({
    header,
    subHeader,
    next,
    items,
    navigation,
    vary = false,
    finalSection = false
}) => {
    return (
        <View style={StyleSheet.flatten([styles.container, {marginBottom: finalSection? styles.finalContainer.marginBottom: styles.container.marginBottom}])}>
            <Text style={styles.header}>{header ? header : "Header"}</Text>
            <ScrollView
                horizontal
                style={styles.itemsContainer}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                snapToInterval={230}
                snapToAlignment={'center'}
            >
                {items ? (
                    items.map((item, index) => {
                        return (
                            <Card
                                key={item.id}
                                product={item}
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
});

export default ProductsSlider;
