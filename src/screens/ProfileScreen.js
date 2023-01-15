import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      height: "100%",
      backgroundColor: "#8D72E1",
      flexDirection: "column",
  },
});

export default ProfileScreen