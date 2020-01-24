import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import logo from '../../../assets/Nubank_Logo.png'

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.logo} source={logo}/>
        <Text style={styles.title}>Diego</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-down" size={20} color="#FFF" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 0,
    paddingHorizontal: 30,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,    
  },
  logo: {

  },
  title:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft:8.
  }

})

export default Header