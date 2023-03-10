import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ProductsView from "../components/ProductsView";
import Header from "../components/Header";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CatagorySlider from "../components/CatagorySlider";
import catagories from "../catagories";
import FilterDrawer from "../components/FilterDrawer";
import useFetch from "../hooks/useFetch";

const ShopScreen = ({ route }) => {
    const category_id = route?.params?.category_id
        ? route?.params?.category_id
        : undefined;
    const category_name = route?.params?.category_name
        ? route?.params?.category_name
        : undefined;
    const searchWord = route?.params?.searchWord
        ? route?.params?.searchWord
        : undefined;
    const {
        data: products,
        isLoading,
        isError,
        isSuccess,
    } = useFetch(
        ["products", searchWord, category_id],
        searchWord
            ? `products?search=${searchWord}`
            : category_id
            ? `products?category=${category_id}`
            : "products"
    );
    const [selections, setSelections] = useState({
        match: false,
        sales: false,
        price: false,
        filter: false,
    });
    const handleSelection = (selection) => {
        setSelections((curr) => {
            if (selection === 0) return { ...curr, match: !curr.match };
            else if (selection === 1) return { ...curr, sales: !curr.sales };
            else if (selection === 2) return { ...curr, price: !curr.price };
            return { ...curr, filter: !curr.filter };
        });
    };
    const [openFilter, setOpenFilter] = useState(false);
    const toggleFilter = () => {
        setOpenFilter((curr) => {
            return !curr;
        });
    };
    return (
        <SafeAreaView style={styles.container}>
            <FilterDrawer visible={openFilter} toggle={toggleFilter} />
            <Header />
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.headerBtn}
                    onPress={() => handleSelection(0)}
                >
                    <FontAwesome
                        name="thumbs-up"
                        style={StyleSheet.flatten([
                            styles.headerBtnIcon,
                            selections.match ? styles.headerBtnActive : {},
                        ])}
                    />
                    <Text
                        style={StyleSheet.flatten([
                            styles.headerBtnText,
                            selections.match ? styles.headerBtnActive : {},
                        ])}
                    >
                        Best Match
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.headerBtn}
                    onPress={() => handleSelection(1)}
                >
                    <FontAwesome
                        name="fire"
                        style={StyleSheet.flatten([
                            styles.headerBtnIcon,
                            selections.sales ? styles.headerBtnActive : {},
                        ])}
                    />
                    <Text
                        style={StyleSheet.flatten([
                            styles.headerBtnText,
                            selections.sales ? styles.headerBtnActive : {},
                        ])}
                    >
                        Top Sales
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.headerBtn}
                    onPress={() => handleSelection(2)}
                >
                    <FontAwesome
                        name="dollar"
                        style={StyleSheet.flatten([
                            styles.headerBtnIcon,
                            selections.price ? styles.headerBtnActive : {},
                        ])}
                    />
                    <Text
                        style={StyleSheet.flatten([
                            styles.headerBtnText,
                            selections.price ? styles.headerBtnActive : {},
                        ])}
                    >
                        Price
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.headerBtn}
                    onPress={toggleFilter}
                >
                    <FontAwesome
                        name="filter"
                        style={StyleSheet.flatten([
                            styles.headerBtnIcon,
                            selections.filter ? styles.headerBtnActive : {},
                        ])}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <CatagorySlider currentCatagory={category_name} />
            </View>
            <ProductsView
                products={products ? products : []}
                isSuccess={isSuccess}
                isLoading={isLoading}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#8D72E1",
        flexDirection: "column",
    },
    header: {
        // width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FCF7FF",
        marginHorizontal: 10,
        marginTop: 5,
        padding: 10,
        borderRadius: 5,
    },
    headerBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerBtnText: {
        color: "#6C4AB6",
        fontSize: 14,
    },
    headerBtnIcon: {
        color: "#6C4AB6",
        fontSize: 18,
        marginRight: 2,
    },
    headerBtnActive: {
        color: "#B9E0FF",
    },
});

export default ShopScreen;
