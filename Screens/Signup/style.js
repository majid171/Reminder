import { StyleSheet, Dimensions } from 'react-native';
import { withOrientation } from 'react-navigation';

const style = StyleSheet.create({

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

    backContainer:{
        padding: 10,
        position: 'absolute',
        top: 40,
        left: 0,
    },

    back:{
        height: 50,
        width: 70,
    },

    logo:{
        height: 240,
        width: 180,
    },

    floatContainer: {
        top: '30%',
        position: 'absolute',
        width: '80%',
        height: '30%',
        backgroundColor: '#2C2F33',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input:{
        paddingLeft: 5,
        fontSize: 20,
        backgroundColor: '#23272A',
        width: '85%', 
        height: 50,
        borderRadius: 2,
        justifyContent: 'center',
        color: 'white',
        marginBottom: 10,
    },

    signInButton: {
        padding: 10,
        width: '80%',
        color: '#7289DA',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7289DA',
        borderRadius: 17,
        top: 5,
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
    },

    forgetText:{
        color: 'white',
        top: 20,
        fontSize: 13,
    },

    backButton:{

    },
});

export default style;