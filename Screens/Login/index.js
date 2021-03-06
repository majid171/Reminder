import React, { Component } from 'react';
import s from './style';
import { View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import firebase from 'firebase';

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    signIn = () =>{
        alert('Signing in');
    }

    render() {
        return (
            <View style={s.container}>
                <View style={s.topContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')} style={s.backContainer}>
                        <Image
                            source={require('../../assets/Images/back.png')}
                            style={s.back}
                        />
                    </TouchableOpacity>

                    <Image
                        source={require('../../assets/Images/logo.png')}
                        style={s.logo}
                    />
                </View>
                <View style={s.floatContainer}>
                    <TextInput style={s.input} keyboardAppearance={'dark'} maxLength={35} placeholder="Email" placeholderTextColor='white' value={this.state.text}
                        onChangeText={email => this.setState({ email })}></TextInput>
                    <TextInput style={s.input} keyboardAppearance={'dark'} maxLength={35} placeholder="Password" placeholderTextColor='white' secureTextEntry={true} value={this.state.text}
                        onChangeText={password => this.setState({ password })}></TextInput>
                    <TouchableOpacity style={s.signInButton} onPress={() => this.signIn()}>
                        <Text style={s.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity><Text style={s.forgetText}>Forget Password?</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}