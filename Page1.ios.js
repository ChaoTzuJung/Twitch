import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

class Page1 extends Component{
  render(){
    const { container} = styles;
    return(
      <View style = {container}>
        <Image source={require('./src/image/logo_twitch.png')}
               style={{width: 185.5, height: 61.5}}
        />
      </View>
    );
  }
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(100,65,165)',
    justifyContent: 'center',
    alignItems: 'center',
  },

};

export default Page1;