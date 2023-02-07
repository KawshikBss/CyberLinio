import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BadgeSkeleton = () => {
  return (
    <View style={styles.catagory}>
      <Text>{'    '}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    catagory: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#FCF7FF",
        color: "#6C4AB6",
        marginLeft: 16,
        borderRadius: 20,
    },
});

export default BadgeSkeleton