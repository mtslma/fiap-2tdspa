import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CircleProps {
    fill: boolean
}

const Circle = ({ fill }: CircleProps) => {
  return (
    <View style={[styles.circle, fill ? styles.fill : null]}></View>
  )
}

export default Circle

const styles = StyleSheet.create({
    circle: {
        borderWidth: 1,
        borderColor: "#fff",
        width: 24,
        height: 24,
        borderRadius: 12
    },
    fill: {
        backgroundColor: "#fff"
    }
})