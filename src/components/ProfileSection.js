import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ProfileSection = ({ section }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.heading}>
                    {section?.title ? section?.title : "N/A"}
                </Text>
                <View style={styles.items}>
                    {section?.items
                        ? section?.items.map((item, index) => {
                              return (
                                  <TouchableOpacity
                                      key={index}
                                      style={styles.item}
                                      onPress={() => navigation.navigate(item.route)}
                                  >
                                    <View style={styles.itemInner}>
                                    {
                                        item?.icon? (
                                            <item.icon name={item.iconName} style={styles.itemIcon} />
                                        ): ''
                                    }
                                      <Text style={styles.itemText}>
                                          {item?.name ? item?.name : "N/A"}
                                      </Text>
                                      </View>
                                      <FontAwesome
                                          style={styles.itemIcon}
                                          name="angle-right"
                                      />
                                  </TouchableOpacity>
                              );
                          })
                        : ""}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
        width: 400,
    },
    inner: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        borderRadius: 20,
        backgroundColor: "#B9E0FF",
        flex: 1,
        padding: 20,
    },
    heading: {
        alignSelf: "center",
        color: "#6C4AB6",
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: "#6C4AB6",
    },
    items: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        // alignItems: 'stretch',
        flex: 1,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        // borderTopWidth: 1,
        borderColor: "#6C4AB6",
    },
    itemInner: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    itemIcon: {
        fontSize: 24,
        color: "#6C4AB6",
    },
    itemText: {
        color: "#6C4AB6",
        fontSize: 16,
        paddingVertical: 2,
        marginLeft: 5,
    },
});

export default ProfileSection;
