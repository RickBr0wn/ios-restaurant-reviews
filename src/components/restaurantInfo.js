import React from 'react'
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import Ratings from 'components/rating'

const RestaurantInfo = ({navigation}) => {
  const place = navigation.getParam('place')

  return (
    <View style={styles.root}>
      <View style={styles.infoHeader}>
        <Image
          source={{uri: place.url, height: 150, width: 150, borderRadius: 5}}
          resizeMode="contain"
        />
        <View style={styles.info}>
          <Text style={styles.title}>{place.title}</Text>
          <Ratings rating={place.rating} />
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <Text style={styles.content}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  infoHeader: {
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
  },
  address: {
    color: 'grey',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  content: {
    paddingVertical: 30,
    color: 'grey',
  },
})

export default RestaurantInfo
