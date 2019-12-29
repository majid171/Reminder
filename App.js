import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import * as firebase from 'firebase';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import Loading from './Screens/Loading';
import {config} from './Components/config';

firebase.initializeApp(config);

const AppSwitchNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard
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
