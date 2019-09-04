import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card, CardItem, Left, Right } from 'native-base';

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
      <TouchableOpacity onPress={onSelected}>
        <Card style={styles.card}>
          <CardItem cardBody>
              <Image source={{uri: image}} style={styles.image}/>
          </CardItem>
          <CardItem style={styles.cardItemTitle}>
            <Text>{title}</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Text>{price} EUR</Text>
            </Left>
            <Right>
              <Text>{stars} stars</Text>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
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
  },
  image: {
    width: '100%',
    height: 115
  }
});

export default SingleItem;