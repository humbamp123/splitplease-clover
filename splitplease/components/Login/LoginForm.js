import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

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

        <TouchableOpacity/>
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
  }
})
