// FocusresearchLabs  - Copyright – 2020
// @DevGowtham - 19/5/2020

import React, {Component} from 'react';
import {Dropdown} from 'react-native-material-dropdown';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';
import {CheckBox, Image} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import ActionSheet from 'react-native-actionsheet';

console.disableYellowBox = true;
const option = [
  'Cancel',
  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
    <Text style={{fontSize: 18, color: 'royalblue'}}>Choose from Gallery</Text>
    <TouchableOpacity style={{marginLeft: '5%'}}>
      <Entypo name="image" size={30} />
    </TouchableOpacity>
  </View>,
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{fontSize: 18, color: 'royalblue'}}>Take Photo</Text>
    <TouchableOpacity style={{marginLeft: '12%'}}>
      <Entypo name="camera" size={30} />
    </TouchableOpacity>
  </View>,
  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
    <Text style={{fontSize: 18, color: 'royalblue'}}>Search Product</Text>
    <TouchableOpacity style={{marginLeft: '5%'}}>
      <Ionicons name="md-search" size={40} />
    </TouchableOpacity>
  </View>,
  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
    <Text style={{fontSize: 18, color: 'royalblue'}}>Scan Barcode</Text>
    <TouchableOpacity style={{marginLeft: '7%'}}>
      <MaterialCommunityIcons name="barcode-scan" size={30} />
    </TouchableOpacity>
  </View>,
];

class Drop extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  };
  state = {
    photo: null,
  };

  render() {
    const {navigation} = this.props;
    const {photo} = this.state;
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
    let Unit = [
      {
        value: 'Liter',
      },
      {
        value: 'Kilogram',
      },
    ];

    return (
      <ScrollView>
        <ImageBackground
          style={{flex: 11}}
          source={require('../images/back2.png')}>
          <View style={{flex: 10}}>
            <View>
              <Text style={styles.IronMan}>GroceryKit Economy</Text>
            </View>
            <View style={styles.Hulk}>
              {photo && <Image style={styles.Thor} source={{uri: photo.uri}} />}
            </View>
            <View style={styles.BlackPanther}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={this.showActionSheet}>
                <Text style={{fontSize: 18}}>Add Photo</Text>
                <Entypo style={{marginLeft: '5%'}} name="camera" size={30} />
              </TouchableOpacity>
              <ActionSheet
                ref={(o) => (this.ActionSheet = o)}
                title={
                  <Text style={{fontSize: 18}}>Which one you Choose ?</Text>
                }
                options={option}
                cancelButtonIndex={0}
                destructiveButtonIndex={4}
                onPress={(index) => {
                  if (index == 1) {
                    const options = {
                      noData: true,
                    };
                    ImagePicker.launchImageLibrary(options, (response) => {
                      if (response.uri) {
                        this.setState({photo: response});
                      }
                    });
                  } else if (index == 2) {
                    const Camoptions = {
                      noData: true,
                    };
                    ImagePicker.launchCamera(Camoptions, (response) => {
                      if (response.uri) {
                        this.setState({photo: response});
                      }
                    });
                  } else if (index == 3) {
                    navigation.navigate('Gallery');
                  } else if (index == 4) {
                    navigation.navigate('QrScan');
                  }
                }}
              />
            </View>
            <View
              style={{
                marginTop: '8%',
                marginLeft: '5%',
                flex: 1,
                flexDirection: 'row',
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <CheckBox center title="Type 1" checked={true} />
                <CheckBox center title="Type 2" checked={false} />
                <CheckBox center title="Type 3" checked={false} />
              </ScrollView>
            </View>
            <View>
              <Text style={styles.captain}>Description</Text>
              <TextInput
                placeholder="Enter your Description"
                style={styles.BlackWidow}
              />
            </View>
            <View style={styles.Drstrange}>
              <Dropdown
                labelFontSize={16}
                label="Delivery Schedule"
                fontSize={18}
                animationDuration={200}
                selectedItemColor="royalblue"
                value=""
                data={data}
              />
            </View>
            <View style={styles.AntMan}>
              <View style={styles.SpiderMan}>
                <Text style={styles.ScarlettWitch}>Quantity</Text>
              </View>
              <View style={styles.HawkEye}>
                <TextInput
                  placeholder="Enter No Quantity"
                  style={styles.Textinput}
                />
              </View>
            </View>
            <View style={styles.Drstrange}>
              <Dropdown
                labelFontSize={16}
                label="Unit"
                fontSize={18}
                animationDuration={100}
                selectedItemColor="royalblue"
                value=""
                data={Unit}
              />
            </View>
            <View style={styles.AntMan}>
              <View style={styles.SpiderMan}>
                <Text style={styles.ScarlettWitch}>Price</Text>
              </View>
              <View style={styles.HawkEye}>
                <TextInput
                  placeholder="Enter the Amount"
                  style={styles.Textinput}
                />
              </View>
            </View>
            <View style={styles.AntMan}>
              <View style={styles.SpiderMan}>
                <Text style={styles.ScarlettWitch}>*Discount</Text>
              </View>
              <View style={styles.HawkEye}>
                <TextInput
                  placeholder="If available enter"
                  style={styles.Textinput}
                />
              </View>
            </View>
            <View style={styles.WinterSolider}>
              <Button title="Proceed" color="aquamarine" border />
            </View>
            <View style={{marginTop: '30%'}}></View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  IronMan: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  captain: {
    marginLeft: '5%',
    fontSize: 18,
    marginTop: '8%',
  },
  Thor: {
    width: 150,
    height: 150,
    marginTop: '5%',
    borderRadius: 30,
  },
  Hulk: {flex: 1, alignItems: 'center'},
  BlackWidow: {
    fontSize: 18,
    width: '90%',
    height: 80,
    alignSelf: 'center',
    marginTop: '5%',
    borderBottomWidth: 1,
  },
  HawkEye: {width: '60%'},
  Drstrange: {marginLeft: '5%', marginRight: '5%', marginTop: '2%'},
  SpiderMan: {
    height: 50,
    width: '35%',
  },
  AntMan: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '5%',
    alignItems: 'center',
    marginTop: '5%',
  },
  ScarlettWitch: {
    fontSize: 18,
    marginTop: '6%',
    marginLeft: '2%',
  },
  BlackPanther: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '8%',
    justifyContent: 'center',
  },
  WinterSolider: {
    marginTop: '10%',
    marginLeft: '30%',
    marginRight: '30%',
  },
  Vision: {
    flex: 1,
    flexDirection: 'row',
  },
  Textinput: {
    fontSize: 18,
    borderBottomWidth: 1,
  },
});

export default Drop;
