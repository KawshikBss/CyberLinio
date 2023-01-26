import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

const HelpScreen = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity
                  style={styles.headerBtn}
                  onPress={() => navigation.goBack()}
              >
                  <Feather name="chevron-left" style={styles.headerBtnText} />
              </TouchableOpacity>
              </View>
              <Text style={styles.heading}>Our app currently supports only self serviece. Therefore please help yourself out.</Text>
              </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      height: "100%",
      backgroundColor: "#8D72E1",
  },
  heading: {
      color: "#B9E0FF",
      fontSize: 24,
      fontWeight: "900",
      marginHorizontal: 20,
      marginTop: 20,
      alignSelf: 'center',
  },
  header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 10,
  },
  headerBtn: {
      backgroundColor: "#FCF7FF",
      width: 44,
      height: 44,
      borderRadius: 50,
      alignSelf: "flex-end",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
      marginTop: 10,
  },
  headerBtnText: {
      color: "#6C4AB6",
      fontSize: 24,
  },
});

export default HelpScreen