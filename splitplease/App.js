import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import ScanScreen from './QR';

function getQRinfo() {
    return fetch('https://apisandbox.dev.clover.com/v3/merchants/JMZAGJJPYZQ3J/orders/4HB1WSXBR1KCA/line_items?expand=taxRates', {
      headers: {
      'Authorization': 'Bearer eab450a5-c750-e309-836c-f668ecb67d92'
      }})
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.elements.map(function(lineitem){
          return {name: lineitem["name"], price: lineitem.price/100} 
          });
       })
      .catch((error) => {
        console.error(error);
      });
}

function getTaxAndTip() {
    return fetch('https://apisandbox.dev.clover.com/v3/merchants/JMZAGJJPYZQ3J/orders/4HB1WSXBR1KCA/payments',{
      headers: {
      'Authorization': 'Bearer eab450a5-c750-e309-836c-f668ecb67d92'
      }})
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.elements.map(function(moreitems){ 
         return {tax: (moreitems["taxAmount"] || 0)/100, tip: (moreitems["tipAmount"] || 0)/100}
          });
         })
      .catch((error) => {
        console.error(error);
      });
}

class HomeScreen extends React.Component {
  
  button(){
    getQRinfo().then((response) => {
     console.warn('%O', response)
    });
  }

  qrScanner() {
    this.props.navigation.navigate('Scan');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Button onPress={this.button} title="QR Results"/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button onPress={this.qrScanner.bind(this)} title="Scan" color="blue"/>
      </View>
    );
  }
}

const App = StackNavigator({
  Home: {screen: HomeScreen},
  Scan: {screen: ScanScreen},
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
