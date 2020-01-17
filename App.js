/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Platform,
} from 'react-native'
import globalStyles from 'styles'
import Header from 'components/header'
import restaurants from './src/config/mockData'

function App() {
  const [search, setSearch] = React.useState('')

  return (
    <View style={globalStyles.container}>
      <Header />
      <TextInput
        style={globalStyles.input}
        placeholder="Live Search"
        onChangeText={text => setSearch(text)}
        value={search}
      />
      <ScrollView contentContainerStyle={globalStyles.scrollView}>
        {restaurants
          .filter(
            place =>
              !search ||
              place.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
          )
          .map((place, index) => (
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
          ))}
      </ScrollView>
    </View>
  )
}

export default App
