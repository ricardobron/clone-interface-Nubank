import React from 'react'

import { StyleSheet, View, Text, Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'


function Main() {
  let offset = 0
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  )

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY

      if (translationY >= 100) {
        opened = true

      } else {
        translateY.setValue(offset)
        translateY.setOffset(0),
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }


  return (
    <View style={styles.Container} >
      <Header />

      <View style={styles.Content}>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Animated.View style={{
            flex: 1,
            backgroundColor: '#FFF',
            borderRadius: 4,
            marginVertical: 0,
            marginHorizontal: 20,
            height: '100%',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              })
            }]
          }} >
            <View style={styles.CardHeader}>
              <MaterialIcons name="attach-money" size={28} color="#666" />
              <MaterialIcons name="visibility-off" size={28} color="#666" />
            </View>
            <View style={styles.CardContent}>
              <Text style={styles.Title}>Saldo disponivel</Text>
              <Text style={styles.Description}>R$ 197.611,65</Text>
            </View>
            <View style={styles.CardFooter}>
              <Text style={styles.Annotation}>
                Transferência de R$ 20,00 recebida de Ricardo Silva hoje às 06:00h
            </Text>
            </View>
          </Animated.View>
        </PanGestureHandler>

      </View >

      <Tabs translateY={translateY} />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#8b10ae',
    justifyContent: 'center',
  },
  Content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
    marginTop: 10 /*adicionei porque estava  muito colado*/
  },
  // Card: {
  //   flex: 1,
  //   backgroundColor: '#FFF',
  //   borderRadius: 4,
  //   marginVertical: 0,
  //   marginHorizontal: 20,
  //   height: '100%',
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   transform: [{
  //     translateY: translateY.interpolate({
  //       inputRange:[-350, 0, 380],
  //       outputRange:[-50, 0, 380],
  //       extrapolate: 'clamp'
  //     })
  //   }]
  // },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  CardContent: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  Title: {
    fontSize: 13,
    color: '#999'
  },
  Description: {
    fontSize: 32,
    marginTop: 3,
    color: '#333'
  },
  CardFooter: {
    padding: 30,
    backgroundColor: '#EEE',
    borderRadius: 4
  },
  Annotation: {
    fontSize: 12,
    color: '#333'
  },
})


export default Main