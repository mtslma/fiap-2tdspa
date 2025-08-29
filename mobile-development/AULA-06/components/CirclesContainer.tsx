import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Circle from './Circle'

const CirclesContainer = () => {
  return (
    <View style={styles.container}>
      <Circle fill={false}></Circle>
      <Circle fill={true}></Circle>
      <Circle fill={false}></Circle>
      <Circle fill={true}></Circle>
    </View>
  )
}

export default CirclesContainer

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    marginVertical: 16,
  }
})