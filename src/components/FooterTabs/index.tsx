import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

export default class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active>
            <Text>Search</Text>
          </Button>
          <Button>
            <Text>Cart</Text>
          </Button>
          <Button>
            <Text>Account</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}