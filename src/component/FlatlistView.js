import React from 'react';
import { Text, View, StyleSheet , TouchableOpacity} from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const userData = [{name:'Jeeva Raj',},
                  {name:'Ananth Palani'},
                  {name:'venkat Veera'},
                  {name:'Rahul Jag'},
                  {name:'Muruga John'},
                  {name:'Durai Govind'},
                  {name:'Jagan Manikam'},
                  {name:'Gokul George'},
                  {name:'Sabrish Dinesh'},
                  {name:'kumar Bharath'},
                  {name:'Vinoth Rajan'},
                  {name:'Venkat Rajan'},]


const displayData = ({item}) => {
    return(
        <View style={styles.renderStyle}>
            <TouchableOpacity style={styles.opacityStyle}>
    <Text style={styles.textStyle}>{item.name}</Text>
    <Entypo name='message' style={styles.callIcon} color='orange' />
    <Ionicons name='ios-call'  style={styles.callIcon} color='green' />
    </TouchableOpacity>
    </View>
    );
}                  


const FlatlistView = () => {
    return (
        <View style={styles.flatStyle}>
           <FlatList 
           keyExtractor = {userData  => userData.name}
           data = {userData}
           renderItem = {displayData}
           />
        </View>

    );
}

const styles = StyleSheet.create({
    flatStyle: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    renderStyle : {
        flex:1,
    },

    opacityStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        marginHorizontal:18,
        marginBottom:'10%',
        height:'80%'


    },
    textStyle:{
        width:'40%',
        fontSize:20,
        marginLeft:'2%',
        alignSelf:'center'
    },
    callIcon: {
        fontSize:30,
        marginRight:'5%',
        alignSelf:'center'
    },

});
export default FlatlistView;