import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const tweets = () => {
  return (
    <View>
      <Text>
        Tweet
      </Text>

        <Link href={'/'}>Voltar para o início</Link>

    </View>
  )
}

export default tweets

const styles = StyleSheet.create({})