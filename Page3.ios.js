import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import SearchBar from './src/components/SearchBar';
import BottomColList from './src/components/BottomColList'
import TabBar from './src/components/TabBar';

class Page3 extends Component {
  constructor(props){
    super(props);
    this.state = {searchText : 'Search'};
  }
  render() {
    const {container, sliceLine} = styles;
    return (
      <View style={container}>
        <SearchBar />
        <BottomColList />
        <View style = {sliceLine}></View>
        <TabBar />
      </View>
    );
  }
}

const styles = {

  container: {
    flex: 1,
  },
  sliceLine:{
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
}

export default Page3;