import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native'

import QRCode from 'react-native-qrcode-svg';

import { MaterialIcons } from '@expo/vector-icons'


function Menu({ translateY }) {
  return (
    <Animated.ScrollView style={
    {
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      }),
      marginVertical: 0,
      marginHorizontal: 30,
    }
    }>
      <View style={styles.Code}>
        <QRCode
          value="https://rockeseat.com.br"
          size={80}
          color="#8b10ae"
          backgroundColor="#FFF"
        />
      </View>
      <View style={styles.Nav}>
        <View style={styles.NavItem}>
          <MaterialIcons name="help-outline" size={20} color="#FFF" />
          <Text style={styles.NavtText}>Me ajuda</Text>
        </View>
        <View style={styles.NavItem}>
          <MaterialIcons name="person-outline" size={20} color="#FFF" />
          <Text style={styles.NavtText}>Perfil</Text>
        </View>
        <View style={styles.NavItem}>
          <MaterialIcons name="credit-card" size={20} color="#FFF" />
          <Text style={styles.NavtText}>Configurar Cartão</Text>
        </View>
        <View style={styles.NavItem}>
          <MaterialIcons name="smartphone" size={20} color="#FFF" />
          <Text style={styles.NavtText}>Configurações do app</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.SignOutButton} onPress={() => { }} >
        <Text style={styles.SignOutButtonText}>SAIR DO APP</Text>
      </TouchableOpacity>
    </Animated.ScrollView>
  )
}


const styles = StyleSheet.create({
  // Container: {
  //   marginVertical: 0,
  //   marginHorizontal: 30,
  // },
  Code: {
    backgroundColor: "#FFF",
    padding: 10,
    overflow: "hidden",
    alignSelf: 'center'
  },
  Nav: {
    marginTop: 30,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  NavItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  NavtText: {
    fontSize: 15,
    color: '#FFF',
    marginLeft: 20
  },
  SignOutButton: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 15
  },
  SignOutButtonText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold'
  }
})

export default Menu