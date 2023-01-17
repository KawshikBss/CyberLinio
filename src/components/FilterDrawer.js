import {
    View,
    Text,
    DrawerLayoutAndroid,
    Modal,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FilterDrawerSection from "./FilterDrawerSection";
import catagories from "../catagories";
import colors from "../colors";

const FilterDrawer = ({visible, toggle}) => {
    return (
        <Modal statusBarTranslucent transparent animationType="fade" visible={visible} onRequestClose={toggle}>
            <View style={styles.container}>
                <FilterDrawerSection heading={'Catagories'} items={catagories} />
                <FilterDrawerSection heading={'Color Family'} items={colors} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "60%",
        height: '100%',
        alignSelf: 'flex-end',
        backgroundColor: '#FCF7FF',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 20,
        borderLeftWidth: 2,
        borderLeftColor: '#6C4AB6',
    },
});

export default FilterDrawer;
