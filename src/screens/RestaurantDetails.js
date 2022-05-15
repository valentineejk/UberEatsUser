import {StyleSheet,View,Text,Image,FlatList} from 'react-native';
import restaurants from '../../assets/data/restaurants.json'
import MenuList from '../components/MenuList';
import Detailsheader from './DetailsHeader';

const restaurant=restaurants[0];

const RestaurantDetails=() => {
    return (
        <View style={styles.page}>


            <FlatList
                ListHeaderComponent={() => <Detailsheader restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({item}) => <MenuList dishes={item} />}
            />

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
    }


});
export default RestaurantDetails
