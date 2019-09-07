import React, { useState } from 'react';
import { Button, Container, Content, Text, View } from 'native-base';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Image, SafeAreaView, ScrollView } from 'react-native';
import { GoogleSignin, GoogleSigninButton   } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

import AppHeader from '../../components/AppHeader';
import styles from './styles';

interface AccountPageProps {
  navigation: NavigationScreenProp<NavigationState>;
}

const dummyUri = "https://www.fietsenwinkel.nl/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cortina_e-u1_n3_dames_elektrische_fiets_zijaanzicht.jpg";
export default function AccountPage(props: AccountPageProps) {
  const { navigation } = props;
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  const handleSignIn = async () => {
    setIsSigninInProgress(true);
    try {
      await GoogleSignin.configure({
        offlineAccess: false
      });

      const data: any = await GoogleSignin.signIn();
      console.log('data', data);
      const tokens = await GoogleSignin.getTokens();
      console.log('tokens', tokens);

      const credential = firebase.auth.GoogleAuthProvider.credential(tokens.idToken, tokens.accessToken);
      console.log('credential1', credential);

      firebase.auth()
        .signInWithCredential(credential)
        // .signInWithEmailAndPassword("", "")
        .then(async (credential) => {
          const tokens = await GoogleSignin.getTokens();
          console.log('tokens2', tokens);
          console.log('credential2', credential);

          console.log(credential.user.toJSON());
          // if (credential) {
          //   console.log('default app user ->', credential.user.toJSON());
          //   // setUser(JSON.stringify(credential.user))
          // }
        }).catch(err => {
          console.log('err1', err);
      });
    } catch (err) {
      console.log('err', err);
      // setUser(err);
    } finally {
      setIsSigninInProgress(false);
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

              <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={handleSignIn}
                disabled={isSigninInProgress} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Content>
    </Container>
  )
}
