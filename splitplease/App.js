import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import ScanScreen from './QR';
import { getQRinfo } from './Clover';

class HomeScreen extends React.Component {
  
  button(){
    getQRinfo('JMZAGJJPYZQ3J', '4HB1WSXBR1KCA').then((response) => {
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
