import React from 'react';
import { Container, Content, Text, View } from 'native-base';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import AppHeader from '../../components/AppHeader';
import { SafeAreaView, ScrollView } from 'react-native';
import FooterTabs from '../../components/FooterTabs';

interface AccountPageProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default function AccountPage(props: AccountPageProps) {
  const { navigation } = props;

  return (
    <Container>
      <AppHeader title="Account" navigation={navigation} />
      <Content>
        <SafeAreaView>
          <ScrollView>
            <View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </Content>
      <FooterTabs navigation={navigation} />
    </Container>
  )
}
