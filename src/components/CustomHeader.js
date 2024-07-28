import {  Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles'

const CustomHeader = ({title}) => {
  return (
    <View>
      {/* titre de la page */}
      <View style={globalStyles.globalTitleContainer}>
        <Text style={globalStyles.globalTitle}>{title}</Text>
      </View>
    </View>
  );
}

export default CustomHeader

