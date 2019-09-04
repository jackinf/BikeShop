import React from 'react';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

interface AppHeaderProps {
  title?: string;
  navigation: NavigationScreenProp<NavigationState>;
}

export default function AppHeader(props: AppHeaderProps) {
  const { title, navigation } = props;

  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      {title && (
        <Body>
          <Title>{title}</Title>
        </Body>
      )}
      <Right>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Right>
    </Header>
  );
}