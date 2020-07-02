import React from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Paid from './Paid';
import Unpaid from './Unpaid';

const FirstRoute = () => <View style={styles.scene1}></View>;

const SecondRoute = () => <View style={styles.scene2} />;

const initialLayout = {width: Dimensions.get('window').width};

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'paid'},
    {key: 'second', title: 'Unpaid'},
  ]);

  const renderScene = SceneMap({
    first: () => <Paid />,
    second: () => <Unpaid />,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene1: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scene2: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
});
