import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';

import SingleItem from './components/SingleItem';
import { Button, Container, Content, Header, Icon, Input, Item } from 'native-base';
import FooterTabs from '../../components/FooterTabs';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { PAGES } from '../constants';
import { SingleBike } from '../types';

const dummyItems: SingleBike[] = [{
  title: 'Gazelle Orange C7+ HFP 2019 Dames',
  price: 1499,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/g/a/gazelle_orange_c7__hfp_dames_elektrische_fiets_zijaanzicht.jpg',
}, {
  title: 'Victesse Edge N3 HF 2019 Dames',
  price: 999,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/v/i/victesse_edge_n3_hf_dames_elektrische_fiets_zijaanzicht.jpg',
}, {
  title: 'Cortina E-U1 N3 2019 Dames',
  price: 999,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cortina_e-u1_n3_dames_elektrische_fiets_zijaanzicht.jpg',
}, {
  title: 'Brinckers Granville M8 400 LTD Heren',
  price: 1699,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cortina_e-u1_n3_dames_elektrische_fiets_zijaanzicht.jpg',
}, {
  title: 'Some bike',
  price: 4490,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/s/t/st1x-black-sport-side_8_1_.jpg',
}, {
  title: 'Brinckers Brisbane M310 2019 Dames',
  price: 2399,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/3/r/3r4a4504b_4.jpg',
}, {
  title: 'Gazelle Orange C7+ HFP 2019 Dames',
  price: 1499,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/g/a/gazelle_orange_c7__hfp_dames_elektrische_fiets_zijaanzicht.jpg',
}, {
  title: 'Victesse Edge N3 HF 2019 Dames',
  price: 999,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/v/i/victesse_edge_n3_hf_dames_elektrische_fiets_zijaanzicht.jpg',
}, {
  title: 'Cortina E-U1 N3 2019 Dames',
  price: 999,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cortina_e-u1_n3_dames_elektrische_fiets_zijaanzicht.jpg',
}, {
  title: 'Brinckers Granville M8 400 LTD Heren',
  price: 1699,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cortina_e-u1_n3_dames_elektrische_fiets_zijaanzicht.jpg',
}, {
  title: 'Some bike',
  price: 4490,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/s/t/st1x-black-sport-side_8_1_.jpg',
}, {
  title: 'Brinckers Brisbane M310 2019 Dames',
  price: 2399,
  stars: 4,
  image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/3/r/3r4a4504b_4.jpg',
}];

interface SearchPageProps {
  navigation: NavigationScreenProp<NavigationState>;
}

function SearchPage(props: SearchPageProps) {
  const { navigation } = props;

  return (
    <Fragment>
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.headerBlock}>
                  <ImageBackground source={require('./searchPageBackground.jpg')} style={styles.headerBackgroundImage}>
                    <View style={styles.headerBackgroundImageContainer}>
                      <Text style={styles.headerTitle}>The bike shop</Text>
                    </View>
                  </ImageBackground>
                </View>
                <View style={styles.contentBlock}>
                  {dummyItems.map((item, i) => (
                    <SingleItem
                      key={i}
                      item={item}
                      onSelected={() => navigation.navigate(PAGES.DETAILS, { item })}
                    />
                  ))}
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Content>
        <FooterTabs navigation={navigation} />
      </Container>
    </Fragment>
  )
}

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

export default SearchPage;