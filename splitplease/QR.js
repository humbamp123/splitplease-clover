'use strict';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

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
    alert(`Bar code with URL ${url} has been scanned!`);
    // TODO: Get m and o and p.
    this.props.navigation.goBack();
  }
}
