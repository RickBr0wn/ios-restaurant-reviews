import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#0066cc',
    fontWeight: '300',
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
})
