import React, { useState, useEffect } from 'react';
import { Container, Content, View } from 'native-base';
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

  useEffect(() => {
    // Get webClientId from google-services.json file, in section client/oauth_client and take the value of client_id inside the object where client_type: 3
    GoogleSignin.configure({ webClientId: "437889631495-63le6f2ef0v1dr2vvutl1h2ukd5m8jct.apps.googleusercontent.com" });
  }, []);

  const handleSignIn = async () => {
    setIsSigninInProgress(true);
    try {
      await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      const credential = firebase.auth.GoogleAuthProvider.credential(tokens.idToken, tokens.accessToken);

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          user.getIdToken().then((idToken) => console.log('firebase token', idToken)); // NB! this is the correct token!
        }
      });

      firebase.auth()
        .signInWithCredential(credential)
        .catch(err => console.log('signInWithCredential error', err));
    } catch (err) {
      console.log('GoogleSignin or firebase.auth.GoogleAuthProvider error', err);
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
