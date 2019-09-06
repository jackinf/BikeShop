import React from 'react';
import {
  Button,
  Container,
  Content,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  View,
  Body,
} from 'native-base';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { SafeAreaView, ScrollView } from 'react-native';

import AppHeader from '../../components/AppHeader';
import FooterTabs from '../../components/FooterTabs';
import styles from './styles';

interface AccountPageProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default function AccountPage(props: AccountPageProps) {
  const { navigation } = props;

  const info = {
    totalPrice: 2498,
    items: [{
      title: 'Gazelle Orange C7+ HFP 2019 Dames',
      price: 1499,
      stars: 4,
      image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/g/a/gazelle_orange_c7__hfp_dames_elektrische_fiets_zijaanzicht.jpg',
    }, {
      title: 'Victesse Edge N3 HF 2019 Dames',
      price: 999,
      stars: 4,
      image: 'https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/v/i/victesse_edge_n3_hf_dames_elektrische_fiets_zijaanzicht.jpg',
    }]
  };

  return (
    <Container>
      <AppHeader title="Cart" navigation={navigation} />
      <Content>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <View>
                <Text style={styles.price}>{info.totalPrice} EUR</Text>
              </View>

              <List>
                {info.items.map((item, i) => (
                  <ListItem thumbnail key={i}>
                    <Left>
                      <Thumbnail square source={{ uri: item.image }} />
                    </Left>
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note numberOfLines={1}>{item.price} EUR, {item.stars} stars</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                ))}
              </List>

              <Button block success style={styles.payButtonContainer}>
                <Text>Pay</Text>
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Content>
      <FooterTabs navigation={navigation} />
    </Container>
  )
}
