import React from 'react'
import { Image, View } from 'react-native'
import { Text } from 'react-native-paper'

const NoPhotos = () => {
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Image style={{ width: 300, height: 300 }} source={require('../../assets/camera.png')} />
      <Text variant="bodyLarge">Your photos will appear here, you can share them with your friends!</Text>
    </View>
  )
}

export default NoPhotos