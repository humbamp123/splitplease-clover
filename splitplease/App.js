import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

function getQRinfo() {
    return fetch('https://apisandbox.dev.clover.com/v3/merchants/JMZAGJJPYZQ3J/orders/HPWZEFYMAQR4J/line_items?expand=taxRates', {
      headers: {
      'Authorization': 'Bearer eab450a5-c750-e309-836c-f668ecb67d92'
      }})
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.elements.map(function(lineitem){
          var total=(lineitem.price + (lineitem.price * lineitem.taxRates.elements[0].rate/10000000))/100
          return {name: lineitem["name"], total: total.toFixed(2)}        
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

export default class App extends React.Component {
  
button(){
   getQRinfo().then((response) => {
   console.warn('%O', response)
});
}

render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.button} title="QR Results"/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
