import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import { PAGES } from '../../pages/constants';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

interface FooterTabsProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default function FooterTabs(props: FooterTabsProps) {
  const { navigation } = props;

  const state: any = navigation.state;
  const routeName = state.routeName;

  return (
    <Footer>
      <FooterTab>
        <Button active={routeName === PAGES.HOME} onPress={() => navigation.navigate(PAGES.HOME)}>
          <Text>Search</Text>
        </Button>
        <Button active={routeName === PAGES.CART} onPress={() => navigation.navigate(PAGES.CART)}>
          <Text>Cart</Text>
        </Button>
        <Button active={routeName === PAGES.ACCOUNT} onPress={() => navigation.navigate(PAGES.ACCOUNT)}>
          <Text>Account</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
