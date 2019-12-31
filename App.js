import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import * as firebase from 'firebase';
import Welcome from './Screens/Welcome';
import Dashboard from './Screens/Dashboard';
import Loading from './Screens/Loading';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import {DB} from './Components/config';

firebase.initializeApp(DB);

const AppSwitchNavigator = createSwitchNavigator({
  Loading: Loading,
  Welcome: Welcome,
  Dashboard: Dashboard,
  Login: Login,
  Signup: Signup
});
const AppNavigator = createAppContainer(AppSwitchNavigator);


export default class App extends React.Component{
  
  state = {
    loaded: false
  };
  
  UNSAFE_componentWillMount(){
    this.loadAssets();
  }

  loadAssets = async () => {
    await this.setState({ loaded: true });
  };

  render() {
    if(this.state.loaded == true){
      return(
        <AppNavigator/>
      );
    }
    else{
      return(
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    
  }
}
