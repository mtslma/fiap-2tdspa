import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const profile = () => {
  return (
    <View>
        <Tabs.Screen options={{ title: "Dinâmico"}}></Tabs.Screen>
      <Text>profile</Text>
    </View>
  )
}

export default profile
