import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

export default class Barchart extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Chart Data
    const chartData = [
      {label: 'Milk', value: '200'},
      {label: 'News_Paper', value: '260'},
      {label: 'Cable Tv', value: '180'},
      {label: 'WaterCan', value: '140'},
    ];
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: 'column2d',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Monthly Sales',
          xAxisName: 'Product',
          yAxisName: 'Amount in Rupess',
          numberSuffix: 'rs',
          theme: 'fusion',
        },
        data: chartData,
      },
    };
    this.state = chartConfig;
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: 'file:///android_asset/fusioncharts.html',
      },
      ios: require('./assets/fusioncharts.html'),
    });
  }
  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../images/back2.png')}>
        <View style={styles.container}>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={this.state.type}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={this.state.dataSource}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },

  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 1,
  },
});
