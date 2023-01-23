import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProfileSection from './ProfileSection';
import profileSections from '../profileSections';
import Pagination from './Pagination';

const ProfileSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleScroll = event => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const currentSelect = Math.ceil((xOffset / 400));
    setCurrentSlide(currentSelect);
    console.log(xOffset);
  }
  return (
    <View style={styles.container}>
    <ScrollView horizontal snapToInterval={400} showsHorizontalScrollIndicator={false} pagingEnabled={true} onScroll={handleScroll}>
        {
            profileSections.map((section, index) => {
                return (
                    <ProfileSection key={index} section={section} />
                );
            })
        }
    </ScrollView>
    <Pagination items={profileSections} selected={currentSlide} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginBottom: 90,
  }
});

export default ProfileSlider