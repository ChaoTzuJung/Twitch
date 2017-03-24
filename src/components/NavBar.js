import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

class NavBar extends Component{
  render(){
    const { header, headerText, headerIcon, navbar, navbarText, navbeTouch1, navbeTouch2, navbarItem, border, textcolor } = styles;
    return(
    <View stytle ={border}>
        <View style = {[header,border]}>
            <Image style = {[headerIcon ,border]} source={require('./../image/btn_back.png')}/>
            <Text style={[headerText, border]}>Hearthstone</Text> 
            <Image style = {[headerIcon, border]} source={require('./../image/btn_like.png')}/>
        </View>
        <View style = {[navbar,border]}>
            <View style = {[navbarItem,border,navbeTouch1]}>    
                <Text style = {[navbarText,border]}>LIVE</Text>
                
            </View>
            <View style = {[navbarItem,border,navbeTouch2]}>
                <Text style = {[navbarText,border,textcolor]}>RECENT</Text>
            </View>
        </View>
      
    </View>
    );
  }
};

const styles = {
  /*
  border:{
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
  },
  */

  header: {
    //flex: 1,
   flexDirection: 'row',
   backgroundColor: 'rgb(100,65,165)',
   //alignItem: 'center',
   justifyContent: 'center',
   //width: 375,
   paddingTop: 20,
   height: 64,
   paddingLeft:12,
   paddingRight:12,
  },
  headerIcon:{
    width: 25,
    height: 30,
    marginTop: 5,
    //alignSelf: 'center',
  },
  headerText: {
    
    alignSelf:'center',
    flex: 2,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    //alignSelf: 'center',
    margin: 0
  },
  navbar:{
    width: 375,
    height: 44,
    flexDirection: 'row',
  },
  navbarItem:{
    flex: 1,
    justifyContent: 'center',
   
  },
  navbarText:{
     color: 'rgb(100,65,165)',
     fontSize: 13,
      textAlign: 'center',
     //fontWeight: 100
  },
  textcolor:{
     color: 'rgb(187,187,187)',
  },
  navbeTouch1:{
    borderBottomWidth: 5,
    borderBottomColor: 'rgb(100,65,165)'
  },
  navbeTouch2:{
    borderBottomWidth: 5,
    borderBottomColor: 'rgba(255,255,255,0)'
  }
};


export default NavBar;