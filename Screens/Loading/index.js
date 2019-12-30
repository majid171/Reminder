import React, {Component} from 'react';
import s from './style';
import {View, Text, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

export default class Loading extends Component{

    checkIfLoggedIn = () => {

        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                // console.log(user);
                this.props.navigation.navigate('Dashboard');
            }
            else{
                this.props.navigation.navigate('Login');
            }

        }.bind(this));
    };

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    render(){
        return(
            <View style={s.container}>
                <ActivityIndicator size="large" color="000"/>
            </View>
            
        );
    }
}