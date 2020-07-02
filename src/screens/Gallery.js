// FocusresearchLabs  - Copyright – 2020
// @DevGowtham - 20/5/2020

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import gallery from '../data/gallery.json';
console.disableYellowBox = true;

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      data: [],
    };

    this.arrayholder = [];
  }
  // componentDidMount() {
  //   return fetch('D:gowthamReactNativeN942020srcdatagallery')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState(
  //         {
  //           isLoading: false,
  //           data: responseJson,
  //         },
  //         () => {
  //           this.arrayholder = responseJson;
  //         },
  //       );
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  // searchData(text) {
  //   const newData = this.arrayholder.filter((item) => {
  //     const itemData = item.name.toUpperCase();
  //     const textData = text.toUpperCase();
  //     return itemData.indexOf(textData) > -1;
  //   });

  //   this.setState({
  //     data: newData,
  //     text: text,
  //   });
  // }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <View style={{marginLeft: '12%'}}>
          <TextInput
            // onChangeText={(text) => this.searchData(text)}
            // value={this.state.text}
            // underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
        </View>
        <ScrollView>
          <ImageBackground
            style={{flex: 1}}
            source={require('../images/back2.png')}>
            <View style={styles.MainContainer}>
              <FlatList
                data={gallery}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({item}) => (
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image
                      source={{uri: item.image_url}}
                      style={styles.imageView}
                    />

                    <Text style={styles.textView}>{item.name}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={{marginTop: '20%'}}></View>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    marginTop: 20,
  },

  imageView: {
    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7,
  },

  textView: {
    width: '50%',
    textAlignVertical: 'center',
    marginLeft: '7%',
    fontSize: 16,
  },
});
