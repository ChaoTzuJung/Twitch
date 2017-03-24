import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput
} from 'react-native';

class SearchBar extends Component{
    constructor(props){
    super(props);
    this.state={searchText : 'Search'}
    }
  render(){
    const {header,searchBar, searchIcon, headerCast,inputText, border} = styles;
    return(
        <View style = {[header,border]}>
            <View style = {[searchBar,border]}>
                <Image style={[searchIcon,border]} source={require('./../image/icon_search.png')}/>
                <TextInput 
                    style = {[inputText,border]} 
                    onChangeText={(text) => this.setState({searchText : text})}
                    value = {this.state.searchText}
                    placeholder={'Search'}
                    placeholderTextColor={'rgb(183,164,227)'}
                />         
            </View>
            <Image style={[headerCast, border]} source={require('./../image/btn_cast.png')} />
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
  
  header: {
    backgroundColor: 'rgb(100,65,165)',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 26.5,
    paddingLeft:8.5,
    paddingRight:8.5,
    height:64
  },
  searchBar:{
    backgroundColor: 'rgb(49,31,83)',
    height: 30 ,width: 320,
    borderRadius: 5,
    flexDirection: 'row',
    paddingLeft: 8.5
  },
  searchIcon:{
    width: 18,
    height: 18,
    alignSelf: 'center',
    marginRight:5.5
  },
  headerCast:{
    width: 33,
    height: 33,
    marginLeft: 5,
  },
  inputText:{
    color: 'rgb(185,163,227)',
    fontSize: 15,
    //height: 30,
    flex: 1,
  }
  
}

export default SearchBar;