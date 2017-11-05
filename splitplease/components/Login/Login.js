import React, { Component } from 'react';
import { StyleSheet, View, Image, AppRegistry, Text} from 'react-native';
import LoginForm from './LoginForm';
const util = require('util');

export default class Login extends React.Component {
  render() {
    let pic = {
      uri: 'https://i.imgur.com/dXPYQou.gif'
    };
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={pic}
          />
        </View>
        <View style={{height: 50, marginBottom: 80, marginTop: -80}}>
          <Image
          style={styles.logo2}
          source={require('../images/whitetitle.png')}
          />
        </View>
        <View style={styles.formContainer}>
          <LoginForm nav={this.props}/>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1ea96b',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  logo2: {
    resizeMode: 'contain',
    width: 300,
    alignSelf: 'center',
  },
})
