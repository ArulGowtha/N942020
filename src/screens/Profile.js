import React, {useState} from 'react';
import {View, StyleSheet, Button, ScrollView, SafeAreaView} from 'react-native';
import FlipToggle from 'react-native-flip-toggle-button';
import {Avatar, Text, ListItem} from 'react-native-elements';

const data = [
  {
    id: '5',
    Name: 'Gowtham',
    image: {source: require('../images/1.jpg')},
    Aadhar_Number: '5231236512364',
    Priority: 'Moderate',
    PhoneNumber: '9750331543',
    Earned_Score: '104',
    Delivery_Address: '164,Tower-37,DLF Garden City,Chennai',
    Delivery_Zone: 'T-37',
  },
];

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 10}}>
          <View
            style={{
              flex: 0.5,
              alignItems: 'flex-end',
              marginTop: '3%',
              marginRight: '2%',
            }}>
            <FlipToggle
              value={true}
              buttonWidth={87}
              buttonHeight={40}
              buttonRadius={40}
              sliderWidth={15}
              sliderHeight={15}
              sliderRadius={40}
              onLabel={'Active'}
              offLabel={'Deactive'}
              buttonOnColor="green"
              buttonOffColor="red"
              labelStyle={{color: 'white'}}
              onToggle={() => ` ${true ? 'on' : 'off'}`}></FlipToggle>
          </View>
          <View
            style={{
              flex: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar rounded source={require('../images/1.jpg')} size="xlarge" />
            <Text style={{marginTop: '2%'}} h4>
              Gowtham
            </Text>
          </View>
          <View style={{flex: 5.5, backgroundColor: 'white'}}>
            <ListItem
              title="Aadhar Number"
              titleStyle={{fontSize: 20}}
              rightTitle="2587463984598"
              bottomDivider
            />
            <ListItem
              title="Priority"
              rightTitle="Moderate"
              titleStyle={{fontSize: 20}}
              bottomDivider
            />
            <ListItem
              title="Phone Number"
              titleStyle={{fontSize: 20}}
              rightTitle="9750331543"
              bottomDivider
            />
            <ListItem
              title="Earned Score"
              rightTitle="104"
              titleStyle={{fontSize: 20}}
              bottomDivider
            />
            <ListItem
              title="Delivery Address"
              rightTitle="164,Tower-37,DLF Garden City,Porur,Chennai-6372001."
              titleStyle={{fontSize: 20}}
            />
            <View
              style={{
                marginLeft: '30%',
                marginRight: '30%',
                marginTop: '8%',
              }}>
              <Button title="cancel" color="red" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Profile;
