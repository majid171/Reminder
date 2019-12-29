import React, {Component} from 'react';
import s from './style';
import {View, Text, Button} from 'react-native';
import firebase from 'firebase';


export default class Dashboard extends Component{

    render(){
        return(
            <View style={s.container}>
                <Text>Dashboard</Text>
                <Button
                    title="Sign Out"
                    onPress = {() => firebase.auth().signOut()}
                />
            </View>
        );
    }
}