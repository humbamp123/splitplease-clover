import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import { StackNavigator } from 'react-navigation';
const util = require('util');

export default class LoginForm extends React.Component {

  profile() {
    this.props.nav.nav.navigate('Profile');
  }

  render() {
	  console.log("this.props.navigation=" + util.inspect(this.props.nav, false,null));
	var {navigate} = this.props.nav;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          returnKeyType="go"
          secureTextEntry
          ref={(input) => this.passwordInput = input}
          style={styles.input}
        />
        <TouchableOpacity
			onPress={this.profile.bind(this)}
			style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            LOGIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomContainer}>
          <Text style={styles.forgotpasswordText}>
            Forgot your password?                    Sign up!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: '#1ea96b',
    paddingVertical: 15
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 40,
    fontWeight:'bold',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    fontWeight: '700'
  },
  bottomContainer: {
    padding:10
  },
  forgotpasswordText: {
    textAlign: 'left',
    fontSize: 15,
    color: "#000",
  },
})
