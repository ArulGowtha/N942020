import React, {Component} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  TouchableOpacity,
  Text,
  Linking,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

class QrScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scan: false,
      ScanResult: false,
      result: null,
    };
  }

  onSuccess = (e) => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);
    this.setState({
      result: e,
      scan: false,
      ScanResult: true,
    });
    if (check === 'http') {
      Linking.openURL(e.data).catch((err) =>
        console.error('An error occured', err),
      );
    } else {
      this.setState({
        result: e,
        scan: false,
        ScanResult: true,
      });
    }
  };

  activeQR = () => {
    this.setState({
      scan: true,
    });
  };
  scanAgain = () => {
    this.setState({
      scan: true,
      ScanResult: false,
    });
  };
  render() {
    const {scan, ScanResult, result} = this.state;
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../images/back2.png')}>
        <View style={styles.ViewStyle}>
          {!scan && !ScanResult && (
            <View style={styles.cardView}>
              <Text style={styles.descText}>Take your BarCode</Text>

              <TouchableOpacity
                onPress={this.activeQR}
                style={styles.buttonTouchable}>
                <Text style={{fontSize: 18}}>Click to Scan !</Text>
              </TouchableOpacity>
            </View>
          )}

          {ScanResult && (
            <View style={styles.card}>
              <Text style={styles.descText}>Result </Text>
              <Text style={styles.result}>Type : {result.type}</Text>
              <Text style={styles.result}>Result : {result.data}</Text>
              <Text numberOfLines={1} style={styles.result}>
                RawData: {result.rawData}
              </Text>
              <TouchableOpacity
                onPress={this.scanAgain}
                style={styles.buttonTouchable}>
                <Text style={styles.descText}>Click to Scan again!</Text>
              </TouchableOpacity>
            </View>
          )}

          {scan && (
            <QRCodeScanner
              reactivate={true}
              showMarker={true}
              ref={(node) => {
                this.scanner = node;
              }}
              onRead={this.onSuccess}
              bottomContent={
                <View style={styles.scanView}>
                  <TouchableOpacity onPress={() => this.scanner.reactivate()}>
                    <Text style={{fontSize: 18}}>Re Start Scan</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => this.setState({scan: false})}>
                    <Text style={styles.scanText}>Stop Scan</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          )}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
  },
  cardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTouchable: {
    marginTop: '15%',
  },
  descText: {
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: '5%',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
  },
  result: {
    fontSize: 18,
    marginLeft: '5%',
    marginTop: '3%',
  },
  scanText: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: '5%',
  },
  scanView: {
    alignItems: 'center',
  },
});

export default QrScan;
