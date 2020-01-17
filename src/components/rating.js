import React from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Ratings = ({rating}) => {
  const stars = [...Array(Math.ceil(rating))]
  return (
    <View style={{flexDirection: 'row'}}>
      {stars.map((_, index) => {
        return (
          <Icon
            name={Math.floor(rating) > 1 ? 'star' : 'star-half'}
            color="#ffd64c"
          />
        )
      })}
    </View>
  )
}

export default Ratings
