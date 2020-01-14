/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native'
import gs from './src/styles'

const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'},
]

function App() {
  return (
    <View style={gs.container}>
      <Text style={gs.header}>Restaurant Reviews</Text>
      {restaurants.map((place, index) => (
        <View
          key={place.name}
          style={[
            gs.row,
            {backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'},
          ]}>
          <View style={gs.edges}>
            <Text>{index + 1}</Text>
          </View>
          <View style={gs.details}>
            <Text>{place.name}</Text>
            <Text style={gs.faded}>{place.address}</Text>
          </View>
          <View style={gs.edges}>
            <Text>Info</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default App
