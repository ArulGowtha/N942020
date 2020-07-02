import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
  state = {
    photo: null,
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  handleTakePhoto = () => {
    const Camoptions = {
      noData: true,
    };
    ImagePicker.launchCamera(Camoptions, (response) => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  render() {
    const {photo} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#E4E5E4'}}>
        <View style={{flex: 1 / 15}}>
          <Text style={{fontSize: 20, padding: 8, textAlign: 'center'}}>
            Display Ad
          </Text>
        </View>

        <View style={{flex: 1 / 1.9}}>
          <View
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              top: 25,
              borderRadius: 14,
              borderWidth: 1,
              backgroundColor: 'white',
            }}>
            {photo && (
              <Image
                source={{uri: photo.uri}}
                style={{width: 200, height: 200, borderRadius: 14}}
              />
            )}
          </View>
          <View style={{top: 50}}>
            <TouchableOpacity
              onPress={this.handleChoosePhoto}
              style={{
                alignSelf: 'center',
                backgroundColor: '#D6DFDB',
                borderRadius: 14,
                elevation: 2,
              }}>
              <Text style={{padding: 5}}>Choose a Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleTakePhoto}
              style={{
                alignSelf: 'center',
                backgroundColor: '#D6DFDB',
                borderRadius: 14,
                top: 10,
                elevation: 2,
              }}>
              <Text style={{padding: 5}}>Take a Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1 / 2}}>
          <Text style={{fontSize: 20, textAlign: 'center', top: 20}}>
            keywords
          </Text>
          <TextInput
            placeholder={'Enter the keywords...'}
            style={{
              alignSelf: 'center',
              top: 30,
              height: 150,
              width: 250,
              backgroundColor: '#D6DFDB',
              borderRadius: 14,
              elevation: 2,
            }}
          />
          <TouchableOpacity
            style={{
              top: 60,
              backgroundColor: '#00aeff',
              alignSelf: 'center',
              width: 150,
              borderRadius: 14,
            }}>
            <Text style={{textAlign: 'center', padding: 4, fontSize: 18}}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
