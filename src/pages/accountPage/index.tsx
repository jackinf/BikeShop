import React, { useState } from 'react';
import { Button, Container, Content, Text, View } from 'native-base';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Image, SafeAreaView, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';

import AppHeader from '../../components/AppHeader';
import styles from './styles';

interface AccountPageProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const dummyUri = "https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cortina_e-u1_n3_dames_elektrische_fiets_zijaanzicht.jpg";
export default function AccountPage(props: AccountPageProps) {
  const { navigation } = props;
  const [user, setUser] = useState("");

  const handleSignIn = () => {
    try {
      firebase.auth()
        .signInWithEmailAndPassword("", "")
        .then(credential => {
          console.log('credential', credential);
          if (credential) {
            console.log('default app user ->', credential.user.toJSON());
            setUser(JSON.stringify(credential.user))
          }
        }).catch(err => {
          console.log('err1', err);
      });
    } catch (err) {
      console.log('err', err);
      setUser(err);
    }
  };

  return (
    <Container>
      <AppHeader title="Account" navigation={navigation} />
      <Content>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <View>
                <Image source={{uri: dummyUri}} style={{width: '100%', height: 260}}/>
              </View>
              {!!user && (
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{user}</Text>
                </View>
              )}
              {!user && (
                <Button block success style={styles.loginButtonContainer} onPress={handleSignIn}>
                  <Text>Login</Text>
                </Button>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </Content>
    </Container>
  )
}
