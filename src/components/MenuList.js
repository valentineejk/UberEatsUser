//import liraries
import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

// create a component
const MenuList=({dishes}) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text style={styles.name}>{dishes.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{dishes.description}</Text>
                <Text style={styles.price}>$ {dishes.price}</Text>

            </View>

            {dishes.image&&<Image source={{uri: dishes.image}} style={styles.image} />
            }
        </View>
    );
};

// define your styles
const styles=StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
    },
    name: {
        fontWeight: "600",
        fontSize: 16,
        letterSpacing: 0.5,
    },
    description: {
        color: "gray",
        marginVertical: 10,
    },
    price: {
        fontSize: 16,

    },
    image: {
        height: 50,
        aspectRatio: 1,
    },
});

//make this component available to the app
export default MenuList;
