import {Image,StyleSheet,Text,View} from 'react-native';




const RestaurantItem=({restaurant}) => {
    return (
        <View style={styles.restaurantsContainer}>
            <Image
                source={{uri: restaurant.image}}
                style={styles.image}
            />
            <View style={styles.row}>
                <View >

                    <Text style={styles.title}>
                        {restaurant.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
                    </Text>
                </View>
                <View style={styles.ratings}>
                    <Text>
                        {restaurant.rating}
                    </Text>
                </View>

            </View>


        </View>
    )
}

const styles=StyleSheet.create({

    restaurantsContainer: {
        width: '100%',
        marginVertical: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 5/3,
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,
    },
    subtitle: {
        color: "grey",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    ratings: {
        marginLeft: "auto",
        backgroundColor: "lightgray",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    }
});


export default RestaurantItem;
