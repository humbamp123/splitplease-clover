import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Alert, AppRegistry, Button, StyleSheet, Text, View} from 'react-native';
import ScanScreen from './QR';
import { getQRinfo, writeReceiptData, getReceiptData} from './Clover';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import ScanList from './components/Scanner/ScanList';
const util = require('util');

class HomeScreen extends React.Component {

  button(){
    getQRinfo('JMZAGJJPYZQ3J', '4HB1WSXBR1KCA').then((response) => {
        // console.warn(response)
        writeReceiptData(response);
        console.log("does it get here");
        console.log(getReceiptData("coffee"));
        console.log("testing");
    });
  }

  qrScanner() {
    this.props.navigation.navigate('Scan');
  }

  render() {
	var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button onPress={this.button} title="QR Results"/>
        <Button onPress={this.qrScanner.bind(this)} title="Scan" color="blue"/>
        <Login nav={this.props.navigation}/>
      </View>
    );
  }
}

const App = StackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: Profile},
  Scan: {screen: ScanScreen},
  ScanList: {screen: ScanList},
});

export default App;
AppRegistry.registerComponent('App', () => App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ea96b',
  },
});
