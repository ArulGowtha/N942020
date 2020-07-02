import React from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import SearchBar from '../component/SearchBar';
import FlatlistView from '../component/FlatlistView';



const Paid = () => {
    return (

        <View style={{ flex: 10, backgroundColor: 'lightgrey' }}>

            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                <SearchBar />
            </View>
            
            <View style={{ flex: 8.5, backgroundColor: 'white' }}>
              
                <FlatlistView />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

});
export default Paid;