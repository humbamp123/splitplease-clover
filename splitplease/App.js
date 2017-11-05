import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Alert, AppRegistry, Button, StyleSheet, Text, View} from 'react-native';
import ScanScreen from './QR';
import { getQRinfo } from './Clover';
import Login from './components/Login/Login';

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
        <Button onPress={this.button} title="QR Results"/>
        <Button onPress={this.qrScanner.bind(this)} title="Scan" color="blue"/>
        <Login />
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
    backgroundColor: '#1ea96b',
  },
});
