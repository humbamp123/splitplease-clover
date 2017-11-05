import React, { Component } from 'react';
import { StyleSheet, View, Image, AppRegistry, Text, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Profile extends React.Component {

  qrScanner() {
    this.props.navigation.navigate('Scan');
  }
	render(){
		return(
			<ScrollView style={styles.container}>
				<View style={[styles.textTitle1, styles.textTitle2]}>
					<Text style={styles.textStyle}>U.O.ME</Text>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>$58</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.textTitle1}>
					<Text style={styles.textStyle}>I.O.U</Text>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>$124</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	textTitle1: {
		flex: 1,
		height: 200,
		backgroundColor: "#90EE90"
	},
	textTitle2: {
		backgroundColor: "#FF8784"
	},
	textStyle: {
		fontSize: 30,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight:'bold',
	},
	button: {
    marginTop: 10,
    marginBottom: 10,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 5,
		shadowOpacity: 1.0,
	},
	buttonText: {
		fontSize: 40,
		textAlign: 'center',
		fontWeight:'bold',
		fontWeight: '700'
	}
});
