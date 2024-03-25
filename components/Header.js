import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{ backgroundcolor: 'red', height: 50, paddingVertical: 10, width: '100%'}}>
      <Text style={{ textAlign: 'center', color: 'blue'}}>MAIN MENU</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})