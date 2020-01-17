import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import globalStyles from 'styles'

const RestaurantRow = ({place, index}) => {
  const [showInfo, setShowInfo] = React.useState(false)
  const infoPressed = () => setShowInfo(prev => !prev)

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
        {showInfo && (
          <View style={globalStyles.info}>
            <Text>Restaurant Info</Text>
          </View>
        )}
      </View>
      <View style={globalStyles.edges}>
        <TouchableHighlight
          underlayColor="#5398dc"
          style={globalStyles.button}
          onPress={infoPressed}>
          <Text style={globalStyles.buttonText}>info</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default RestaurantRow
