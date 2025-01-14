import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({ companrLogo, jobTitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
      <Image source={{uri:companrLogo}} style={styles.logoImage} />
      </View>
      <View style={styles.jobTitleBox} >
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}> {companyName}</Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} resizeMode='"conatin' style={styles.locationImage} />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company