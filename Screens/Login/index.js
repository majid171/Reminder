import React, {Component} from 'react';
import s from './style';
import {View, Text, Button} from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

export default class Login extends Component{

    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    }

    onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!this.isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken,
                    googleUser.accessToken
                );
                // Sign in with credential from the Google user.
                firebase.auth().signInWithCredential(credential).then(function (result) {
                    console.log('User Signed In');
                    if (result.additionalUserInfo.isNewUser) {
                        firebase
                          .database()
                          .ref('/users/' + result.user.uid)
                          .set({
                            email: result.user.email,
                            profilePicture: result.additionalUserInfo.profile.picture,
                            firstName: result.additionalUserInfo.profile.given_name,
                            lastName: result.additionalUserInfo.profile.family_name,
                            created_at: Date.now()
                          })
                          .then(function(snapshot) {
                              console.log('Snapshot', snapshot);
                          });
                      } else {
                        firebase
                          .database()
                          .ref('/users/' + result.user.uid)
                          .update({
                            last_logged_in: Date.now()
                          });
                      }
                })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
            } else {
                console.log('User already signed-in Firebase.');
            }
        }.bind(this));
    }

    signInWithGoogleAsync = async() =>{
        try {
          const result = await Google.logInAsync({
            // androidClientId: YOUR_CLIENT_ID_HERE,
            iosClientId: '779486166693-h4l05uppjr72j16eht8hoj4e63eelb0g.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            this.onSignIn(result);
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }

    render(){
        return(
            <View style={s.container}>
                <Button 
                    title="Sign in with Google"
                    onPress = {() => this.signInWithGoogleAsync()}
                />
            </View>
        );
    }
}