import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import Ratings from 'components/rating'
import globalStyles from 'styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const AddReview = ({navigation}) => {
  const place = navigation.getParam('place')
  const [name, setName] = React.useState('')
  const [rating, setRating] = React.useState('')
  const [review, setReview] = React.useState('')

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View style={styles.root}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.top}>
          <Icon name="close" size={30} color="#0066cc" style={styles.close} />
        </TouchableOpacity>

        <Text style={styles.addReview}>Add Review</Text>

        <View style={styles.container}>
          <View style={styles.infoHeader}>
            <Image
              style={{borderRadius: 15}}
              source={{
                uri: place.url,
                height: 150,
                width: 150
              }}
              resizeMode="contain"
            />
            <View style={styles.info}>
              <Text style={styles.title}>{place.title}</Text>
              <Ratings rating={place.rating} />
            </View>
          </View>

          <Text style={styles.content}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores.
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your Name (optional)"
            value={name}
            onChangeText={name => setName(name)}
          />
          <Text style={styles.rating}>Your Rating:</Text>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => {
              return (
                <TouchableOpacity
                  onPress={() => setRating(i)}
                  style={styles.starButton}
                  key={i}>
                  <Icon
                    name={'star'}
                    color={rating >= i ? '#FFD64C' : '#CCCCCC'}
                    size={40}
                  />
                </TouchableOpacity>
              )
            })}
          </View>
          <TextInput
            style={[styles.input, {height: 100}]}
            placeholder="Review"
            value={review}
            onChangeText={review => setReview(review)}
            multiline={true}
            numberOfLines={5}
          />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit Review</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}></View>
      </View>
    </KeyboardAwareScrollView>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    flex: 1,
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
    color: 'grey',
    textAlign: 'center'
  },
  button: {
    paddingHorizontal: 10
  },
  addReview: {
    fontSize: 32,
    color: '#444',
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 20
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 10
  },
  stars: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  starButton: {
    padding: 5
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20
  },
  submitButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center'
  },
  top: {paddingVertical: 50},
  textInput: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3
  }
})

export default AddReview
