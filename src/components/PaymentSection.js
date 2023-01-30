import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

const PaymentSection = ({ method, selectMethod }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                {method?.name ? method.name : ""}
            </Text>
            {method.sub ? (
                <View style={styles.methodsContainer}>
                    <ScrollView horizontal nestedScrollEnabled showsHorizontalScrollIndicator={false}>
                        {method.sub.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.methodWrapper} onPress={() => selectMethod(item.name)}>
                                    {item.image ? (
                                        <Image
                                            style={styles.methodImage}
                                            source={item.image}
                                        />
                                    ) : (
                                        ""
                                    )}
                                    <Text style={styles.methodName}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            ) : (
                <TouchableOpacity style={StyleSheet.flatten([styles.methodWrapper, styles.single])} onPress={() => selectMethod(method.name)}>
                    <Text style={styles.methodName}>
                        {method.name}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
    },
    heading: {
        borderBottomWidth: 1,
        color: '#FCF7FF',
        fontSize: 16,
        fontWeight: '700',
        borderColor: '#FCF7FF',
    },
    methodsContainer: {
        paddingVertical: 10,
    },
    single: {
        marginVertical: 5,
        alignItems: 'flex-start',
    },
    methodWrapper: {
        backgroundColor: '#FCF7FF',
        padding: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    methodName: {
        color: '#6C4AB6',
    },
    methodImage: {
        height: 50,
        width: 150,
    resizeMode: 'contain'
    ,
},
});

export default PaymentSection;
