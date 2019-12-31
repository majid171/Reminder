import React, { Component } from 'react';
import s from './style';
import { View, Text, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import {googleIOSClientID, facebookAppID} from '../../Components/config';

export default class Welcome extends Component {

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
          return true;
        }
      }
    }
    return false;
  }

  onSignIn = googleUser => {
    // console.log('Google Auth Response', googleUser);
    var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
      unsubscribe();
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        firebase.auth().signInWithCredential(credential).then(function (result) {
          // console.log('User Signed In');
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
              .then(function (snapshot) {
                // console.log('Snapshot', snapshot);
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
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
      } else {
        // console.log('User already signed-in Firebase.');
      }
    }.bind(this));
  }

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        // androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId: googleIOSClientID,
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

  signInWithFacebookAsync = async () => {
    await Facebook.initializeAsync(facebookAppID);
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(facebookAppID, { permissions: ['public_profile'] });

    if (type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase.auth().signInWithCredential(credential).then(function (result) {
        if (result.additionalUserInfo.isNewUser) {
          firebase.database().ref('/users/' + result.user.uid)
            .set({
              email: result.user.email,
              profilePicture: result.user.photoURL,
              firstName: result.additionalUserInfo.profile.first_name,
              lastName: result.additionalUserInfo.profile.last_name,
              created_at: Date.now()
            }).then(function (snapshot) { });
        }
        else {
          firebase.database().ref('/users/' + result.user.uid).update({ last_logged_in: Date.now() });
        }
      }).catch(function (error) {
        console.log('error');
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    }
  }

  render() {
    return (
      <View style={s.container}>
        <View style={s.topContainer}>
          <Image
            source={require('../../assets/Images/logo.png')}
            style={s.logo}
          />
        </View>
        <View style={s.floatContainer}>
          <Text style={s.welcomeText}>Welcome to Reminder!</Text>
          <TouchableOpacity style={s.signInButton} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={s.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.signUpButton} onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={s.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={s.hrContainer}>
            <View style={s.line}></View>
            <Text style={s.orText}>Or connect using</Text>
            <View style={s.line}></View>
          </View>
          <View style={s.connectContainer}>
            <TouchableOpacity style={s.googleButton} onPress={() => this.signInWithGoogleAsync()}>
              <Text style={s.buttonText}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.facebookButton} onPress={() => this.signInWithFacebookAsync()}>
              <Text style={s.buttonText}>Sign in with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}