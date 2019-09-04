import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

interface FooterTabsProps {
  navigation: any;
}

export default function FooterTabs(props: FooterTabsProps) {
  const { navigation } = props;

  return (
    <Footer>
      <FooterTab>
        <Button active onPress={() => navigation.navigate("Home")}>
          <Text>Search</Text>
        </Button>
        <Button onPress={() => navigation.navigate("Home")}>
          <Text>Cart</Text>
        </Button>
        <Button onPress={() => navigation.navigate("Home")}>
          <Text>Account</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}