import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimension,handPress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handPress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn