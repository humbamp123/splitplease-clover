import React from 'react';
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
import { Contacts, Permissions } from 'expo';
const util = require('util');

export default class ScanList extends React.Component {

  who = async function() {
    // Ask for permission to query contacts.
    const permission = await Permissions.askAsync(Permissions.CONTACTS);
    if (permission.status !== 'granted') {
      // Permission was denied...
      return;
    }
    const contacts = await Contacts.getContactsAsync({
      pageSize: 9999,
    });
    console.log('hello???');
    this.props.navigation.navigate('Contacts', {contacts: contacts});
  }

  renderItem = ({item}) => {
    return(
      <View style={{flexDirection: 'row', height: 40}}>
        <View style={{flex: 1}}><Text style={{fontSize: 20}}>{item.name}</Text></View>
        <View style={{marginRight: 7}}><Text style={{fontSize: 20, alignSelf: 'flex-end'}}>{item.price.toFixed(2)}</Text></View>
        <View><Button style={{fontSize: 20}} title="Who?" onPress={this.who.bind(this)}/></View>
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
