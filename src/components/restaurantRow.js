import React from 'react'
import {View, Text} from 'react-native'
import globalStyles from 'styles'

const RestaurantRow = ({place, index}) => {
  return (
    <View
      key={place.name}
      style={[
        globalStyles.row,
        {backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'},
      ]}>
      <View style={globalStyles.edges}>
        <Text>{index + 1}</Text>
      </View>
      <View style={globalStyles.details}>
        <Text>{place.name}</Text>
        <Text style={globalStyles.faded}>{place.address}</Text>
      </View>
      <View style={globalStyles.edges}>
        <Text>Info</Text>
      </View>
    </View>
  )
}

export default RestaurantRow
