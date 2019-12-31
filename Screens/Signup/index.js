import React, { Component } from 'react';
import s from './style';
import { View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import firebase from 'firebase';

export default class Signup extends Component {

    state = {
        email: '',
        password1: '',
        password2: ''
    }

    signUp = () =>{
        alert('Signing Up');
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
                        onChangeText={password1 => this.setState({ password1 })}></TextInput>
                    <TextInput style={s.input} keyboardAppearance={'dark'} maxLength={35} placeholder="Vertify password" placeholderTextColor='white' secureTextEntry={true} value={this.state.text}
                        onChangeText={password2=> this.setState({ password2 })}></TextInput>
                    <TouchableOpacity style={s.signInButton} onPress={() => this.signUp()}>
                        <Text style={s.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}