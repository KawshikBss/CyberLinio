import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const CatagorySlider = ({catagories}) => {
  return (
        <ScrollView
            horizontal
            style={styles.catagoriesContainer}
            showsHorizontalScrollIndicator={false}
        >
    {catagories ? (
            catagories.map((cat, index) => {
                return (
                    <TouchableOpacity key={index}>
                        <Text style={styles.catagory}>{cat}</Text>
                    </TouchableOpacity>
                );
            })
    ) : (
        <Text>None</Text>
    )}
        </ScrollView>
  )
}

const styles = StyleSheet.create({
    catagoriesContainer: {
        marginVertical: 18,
    },
    catagory: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#FCF7FF",
        color: "#6C4AB6",
        marginLeft: 16,
        borderRadius: 20,
    },
});

export default CatagorySlider