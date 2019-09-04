import React from 'react';
import { Container, Content, View } from 'native-base';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import AppHeader from '../../components/AppHeader';
import { SafeAreaView, ScrollView } from 'react-native';

interface CartPageProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default function CartPage(props: CartPageProps) {
  const { navigation } = props;

  return (
    <Container>
      <AppHeader title="Cart" navigation={navigation} />
      <Content>
        <SafeAreaView>
          <ScrollView>
            <View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </Content>
    </Container>
  )
}