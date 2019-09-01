import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

interface Item {
  title: string,
  price: number,
  stars: number,
  image: string,
}

interface SingleItemProps {
  item: Item;
}

const SingleItem = (props: SingleItemProps) => {
  const {title, price, stars, image} = props.item;

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={{width: '100%', height: 130}}/>
      <Text>{title}</Text>
      <Text>{price}</Text>
      <Text>{stars}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    marginTop: 20
  }
});

export default SingleItem;