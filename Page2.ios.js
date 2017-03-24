import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import NavBar from './src/components/NavBar';
import TopColList from './src/components/TopColList';
import TabBar from './src/components/TabBar';

class Page2 extends Component{
  render(){
    const {container, sliceLine} = styles;
    return(
      <View style = {container}>
        <NavBar />
        <TopColList />
        <View style = {sliceLine}></View>
        <TabBar />
      </View>
    );
  }
};

const styles = {
  container: {
    flex: 1,
    //backgroundColor: 'rgb(100,65,165)',
  },
  sliceLine:{
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }

};

export default Page2;