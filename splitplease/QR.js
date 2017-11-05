'use strict';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import URL from 'url-parse';
import queryString from 'query-string';
import { getQRinfo, writeReceiptData } from './Clover';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner onBarCodeRead={this._handleBarCodeRead}
                          style={StyleSheet.absoluteFill}/>
        </View>
      );
    }
  }

  _handleBarCodeRead = ({type, data}) => {
    if (type === 'QR_CODE') this.parseCloverUrl(data);
  }

  parseCloverUrl(url) {
    const query = queryString.parse(new URL(url).query);
    getQRinfo(query.m, query.o).then((response) => {
        this.props.navigation.navigate('ScanList', {'item':response})
        writeReceiptData(response, query.o)
    });
    this.props.navigation.goBack();
  }
}
