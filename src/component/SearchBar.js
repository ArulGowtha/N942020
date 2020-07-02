import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput placeholder="Search here" style={styles.inputStyle} />
      <Ionicons name="ios-search" style={styles.iconStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightgrey',
    height: 50,
    borderRadius: 7,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputStyle: {
    fontSize: 18,
    width: '80%',
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
