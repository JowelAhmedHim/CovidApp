import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1
  },

  header:{
    backgroundColor: "#473F97",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius : 40,

  },

});
