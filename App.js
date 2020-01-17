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
  Image,
} from 'react-native'
import globalStyles from 'styles'
import Header from 'components/header'
import restaurants from './src/config/mockData'
import RestaurantRow from 'components/restaurantRow'
import {useFetch} from './src/utils/useFetch'
import Logo from './src/images/pizza.png'

function App() {
  const [search, setSearch] = React.useState('')

  const [response, error, isLoading] = useFetch(
    'https://jsonplaceholder.typicode.com/photos/',
  )

  if (isLoading) {
    return <Text>Loading data from remote sources.</Text>
  }

  if (error) {
    console.log(error)
  }

  if (response && response.data) {
    console.log(response.data)
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.logo}>
          <Image source={Logo} />
        </View>
        <Header />
        <TextInput
          style={globalStyles.input}
          placeholder="Live Search"
          onChangeText={text => setSearch(text)}
          value={search}
        />
        <FlatList
          style={globalStyles.flatList}
          data={response.data.filter(
            place =>
              !search ||
              place.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
          )}
          renderItem={({item, index}) => (
            <RestaurantRow place={item} index={index} keyExtractor={item.id} />
          )}
          initialNumToRender={16}
        />
      </View>
    )
  }

  return null
}

export default App
