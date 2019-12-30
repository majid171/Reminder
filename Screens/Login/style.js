import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({

    // container:{
    //     flex: 1,
    //     alignItems: 'center',
    // },

    // titleContainer:{
    //     height: '25%',
    //     width:'100%',
    //     alignItems: 'center',
    //     backgroundColor:'#7289DA',
    //     justifyContent: 'center',
    // },

    // bodyContainer:{
    //     paddingTop: '5%',
    //     width: '100%',
    //     height: '75%',
    //     backgroundColor: '#2C2F33',
    //     alignItems: 'center',
    // },

    // title:{
    //     fontSize: 60,
    //     color: '#FFFFFF',
    // },

    // input:{
    //     width: '85%',
    //     height: '10%',
    //     fontSize: 17,
    //     borderColor: '#FFFFFF',
    //     borderBottomWidth: 1,
    //     color: '#FFFFFF',
    // }

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#23272A'
    },

    topContainer: {
        backgroundColor: '#7289DA',
        width: '100%',
        height: '50%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        paddingTop: 40,
    },

    logo:{
        height: 240,
        width: 180,
    },

    floatContainer: {
        top: '30%',
        position: 'absolute',
        width: '80%',
        height: '60%',
        backgroundColor: '#2C2F33',
        borderRadius: 15,
        alignItems: 'center',
    },

    welcomeText: {
        paddingTop: 50,
        color: 'white',
        fontSize: 25,
    },

    signInButton: {
        top: '5%',
        padding: 10,
        width: '80%',
        color: '#7289DA',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7289DA',
        borderRadius: 17,
    },

    signUpButton: {
        top: '8%',
        padding: 10,
        width: '80%',
        color: '#7289DA',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C2F33',
        borderRadius: 17,
        borderWidth: 4,
        borderColor: '#7289DA'
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
    },

    hrContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '20%',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#2C2F33',
        height: 50,
    },

    orText: {
        color: 'white',
        fontSize: 12,
        paddingLeft: 10,
        paddingRight: 10,
    },

    line: {
        backgroundColor: 'white',
        height: 1,
        width: '30%'
    },

    connectContainer:{
        top: '15%',
        backgroundColor: '#2C2F33',
        alignItems: 'center',
        width: '100%',
        height: '35%',
        justifyContent: 'center'
    },

    googleButton:{
        backgroundColor: '#4285F4',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        bottom: 10,
        borderRadius: 7,
    },

    facebookButton:{
        top: 10,
        backgroundColor: '#3b5998',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: 50,
        borderRadius: 7,
    },

});

export default style;