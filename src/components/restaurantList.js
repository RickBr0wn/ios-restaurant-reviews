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
import RestaurantRow from 'components/restaurantRow'
import {useFetch} from '../utils/useFetch'
import Logo from 'images/pizza.png'

function App({navigation}) {
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
          keyExtractor={item => `list-item-${item.id}`}
          data={response.data.filter(
            place =>
              !search ||
              place.title.toLowerCase().indexOf(search.toLowerCase()) > -1,
          )}
          renderItem={({item, index}) => (
            <RestaurantRow place={item} index={index} navigation={navigation} />
          )}
          initialNumToRender={16}
        />
      </View>
    )
  }

  return null
}

export default App
