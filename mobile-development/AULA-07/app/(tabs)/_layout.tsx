import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='profile' options={{
            tabBarIcon: () => {
                return <Ionicons name='person' size={24}></Ionicons>
            }
        }}></Tabs.Screen>
                <Tabs.Screen name='tweets' options={{
            tabBarIcon: () => {
                return <Ionicons name='logo-twitter' size={24}></Ionicons>
            }
        }}></Tabs.Screen>
    </Tabs>
  )
}

export default TabLayout