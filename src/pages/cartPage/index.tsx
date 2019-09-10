import React, {useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';

import AppHeader from '../../components/AppHeader';
import styles from './styles';
import { ROUTES } from '../constants';
import dummyCart from './dummyItems';
import { Cart } from './types';

interface AccountPageProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default function AccountPage(props: AccountPageProps) {
  const { navigation } = props;
  const [cart, setCart] = useState<Cart>({ bikes: [] });

  useEffect(() => {
    AsyncStorage.getItem("token")
      .then((token) => {
        if (token) {
          fetch(ROUTES.getCart, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then(resp => resp.json())
            .then((resp: any) => {
              console.log(resp);
              setCart(resp);
            })
            .catch((e) => {
              console.warn(e);
              setCart(dummyCart)
            })
        }
      });
  }, []);

  const totalPrice = cart.bikes
    .map(bike => bike.price)
    .filter(price => !isNaN(price))
    .reduce((a, b) => a + b, 0);

  return (
    <Container>
      <AppHeader title="Cart" navigation={navigation} />
      <Content>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <View>
                <Text style={styles.price}>{totalPrice} EUR</Text>
              </View>

              <List>
                {cart.bikes.map((item, i) => (
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
    </Container>
  )
}
