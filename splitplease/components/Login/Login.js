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
          <Text style={styles.title}> SplitPlease! </Text>
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
    flex: 1,
    backgroundColor: '#1ea96b',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    marginBottom: 10,
    width: 250,
    textAlign: 'center',
    fontSize: 40,
    fontWeight:'bold',
  }
})
