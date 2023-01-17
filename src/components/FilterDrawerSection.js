import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const FilterDrawerSection = ({ heading, items }) => {
    const [extended, setExtended] = useState(false);
    return (
        <View>
            <View style={styles.section}>
                <Text style={styles.heading}>
                    {heading ? heading : "Heading"}
                </Text>
                <TouchableOpacity
                    style={styles.extendBtn}
                    onPress={() =>
                        setExtended((curr) => {
                            return !curr;
                        })
                    }
                >
                    {extended ? (
                        <FontAwesome
                            name="angle-up"
                            style={styles.extendBtnIcon}
                        />
                    ) : (
                        <FontAwesome
                            name="angle-down"
                            style={styles.extendBtnIcon}
                        />
                    )}
                </TouchableOpacity>
            </View>
            {extended ? (
                <View style={styles.itemsContainer}>
                    {items
                        ? items.map((item, index) => {
                              return (
                                  <TouchableOpacity key={index}>
                                      <Text style={styles.item}>{item}</Text>
                                  </TouchableOpacity>
                              );
                          })
                        : ""}
                </View>
            ) : (
                ""
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#6C4AB6",
        borderBottomWidth: 2,
    },
    heading: {
        fontSize: 16,
        color: "#6C4AB6",
    },
    extendBtn: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    extendBtnIcon: {
        fontSize: 20,
        color: "#6C4AB6",
    },
    item: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 10,
        // backgroundColor: "#B9E0FF",
        borderColor: "#6C4AB6",
        borderWidth: 1,
        color: "#6C4AB6",
        textAlign: "center",
        margin: 3,
    },
    itemsContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
    },
});

export default FilterDrawerSection;
