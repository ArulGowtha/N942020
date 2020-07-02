import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Avatar, ListItem, Card, Image} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      quan: 1,
    };
  }

  render() {
    let data = [
      {
        value: 'Daily',
      },
      {
        value: 'Weekly',
      },
      {
        value: 'Monthly',
      },
      {
        value: 'Yearly',
      },
    ];
    return (
      <ScrollView>
        <View>
          <View style={styles.co}>
            <View style={styles.container}>
              <Text style={{fontSize: 25}}>Renewel</Text>
              <Picker style={styles.ironMan}>
                <Picker.Item label="Monthly" value="Monthly" />
                <Picker.Item label="Yearly" value="Yearly" />
              </Picker>
            </View>
            <View style={styles.captain}>
              <Text style={{fontSize: 25}}>Total amount</Text>
              <View
                style={{
                  backgroundColor: 'lightgreen',
                  width: '50%',
                }}>
                <Text style={{fontSize: 20, marginLeft: '20%'}}>Rs. 100</Text>
              </View>
            </View>
          </View>
          <Card title="Avin Milk">
            <View style={styles.blackWidow}>
              <View style={styles.hawkEye}>
                <Text style={{fontSize: 20, marginLeft: '5%'}}>20% off</Text>
              </View>
              <View style={styles.hawkEye}>
                <Text style={{fontSize: 20, marginLeft: '20%'}}>Rs.60</Text>
              </View>
            </View>

            <Image source={require('../images/avin.jpg')} style={styles.Hulk} />
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{fontSize: 18, marginLeft: '10%', marginTop: '5%'}}>
                Quantity
              </Text>
              <TouchableOpacity
                style={{marginLeft: '15%', marginTop: '5%'}}
                onPress={() =>
                  this.setState({
                    quan: this.state.quan > 1 ? this.state.quan - 1 : 1,
                  })
                }>
                <AntDesign name="minus" size={24} />
              </TouchableOpacity>
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 30,
                  paddingRight: 30,
                  marginTop: '5%',
                }}>
                <Text style={{fontSize: 18}}>{this.state.quan}</Text>
              </View>
              <TouchableOpacity
                style={{marginRight: '15%', marginTop: '5%'}}
                onPress={() => this.setState({quan: this.state.quan + 1})}>
                <MaterialIcons name="add" size={24} />
              </TouchableOpacity>
            </View>
          </Card>
          <Card title="Amul Ice cream">
            <View style={styles.blackWidow}>
              <View style={styles.hawkEye}>
                <Text style={{fontSize: 20, marginLeft: '5%'}}>15% off</Text>
              </View>
              <View style={styles.hawkEye}>
                <Text style={{fontSize: 20, marginLeft: '20%'}}>RS.40</Text>
              </View>
            </View>
            <Image source={require('../images/amul.jpg')} style={styles.Hulk} />
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{fontSize: 18, marginLeft: '10%', marginTop: '5%'}}>
                Quantity
              </Text>
              <TouchableOpacity
                style={{marginLeft: '15%', marginTop: '5%'}}
                onPress={() =>
                  this.setState({
                    quantity:
                      this.state.quantity > 1 ? this.state.quantity - 1 : 1,
                  })
                }>
                <AntDesign name="minus" size={24} />
              </TouchableOpacity>
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 30,
                  paddingRight: 30,
                  marginTop: '5%',
                }}>
                <Text style={{fontSize: 18}}>{this.state.quantity}</Text>
              </View>
              <TouchableOpacity
                style={{marginRight: '15%', marginTop: '5%'}}
                onPress={() =>
                  this.setState({quantity: this.state.quantity + 1})
                }>
                <MaterialIcons name="add" size={24} />
              </TouchableOpacity>
            </View>
          </Card>
          <View style={{marginTop: '20%'}}></View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '50%',
  },
  co: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '2%',
  },
  captain: {flex: 1, alignItems: 'center'},
  ironMan: {
    height: 40,
    width: 130,
    backgroundColor: 'lightgreen',
    marginLeft: '3%',
  },
  thor: {backgroundColor: 'lightgreen', width: '28%'},
  Hulk: {
    width: 200,
    height: 200,
    marginLeft: '20%',
    marginTop: '1%',
  },
  blackWidow: {flexDirection: 'row', justifyContent: 'space-around'},
  hawkEye: {backgroundColor: 'cornflowerblue', width: '28%'},
});
export default Items;
