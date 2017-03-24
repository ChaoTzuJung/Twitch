import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

class BottomColList extends Component{
  render(){
    const { cardList, cardItem, cardContent1, cardContent2, cardContent3, cardContent4, cardContent5, cardContent6, border}= styles;
    return(
      <ScrollView>
        <View style={[cardList, border]}>
          <View style={[cardItem, border]}>
            <Image style={[cardContent1, border]} source={require('./../image/img_leagueoflegends.png')} />
          </View>
          <View style={[cardItem, border]}>
            <Image style={[cardContent2, border]} source={require('./../image/img_counterstrike.png')} />
          </View>
          <View style={[cardItem, border]}>
            <Image style={[cardContent3, border]} source={require('./../image/img_hearthstone.png')} />
          </View>
          <View style={[cardItem, border]}>
            <Image style={[cardContent4, border]} source={require('./../image/img_dota2.png')} />
          </View>
          <View style={[cardItem, border]}>
            <Image style={[cardContent5, border]} source={require('./../image/img_h1z1.png')} />
          </View>
          <View style={[cardItem, border]}>
            <Image style={[cardContent6, border]} source={require('./../image/img_destiny.png')} />
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'space-between' /* Can be changed in the live sample */
  },
  cardItem:{
    height: 180,
    marginBottom: 5
  },
  cardContent1: {
    width: 180,
    height: 180
  },  
  cardContent2: {
    width: 180,
    height: 180
  },
  cardContent3: {
    width: 180,
    height: 180
  },
  cardContent4: {
    width: 180,
    height: 180
  },
  cardContent5: {
    width: 180,
    height: 180
  },
  cardContent6: {
    width: 180,
    height: 180
  }
}

export default BottomColList;