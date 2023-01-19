import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const FilterDrawerSection = ({ heading, items, range }) => {
    const [extended, setExtended] = useState(false);
    return (
        <View style={styles.container}>
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
                    {range? '': (extended ? (
                        <FontAwesome
                            name="angle-up"
                            style={styles.extendBtnIcon}
                        />
                    ) : (
                        <FontAwesome
                            name="angle-down"
                            style={styles.extendBtnIcon}
                        />
                    ))}
                </TouchableOpacity>
            </View>
            {range ? (
                <View style={styles.rangeContainer}>
                    <TextInput style={styles.rangeInput} placeholder='MIN' />
                    <Text style={{color: '#6C4AB6', fontSize: 25}}>-</Text>
                    <TextInput style={styles.rangeInput} placeholder='MAX' />
                </View>
            ) : extended ? (
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

export const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
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
    rangeContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    rangeInput: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 70,
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#6C4AB6",
        marginTop: 10,
        color: "#6C4AB6",
    },
});

export default FilterDrawerSection;
