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
  FlatList,
} from 'react-native'
import globalStyles from 'styles'
import Header from 'components/header'
import restaurants from './src/config/mockData'
import RestaurantRow from 'components/restaurantRow'

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
      <FlatList
        style={globalStyles.flatList}
        data={restaurants.filter(
          place =>
            !search ||
            place.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
        )}
        renderItem={({item, index}) => (
          <RestaurantRow place={item} index={index} keyExtractor={item.name} />
        )}
        initialNumToRender={16}
      />
    </View>
  )
}

export default App
