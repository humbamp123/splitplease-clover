import React, { Component } from 'react';
import {
	ReactNative,
	StyleSheet,
	View,
	Image,
	AppRegistry,
	Text,
	Button,
        FlatList,
} from 'react-native';
const util = require('util');

export default class ScanList extends React.Component {

  renderItem = ({item}) => {
    return(
      <View style={{flex: 1, flexDirection: 'column', height: 40}}>
            <View><Text style={{fontSize: 20}}>{item.name}</Text></View>
            <View style={{position: 'absolute', right: 0}}><Text style={{fontSize: 20}}>{item.price.toFixed(2)}</Text></View>
      </View>
    )
  }
	render() {
	  console.log("this.props.navigation=" + util.inspect(this.props.navigation, false,null));
		return (
                  <FlatList data={this.props.navigation.state.params.item}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index }/>
		);
	}
}
