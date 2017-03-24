import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

class TopColList extends Component{
  render(){
    const { cardList, cardItem, cardContent1, cardContent2, cardContent3, border}= styles;
    return(
      <ScrollView>
        <View style={[cardList, border]}>
          <View style={[cardItem, border]}>
            <Image style={[cardContent1, border]} source={require('./../image/img_firebat.png')} />
          </View>
          <View style={[cardItem, border]}>
            <Image style={[cardContent2, border]} source={require('./../image/img_forsen.png')} />
          </View>
          <View style={[cardItem, border]}>
            <Image style={[cardContent3, border]} source={require('./../image/img_kolento.png')} />
          </View>
        </View>
      </ScrollView>
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
  cardList: {
    flex: 1,
    paddingTop: 5,
     backgroundColor: 'rgb(241,241,241)',
  },
  cardItem:{
    flex: 1,
    paddingBottom: 5,
    paddingLeft:4.5,
    paddingRight:5.5,
  },
  cardContent1: {
    //flex: 1,
    width: 365,
    height: 200
  },
  cardContent2: {
    //flex: 1,
    width: 365,
    height: 200
  },
  cardContent3: {
   //flex: 1,
   width: 365,
   height: 144
  },
}

export default TopColList;