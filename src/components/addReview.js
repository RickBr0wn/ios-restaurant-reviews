import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Ratings from 'components/rating'
import globalStyles from 'styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const AddReview = ({navigation}) => {
  const place = navigation.getParam('place')
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.top}>
        <Icon name="close" size={30} color="#0066cc" style={styles.close} />
      </TouchableOpacity>
      <View style={styles.container}>
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
        <Text style={styles.content}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </Text>
      </View>
      <View style={styles.bottom}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 22,
    marginBottom: 10
  },
  address: {
    color: 'grey',
    marginBottom: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  content: {
    paddingVertical: 30,
    color: 'grey'
  },
  container: {}
})

export default AddReview
