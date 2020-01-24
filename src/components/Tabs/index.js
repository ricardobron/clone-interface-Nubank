import React from 'react'
import { StyleSheet, View, Text, ScrollView, Animated } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

function Tabs({ translateY }) {
  return (
    <Animated.View style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0,380],
          outputRange:[ 0, 30],
          extrapolate: 'clamp'
        })
      }],
      height: 100,
      marginTop: 20,
      opacity: translateY.interpolate({
        inputRange: [0,380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp'
      })
    }     
      }>
      <ScrollView
        contentContainerStyle={styles.TabsContainer}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={styles.TabItem}>
          <MaterialIcons name="person-add" size={24} color="#FFF" />
          <Text style={styles.TabText}>Indicar amigos</Text>
        </View>
        <View style={styles.TabItem}>
          <MaterialIcons name="chat-bubble-outline" size={24} color="#FFF" />
          <Text style={styles.TabText}>Cobrar</Text>
        </View>
        <View style={styles.TabItem}>
          <MaterialIcons name="arrow-downward" size={24} color="#FFF" />
          <Text style={styles.TabText}>Depositar</Text>
        </View>
        <View style={styles.TabItem}>
          <MaterialIcons name="arrow-upward" size={24} color="#FFF" />
          <Text style={styles.TabText}>Transferir</Text>
        </View>
        <View style={styles.TabItem}>
          <MaterialIcons name="lock" size={24} color="#FFF" />
          <Text style={styles.TabText}>Bloquear cartão</Text>
        </View>
      </ScrollView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  // container: {
  // height: 100,
  // marginTop: 20
  // },
  TabsContainer: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  TabItem: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255,255, 0.2)',
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: 'space-between'
  },
  TabText: {
    fontSize: 13,
    color: '#fff'
  }
})

export default Tabs