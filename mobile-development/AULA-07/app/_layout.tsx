import { View, Text } from 'react-native'
import React from 'react'
import "../global.css"
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerTitle: "Início"}}></Stack.Screen>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}></Stack.Screen>
    </Stack>
  )
}

export default RootLayout