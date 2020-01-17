import React from 'react'
import {View, Image, Text, TouchableHighlight} from 'react-native'
import globalStyles from 'styles'
import Ratings from 'components/rating'

const RestaurantRow = ({place, index}) => {
  const [showInfo, setShowInfo] = React.useState(false)
  const infoPressed = () => setShowInfo(prev => !prev)

  if (!place.rating) {
    place.rating = Math.random() * 4 + 1
  }

  return (
    <View
      key={place.name}
      style={[
        globalStyles.row,
        {backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'},
      ]}>
      <View style={globalStyles.edges}>
        <Image
          source={{uri: place.url, height: 50, width: 50, borderRadius: 5}}
        />
        {/* <Text>{place.id}</Text> */}
      </View>
      <View style={globalStyles.details}>
        <Text>{place.title}</Text>
        <Text style={globalStyles.faded}>{place.address}</Text>
        <View style={{flexDirection: 'row', paddingBottom: 5}}>
          <Ratings rating={place.rating} />
        </View>
        {showInfo && (
          <View style={globalStyles.info}>
            <Image
              source={{uri: place.url}}
              style={{flex: 1, height: 100}}
              resizeMode="contain"
            />
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
