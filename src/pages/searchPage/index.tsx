import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';

const SearchPage = () => (
  <Fragment>
    <SafeAreaView>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.headerBlock}>
            <ImageBackground source={require('./searchPageBackground.jpg')} style={styles.headerBackgroundImage}>
              <View style={styles.headerBackgroundImageContainer}>
                <Text style={styles.headerTitle}>The bike shop</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.contentBlock}>
            <Text>
              Content will go here
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </Fragment>
);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'green'
  },
  headerBlock: {
    flex: 1,
    width: '100%',
    height: 200,
    backgroundColor: 'red'
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
    width: '100%',
    backgroundColor: 'blue'
  }
});

export default SearchPage;