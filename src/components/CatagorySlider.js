import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CatagorySlider = ({catagories}) => {
    const [currentCatagory, setCurrentCatagory] = useState(catagories[0]);
    const isCurrentCat = (name) => {
        return currentCatagory? name === currentCatagory: false;
    }
    const handleCatagory = (name) => {
        setCurrentCatagory(curr => {
            return curr === name? '': name;
        })
    }
  return (
        <ScrollView
            horizontal
            style={styles.catagoriesContainer}
            showsHorizontalScrollIndicator={false}
        >
    {catagories ? (
            catagories.map((cat, index) => {
                return (
                    <TouchableOpacity key={index} onPress={() => handleCatagory(cat)}>
                        <Text style={StyleSheet.flatten([styles.catagory, isCurrentCat(cat)? styles.catagoryActive: {}])}>{cat}</Text>
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
    catagoryActive: {
        backgroundColor: "#6C4AB6",
        color: "#FCF7FF",
    }
});

export default CatagorySlider