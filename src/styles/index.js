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
    minWidth: 50,
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
  flatList: {
    paddingTop: 30,
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
  },
  buttonText: {
    color: '#0066cc',
    fontSize: 12,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
  },
})
