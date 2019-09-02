import React, { Fragment } from 'react';
import { Image, SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';

const dummyUri = "https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cortina_e-u1_n3_dames_elektrische_fiets_zijaanzicht.jpg";
const SingleItemPage = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={{uri: dummyUri}} style={{width: '100%', height: 260}}/>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>399 EUR</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Some bicycle</Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</Text>
            </View>
            <View style={styles.readMoreButtonContainer}>
              <Text style={styles.readMoreButton}>Read more</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>

        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  imageContainer: {

  },
  priceContainer: {

  },
  price: {
    color: 'red',
    marginTop: 30,
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: '800'
  },
  titleContainer: {
    margin: 10,
  },
  title: {
    fontSize: 30
  },
  descriptionContainer: {
    margin: 10,
  },
  description: {

  },
  readMoreButtonContainer: {
    margin: 10,
  },
  readMoreButton: {

  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'aqua',
    height: 100
  }
});

export default SingleItemPage;