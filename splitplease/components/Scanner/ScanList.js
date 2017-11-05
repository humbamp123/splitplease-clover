import React, { Component } from 'react';
import {
	ReactNative,
	StyleSheet,
	View,
	Image,
	AppRegistry,
	Text,
	Button,
	ListView,
} from 'react-native';
const util = require('util');

export default class ScanList extends React.Component {

  itemlist(){
	  return this.props.navigation.state.params.item.map((data) =>{
		  return(
			  <Text>{data.name}</Text>
		  )
	  })
  }
	render() {
	  console.log("this.props.navigation=" + util.inspect(this.props.navigation, false,null));
		return (
			<View>
				{this.itemlist()}
			</View>
		);
	}
}
