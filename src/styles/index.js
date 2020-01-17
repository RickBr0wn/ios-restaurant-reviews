import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  faded: {
    color: 'grey',
  },
  row: {
    flexDirection: 'row',
  },
  details: {
    flexDirection: 'column',
    flex: 8,
  },
  edges: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    paddingTop: 30,
  },
})
