import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Scroller extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>Good Morning</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: 200,
  },
});

export default Scroller;
