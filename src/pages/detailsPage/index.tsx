import React, { Fragment } from 'react';
import { Image, SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';
import FooterTabs from '../../components/FooterTabs';
import { Button, Container, Content, Header, Icon, Left, Body, Title, Right } from 'native-base';
import AppHeader from '../../components/AppHeader';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { SingleBike } from '../types';

interface SingleItemPageProps {
  navigation: NavigationScreenProp<NavigationState, { item: SingleBike }>;
}

const dummyUri = "https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cortina_e-u1_n3_dames_elektrische_fiets_zijaanzicht.jpg";
const SingleItemPage = (props: SingleItemPageProps) => {
  const { navigation } = props;

  const item: SingleBike = navigation.getParam("item");

  return (
    <Fragment>
      <Container>
        <AppHeader title="Details" navigation={navigation} />
        <Content>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Image source={{uri: dummyUri}} style={{width: '100%', height: 260}}/>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{item.price} EUR</Text>
                </View>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Some bicycle</Text>
                </View>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</Text>
                </View>
                <Button transparent style={styles.readMoreButtonContainer}>
                  <Text style={styles.readMoreButton}>Read more</Text>
                </Button>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Content>
        <FooterTabs navigation={navigation} />
      </Container>
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

  }
});

export default SingleItemPage;