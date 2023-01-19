import {
    View,
    Text,
    DrawerLayoutAndroid,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FilterDrawerSection, {
    styles as sectionStyles,
} from "./FilterDrawerSection";
import catagories from "../catagories";
import colors from "../colors";
import materials from "../materials";
import AntDesign from "react-native-vector-icons/AntDesign";
import Modal from "react-native-modal";

const FilterDrawer = ({ visible, toggle }) => {
    const ratings = [1, 2, 3, 4, 5];
    return (
        <Modal
            isVisible={visible}
            animationIn={"slideInRight"}
            animationInTiming={300}
            animationOut={"slideOutRight"}
            animationOutTiming={300}
            onBackdropPress={toggle}
            onRequestClose={toggle}
            statusBarTranslucent
            style={{ margin: 0 }}
            deviceHeight={"100%"}
        >
            <View style={styles.container}>
                <View style={styles.sectionsContainer}>
                    <FilterDrawerSection
                        heading={"Catagories"}
                        items={catagories}
                    />
                    <FilterDrawerSection
                        heading={"Color Family"}
                        items={colors}
                    />
                    <FilterDrawerSection heading={"Price"} range />
                    <View>
                        <View style={sectionStyles.section}>
                            <Text style={sectionStyles.heading}>Rating</Text>
                        </View>
                        <View
                            style={StyleSheet.flatten([
                                styles.buttons,
                                { justifyContent: "flex-start" },
                            ])}
                        >
                            {ratings
                                ? ratings.map((item, index) => {
                                      return (
                                          <TouchableOpacity
                                              style={styles.ratingButton}
                                              key={index}
                                          >
                                              <AntDesign
                                                  style={
                                                      styles.ratingButtonText
                                                  }
                                                  name="star"
                                              />
                                          </TouchableOpacity>
                                      );
                                  })
                                : ""}
                        </View>
                        <FilterDrawerSection
                            heading={"Main Material"}
                            items={materials}
                        />
                    </View>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={StyleSheet.flatten([
                            styles.button,
                            {
                                borderTopLeftRadius: 5,
                                borderBottomLeftRadius: 5,
                            },
                        ])}
                    >
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={StyleSheet.flatten([
                            styles.button,
                            {
                                backgroundColor: "#8D72E1",
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                            },
                        ])}
                        onPress={toggle}
                    >
                        <Text style={styles.buttonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "70%",
        height: "100%",
        alignSelf: "flex-end",
        backgroundColor: "#FCF7FF",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 20,
        borderLeftWidth: 2,
        borderLeftColor: "#6C4AB6",
        justifyContent: "space-between",
    },
    buttons: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    button: {
        flex: 1,
        height: 40,
        backgroundColor: "#6C4AB6",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 16,
        color: "#FCF7FF",
    },
    ratingButton: {
        height: 24,
        width: 24,
        backgroundColor: "#6C4AB6",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        marginHorizontal: 2,
        borderRadius: 5,
    },
    ratingButtonText: {
        fontSize: 14,
        color: "#FCF7FF",
    },
});

export default FilterDrawer;
