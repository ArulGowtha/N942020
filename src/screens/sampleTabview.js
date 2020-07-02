
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Button

} from 'react-native';
import { TabBar } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from './ProductDetails';
import ProductStyles from './ProductStyles';
import Groceryprodetails from './Grocerryprodetails';
import Petprodetails from './Petprodetails';


const Essential = () => {
  return (
    <View style={ProductStyles.container}>
      <FlatList
        data={ProductDetails}
        renderItem={({ item }) => {
          return <View style={ProductStyles.flatListView}>
            <View>
              <Image
                source={item.imagePath}
                style={ProductStyles.productImage}
              />
              <TouchableOpacity style={ProductStyles.tochableOpacity}>
                <Text>Subscription</Text>
              </TouchableOpacity>
            </View>
            <View style={ProductStyles.productContent}>
              <Text style={ProductStyles.productContentText}>
                {item.name}</Text>
              <Text> <Icon name="sticky-note" color="#00aeff" size={12} />{item.description}</Text>
              <Text> <Icon name="star" color="#00aeff" size={12} />{item.renewalType}</Text>

            </View>
          </View>
        }}
      />
    </View>
  )

};


const Grocerry = () => {
  return (
    <View style={ProductStyles.container}>
      <FlatList
        data={Groceryprodetails}
        renderItem={({ item }) => {
          return <View style={ProductStyles.flatListView}>
            <View>
              <Image
                source={item.imagePath}
                style={ProductStyles.productImage}
              />
              <TouchableOpacity style={ProductStyles.tochableOpacity}>
                <Text>Subscription</Text>
              </TouchableOpacity>
            </View>
            <View style={ProductStyles.productContent}>
              <Text style={ProductStyles.productContentText}>
                {item.name}</Text>
              <Text> <Icon name="sticky-note" color="#00aeff" size={12} />{item.description}</Text>
              <Text> <Icon name="star" color="#00aeff" size={12} />{item.renewalType}</Text>

            </View>
          </View>
        }}
      />
    </View>
  )
};
const Pet = () => {
  return (
    <View style={ProductStyles.container}>
      <FlatList
        data={Petprodetails}
        renderItem={({ item }) => {
          return <View style={ProductStyles.flatListView}>
            <View>
              <Image
                source={item.imagePath}
                style={ProductStyles.productImage}
              />
              <TouchableOpacity style={ProductStyles.tochableOpacity}>
                <Text>Subscription</Text>
              </TouchableOpacity>
            </View>
            <View style={ProductStyles.productContent}>
              <Text style={ProductStyles.productContentText}>
                {item.name}</Text>
              <Text> <Icon name="sticky-note" color="#00aeff" size={12} />{item.description}</Text>
              <Text> <Icon name="star" color="#00aeff" size={12} />{item.renewalType}</Text>

            </View>
          </View>
        }}
      />
    </View>
  )
};

const Pharma = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#E4E5E4',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <TouchableOpacity style={{
        bottom: 30
      }}>
        <Text style={{
          textAlign: 'center',
          backgroundColor: '#00aeff',
          padding: 10,
          borderRadius: 14,
          fontSize: 20
        }}>Dental</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{
          textAlign: 'center',
          backgroundColor: '#00aeff',
          padding: 10,
          borderRadius: 14,
          fontSize: 20
        }}>Cardioic</Text>
      </TouchableOpacity>
    </View>

  )
};

const Cable = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#E4E5E4',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <TouchableOpacity style={{
        bottom: 30
      }}>
        <Text style={{
          textAlign: 'center',
          backgroundColor: '#00aeff',
          padding: 10,
          borderRadius: 14,
          fontSize: 20
        }}>Sun Direct</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{
          textAlign: 'center',
          backgroundColor: '#00aeff',
          padding: 10,
          borderRadius: 14,
          fontSize: 20
        }}>Videocon</Text>
      </TouchableOpacity>
    </View>

  )
};

const Car = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#E4E5E4',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <TouchableOpacity style={{
        bottom: 30
      }}>
        <Text style={{
          textAlign: 'center',
          backgroundColor: '#00aeff',
          padding: 10,
          borderRadius: 14,
          fontSize: 20
        }}>Oil wash</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{
          textAlign: 'center',
          backgroundColor: '#00aeff',
          padding: 10,
          borderRadius: 14,
          fontSize: 20
        }}>Water Wash</Text>
      </TouchableOpacity>
    </View>

  )
}


const Tab = createMaterialTopTabNavigator();

function MyTabview() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Present"
        tabBarOptions={{
          activeTintColor: "#2F7C6E",
          inactiveTintColor: "#222222"

        }}
        tabBar={props => (
          <TabBar
            activeColors={'black'}
            activeTabBackgrounds={'#00aeff'}
            {...props}

          />
        )}
      >
        <Tab.Screen name="Essential" component={Essential}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="cart-arrow-down"
                size={24}
                // color={focused ? color : "#222222"}
                focused={focused}
                color={'black'}
              />
            )
          }} />
        <Tab.Screen name="Grocerry" component={Grocerry}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="cart-plus"
                size={24}
                // color={focused ? color : 'green'}
                focused={focused}
                color={'black'}
              />
            )
          }} />
        <Tab.Screen name="Pet" component={Pet}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="cat"
                size={24}
                // color={focused ? color : 'green'}
                focused={focused}
                color={'black'}
              />
            )
          }} />
        <Tab.Screen name="Pharma" component={Pharma}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="briefcase-medical"
                size={24}
                // color={focused ? color : 'green'}
                focused={focused}
                color={'black'}
              />
            )
          }} />
        <Tab.Screen name="Cable" component={Cable}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="bezier-curve"
                size={24}
                // color={focused ? color : 'green'}
                focused={focused}
                color={'black'}
              />
            )
          }} />
        <Tab.Screen name="Car Wash" component={Car}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="car"
                size={24}
                // color={focused ? color : 'green'}
                focused={focused}
                color={'black'}
              />
            )
          }} />


      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default MyTabview;