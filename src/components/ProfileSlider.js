import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ProfileSection from './ProfileSection';
import profileSections from '../profileSections';

const ProfileSlider = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container} snapToInterval={400}>
        {
            profileSections.map((section, index) => {
                return (
                    <ProfileSection key={index} section={section} />
                );
            })
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    marginBottom: 90,
  }
});

export default ProfileSlider