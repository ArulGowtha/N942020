import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

class ProductSetup extends Component {
  render() {
    const {navigation} = this.props;
    let data = [
      {
        value: 'Default',
      },
      {
        value: 'Customized',
      },
    ];

    return (
      <View style={styles.Ironman}>
        <Dropdown
          labelFontSize={16}
          label="Subscription Group"
          fontSize={18}
          animationDuration={100}
          selectedItemColor="royalblue"
          value=""
          data={data}
        />
        <View style={styles.Captain}>
          <Button title="Enter" onPress={() => navigation.navigate('Drop')} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Ironman: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '8%',
    marginRight: '8%',
  },
  Captain: {
    marginTop: '20%',
    marginLeft: '30%',
    marginRight: '30%',
  },
});
export default ProductSetup;
