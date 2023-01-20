import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import users from '../users';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {LinearGradient} from 'expo-linear-gradient';

const ProfileUser = ({user = users[0]}) => {
  return (
    <LinearGradient colors={['#8D9EFF', '#B9E0FF']} style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={user.image} />
      </View>
        <View style={styles.wrapper}>
            <View style={styles.section}>
                <Text style={styles.sectionHeading}>{user?.name? user?.name: 'N/A'}</Text>
                {/* <TouchableOpacity>
                <MaterialCommunityIcons name='account-edit' style={styles.sectionIcon} />
                </TouchableOpacity> */}
            </View>
            <View style={styles.section}>
                <MaterialCommunityIcons name='phone' style={styles.sectionIcon} />
                <Text style={styles.sectionInfo}>{user?.phone? user?.phone: 'N/A'}</Text>
            </View>
            <View style={styles.section}>
                <MaterialCommunityIcons name='email' style={styles.sectionIcon} />
                <Text style={styles.sectionInfo}>{user?.email? user?.email: 'N/A'}</Text>
            </View>
            <View style={styles.section}>
                <MaterialCommunityIcons name='map-marker' style={styles.sectionIcon} />
                <Text style={styles.sectionInfo}>{user?.address? user?.address: 'N/A'}</Text>
            </View>
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 140,
        width: 140,
        borderRadius: 140,
        borderColor: '#B9E0FF',
        borderWidth: 2,
    },
    wrapper: {
        flex: 1.3,
        marginRight: 10,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    sectionIcon: {
        color: '#B9E0FF',
        backgroundColor: '#6C4AB6',
        padding: 8,
        fontSize: 14,
        borderRadius: 50,
    },
    sectionHeading: {
        fontSize: 20,
        color: '#6C4AB6',
        fontWeight: '700',
    },
    sectionInfo: {
        color: '#6C4AB6'
    },
});

export default ProfileUser