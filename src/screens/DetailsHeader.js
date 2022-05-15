import React from 'react';
import restaurants from '../../assets/data/restaurants.json'

import {View,StyleSheet,Image,Text} from 'react-native';

const restaurant=restaurants[0];

const Detailsheader=({restaurant}) => {
    return (
        <View>
            <Image source={{uri: restaurant.image}} style={styles.image} />
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
                </Text>

                <Text style={styles.menuItem}>
                    Menu
                </Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 5/3,
    },
    page: {
        flex: 1,

    },
    title: {
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 10,
    },
    subtitle: {
        color: "gray",
        fontSize: 15,
    },
    container: {
        margin: 10,
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 10,
        position: 'absolute',
    },
    menuItem: {
        marginTop: 20,
        fontSize: 18,
        letterSpacing: 0.7,
    }
})

export default Detailsheader;
