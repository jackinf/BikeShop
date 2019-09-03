import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { Card, CardItem, Left, Right, Body, Button } from 'native-base';

interface Item {
  title: string,
  price: number,
  stars: number,
  image: string,
}

interface SingleItemProps {
  item: Item;
  onSelected: () => void;
}

const SingleItem = (props: SingleItemProps) => {
  const { onSelected } = props;
  const { title, price, stars, image } = props.item;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <CardItem cardBody>
          <Image source={{uri: image}} style={{width: '100%', height: 115}}/>
        </CardItem>
        <CardItem style={styles.cardItemTitle}>
          <Text>{title}</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Text>{price} EUR</Text>
          </Left>
          <Body>
            <Button transparent onPress={onSelected}>
              <Text>View</Text>
            </Button>
          </Body>
          <Right>
            <Text>{stars} stars</Text>
          </Right>
        </CardItem>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    marginTop: 20
  },
  card: {
    margin: 20,
  },
  cardItemTitle: {
    minHeight: 70
  }
});

export default SingleItem;