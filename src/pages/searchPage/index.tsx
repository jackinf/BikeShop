import React, {Fragment, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import { Button, Container, Content, Header, Icon, Input, Item } from 'native-base';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import SingleItem from './components/SingleItem';
import { PAGES, ROUTES } from '../constants';
import styles from './styles';
import dummyItems from './dummyItems';
import { SingleBike } from '../types';

interface SearchPageProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default function SearchPage(props: SearchPageProps) {
  const { navigation } = props;
  const [items, setItems] = useState<SingleBike[]>([]);

  useEffect(() => {
    fetch(ROUTES.searchBikes)
      .then(resp => resp.json())
      .then((resp: any) => setItems(resp))
      .catch((e) => {
        console.warn(e);
        setItems(dummyItems)
      })
  }, []);

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
                  {items.map((item, i) => (
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
      </Container>
    </Fragment>
  )
}