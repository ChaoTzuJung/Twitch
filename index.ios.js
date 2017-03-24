/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import Page from './Page1.ios.js';
//import Page from './Page2.ios.js';
import Page from './Page3.ios.js';



const Zeplin = () => {
  const { container } = styles;
    return(
      <View style ={ container } > 
        <Page />

      </View> 
    );
}

const styles = {
  container: {
    flex: 1,
    
  }
};

AppRegistry.registerComponent('Zeplin', () => Zeplin);
