import { StyleSheet } from 'react-native'






export default StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor:'#E4E5E4',
    },
    flatListView:
    {
        backgroundColor : 'white',
        borderRadius : 14,
         padding : 20,
        margin : 20,
        elevation: 12,
         flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productImage :
    {
       width: 120, 
       height: 120,
        borderRadius :20 
    },
    productContent :
    {
       // backgroundColor : 'red',
       width:200

    },
    productContentText :
    {
        fontSize: 18
    },
    tochableOpacity :
    {
        backgroundColor : '#00aeff',
        padding:8,
        margin : 2,
        top : 7,
        borderRadius : 14,
        elevation: 2.5
    }

});