import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

class TabBar extends Component{
  render(){
    const {tabBarAll, tabBarItem, tabBarIcon, tabBarText, tabTouch, border  } = styles;
    return(
      <View style={[tabBarAll, border]}>
        <View style={[tabBarItem, border]}>
          <Image style={[tabBarIcon, border]} source={require('./../image/btn_games_selected.png')}/>
          <Text style={[[tabBarText, tabTouch, border]]}>Games</Text>
        </View>
        <View style={[tabBarItem, border]}>
          <Image style={[tabBarIcon, border]} source={require('./../image/btn_channels.png')}/>
          <Text style={[tabBarText, border]}>Channels</Text>
        </View>
        <View style={[tabBarItem, border]}>
          <Image style={[tabBarIcon, border]} source={require('./../image/btn_following.png')}/>
          <Text style={[tabBarText, border]}>Following</Text>
        </View>
        <View style={[tabBarItem, border]}>
          <Image style={[tabBarIcon, border]} source={require('./../image/btn_me.png')}/>
          <Text style={[tabBarText, border]}>Me</Text>
        </View>
      </View>
    )
  }
}

const styles = {
/*
  border:{
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
  },
*/
  
  tabBarAll: {
    flexDirection: 'row',
    //justifyContent: 'center',
    //paddingLeft:0.5,
    //paddingRight:0.5,
    height:49,
    backgroundColor: 'rgb(255,255,255)'
  },
  tabBarItem: {
    flex: 1,
    //justifyContent: 'center'
  },
  tabBarIcon: {
    alignSelf: 'center',
    width: 49,
    height: 49
  },
  tabBarText: {
    alignSelf: 'center',
    color: 'rgb(187,187,187)',
    fontSize: 10,
    position: 'absolute',
    bottom: 2,
  },
  tabTouch: {
    color: 'rgb(100,65,165)'
  }
}

export default TabBar;