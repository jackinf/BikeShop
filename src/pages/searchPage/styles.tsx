import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  headerBlock: {
    flex: 1,
    width: '100%',
    height: 200
  },
  headerBackgroundImage: {
    width: '100%',
    height: '100%'
  },
  headerBackgroundImageContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.4)'
  },
  headerTitle: {
    flex: 1,
    textTransform: 'uppercase',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    marginTop: 80
  },
  contentBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }
});

export default styles;
