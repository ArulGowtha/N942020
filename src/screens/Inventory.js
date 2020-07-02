// FocusresearchLabs  - Copyright – 2020
// @DevGowtham - 3/6/2020

import React, {Component} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

export default class Inventory extends Component {
  state = {
    backgroundColor: '',
  };
  changeColor() {
    this.setState({backgroundColor: 'royalblue'});
  }
  constructor() {
    super();
    this.state = {
      content: false,
    };
  }

  componentHideAndShow = () => {
    this.setState((previousState) => ({
      content: !previousState.content,
    }));
  };

  render() {
    let data = [
      {
        value: 'Default',
      },
      {
        value: 'Customized',
      },
    ];

    return (
      <ScrollView>
        <ImageBackground
          style={{flex: 10}}
          source={require('../images/back2.png')}>
          <View style={styles.Drop}>
            <Dropdown
              labelFontSize={16}
              label="Subscription Group"
              fontSize={18}
              animationDuration={100}
              selectedItemColor="royalblue"
              value=""
              data={data}
            />
            <View style={{backgroundColor: this.state.backgroundColor}}>
              <TouchableOpacity
                style={styles.Categroy}
                onPress={this.componentHideAndShow}>
                <Text style={{fontSize: 18}}> Milk</Text>
              </TouchableOpacity>

              {
                // Display the content in screen when state object "content" is true.
                // Hide the content in screen when state object "content" is false.
                this.state.content ? (
                  <View>
                    <View style={styles.Hideview}>
                      <Text style={styles.Hidetext}> Blue </Text>
                      <Text style={styles.Hidetext}>30</Text>
                    </View>
                    <View style={styles.Hideview}>
                      <Text style={styles.Hidetext}> Green </Text>
                      <Text style={styles.Hidetext}>40</Text>
                    </View>
                    <View style={styles.Hideview}>
                      <Text style={styles.Hidetext}> Orange </Text>
                      <Text style={styles.Hidetext}>60</Text>
                    </View>
                    <View style={styles.Button}>
                      <Button
                        title="Distribute"
                        color="aquamarine"
                        border
                        onPress={() => this.changeColor()}
                        style={{backgroundColor: this.state.backgroundColor}}
                      />
                    </View>
                  </View>
                ) : null
              }
            </View>
            <View>
              <TouchableOpacity style={styles.Categroy}>
                <Text style={{fontSize: 18}}> Eggs</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.Categroy}>
                <Text style={{fontSize: 18}}> Bread</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.Categroy}>
                <Text style={{fontSize: 18}}> Magazines</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.Categroy}>
                <Text style={{fontSize: 18}}> Chees</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: '100%'}}></View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Drop: {
    flex: 1,
    marginTop: '10%',
    marginLeft: '8%',
    marginRight: '8%',
  },
  Categroy: {alignItems: 'center', marginTop: '15%'},
  Button: {
    marginTop: '10%',
    marginLeft: '30%',
    marginRight: '30%',
  },
  Hidetext: {
    fontSize: 18,
    marginTop: '5%',
  },
  Hideview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
