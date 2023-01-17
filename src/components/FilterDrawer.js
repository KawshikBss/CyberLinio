import {
    View,
    Text,
    DrawerLayoutAndroid,
    Modal,
    StyleSheet,
} from "react-native";
import React from "react";

const FilterDrawer = ({visible}) => {
    return (
        <Modal statusBarTranslucent transparent visible={visible}>
            <View style={styles.container}>
                <Text>Filters</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "60%",
        height: '100%',
        alignSelf: 'flex-end',
        backgroundColor: '#FCF7FF'
    },
});

export default FilterDrawer;
