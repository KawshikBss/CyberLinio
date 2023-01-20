import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileUser from '../components/ProfileUser';
import ProfileSection from '../components/ProfileSection';
import ProfileSlider from '../components/ProfileSlider';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileUser />
      <ProfileSlider />
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