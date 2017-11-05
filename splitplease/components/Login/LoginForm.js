import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username or Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            LOGIN
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
    marginBottom: 20,
    color: '#000000',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#1ea96b',
    paddingVertical: 15
  },
  buttonText: {
    color: '#000000',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 40,
    fontWeight:'bold',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }

})
