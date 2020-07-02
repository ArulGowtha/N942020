import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

const AdDisplay = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.Hulk}>Ad Display</Text>
        <Image style={styles.captain} source={require('../images/Ad.jpg')} />
        <Text style={styles.Thor}>KeyWords</Text>
        <View style={styles.backgroundStyle}>
          <TextInput
            placeholder="Grocery , Economy , Beverage"
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.IronMan}>
          <Button title="Save" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightgrey',
    height: 200,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: '3%',
  },

  inputStyle: {
    fontSize: 18,
    width: '100%',
    height: '100%',
  },
  IronMan: {
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: '12%',
  },
  captain: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 30,
  },
  Thor: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '12%',
  },
  Hulk: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%',
  },
});
export default AdDisplay;






<View
style={{
  flex: 1,
  alignContent: 'center',
  justifyContent: 'center',
  padding: 40,
}}>
 
<Dropdown
  labelFontSize={16}
  label="Delivery Schedule"
  fontSize={18}
  animationDuration={250}
  selectedItemColor="royalblue"
  value=""
  data={data}
/>
<Dropdown
  labelFontSize={16}
  label="Unit"
  fontSize={18}
  animationDuration={250}
  selectedItemColor="royalblue"
  value=""
  data={Unit}
/>
</View>
<View style={{marginLeft: '30%', marginRight: '30%'}}>
<CheckBox center title="Add Discount" checked={true} />
</View>
</View>



<ScrollView>
<View style={{flex: 10}}>
  <View>
    <Text style={styles.IronMan}>GroceryKit Economy </Text>
  </View>
  <View style={styles.Hulk}>
    {photo && <Image style={styles.Thor} source={{uri: photo.uri}} />}
  </View>
  <View style={styles.BlackPanther}>
    <Text style={{fontSize: 18}}>Attach photo</Text>
    <TouchableOpacity
      onPress={this.handleChoosePhoto}
      style={{marginLeft: '5%'}}>
      <Entypo name="attachment" size={30} />
    </TouchableOpacity>
    <Text style={{fontSize: 18, marginLeft: '15%'}}>Take photo</Text>
    <TouchableOpacity
      onPress={this.handleTakePhoto}
      style={{marginLeft: '5%'}}>
      <Entypo name="camera" size={30} />
    </TouchableOpacity>
  </View>
  <View
    style={{
      marginTop: '8%',
      marginLeft: '5%',
      marginRight: '30%',
      flex: 1,
      flexDirection: 'row',
    }}>
    <CheckBox center title="Type 1" checked={true} />
    <CheckBox center title="Type 2" checked={false} />
    <CheckBox center title="Type 3" checked={false} />
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
        style={{fontSize: 18}}
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
        style={{fontSize: 18}}
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
        style={{fontSize: 18}}
      />
    </View>
  </View>
  <View style={styles.WinterSolider}>
    <Button title="Proceed" />
  </View>
  <View style={{marginTop: '30%'}}></View>
</View>
</ScrollView>