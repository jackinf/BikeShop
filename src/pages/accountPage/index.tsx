import React, { useState, useEffect, Fragment } from 'react';
import { Container, Content, View, Text, Button } from 'native-base';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Image, SafeAreaView, ScrollView, AsyncStorage } from 'react-native';
import { GoogleSignin, GoogleSigninButton   } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

import AppHeader from '../../components/AppHeader';
import styles from './styles';

interface AccountPageProps {
  navigation: NavigationScreenProp<NavigationState>;
}

interface UserFromFirebase {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null
  providerId: string | null
  uid: string | null;
}

export default function AccountPage(props: AccountPageProps) {
  const { navigation } = props;
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<UserFromFirebase | null>(null);
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  useEffect(() => {
    // Get webClientId from google-services.json file, in section client/oauth_client and take the value of client_id inside the object where client_type: 3
    GoogleSignin.configure({ webClientId: "437889631495-63le6f2ef0v1dr2vvutl1h2ukd5m8jct.apps.googleusercontent.com" });
    AsyncStorage.getItem("token")
      .then(async (token) => {
        const user = firebase.auth().currentUser;

        if (token && user) {
          setUser(user);
        } else if (!token && user) {
          const newToken = await user.getIdToken();
          await AsyncStorage.setItem("token", newToken);
          setUser(user);
        } else if (token && !user) {
          await AsyncStorage.removeItem("token");
        }

        setInitializing(false);
      })
  }, []);

  const handleSignIn = async () => {
    setIsSigninInProgress(true);
    try {
      await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      const credential = firebase.auth.GoogleAuthProvider.credential(tokens.idToken, tokens.accessToken);

      firebase.auth()
        .signInWithCredential(credential)
        .then(credential => {
          if (credential.user) {
            setUser(credential.user);
            // NB! this is the correct token, not the one from GoogleSignin.getTokens()!
            credential.user.getIdToken().then(async (idToken) => await AsyncStorage.setItem("token", idToken));
          }
        })
        .catch(err => console.log('signInWithCredential error', err));
    } catch (err) {
      console.log('GoogleSignin or firebase.auth.GoogleAuthProvider error', err);
    } finally {
      setIsSigninInProgress(false);
    }
  };

  const handleSignOut = async () => {
    await firebase.auth().signOut();
    await AsyncStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Container>
      <AppHeader title="Account" navigation={navigation} />
      <Content>
        <SafeAreaView>
          <ScrollView>
            {initializing ? (
              <View style={styles.container}>
                <Text>Initializing</Text>
              </View>
              ) : (
              <View style={styles.container}>
                {!!user && (
                  <Fragment>
                    {!!user.photoURL && (
                      <View>
                        <Image source={{uri: user.photoURL}} style={{width: '100%', height: 260}}/>
                      </View>
                    )}

                    <View>
                      <Button block danger onPress={handleSignOut}>
                        <Text>Log out</Text>
                      </Button>
                    </View>
                  </Fragment>
                )}

                {!user && (
                  <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={handleSignIn}
                    disabled={isSigninInProgress} />
                )}
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
      </Content>
    </Container>
  )
}
