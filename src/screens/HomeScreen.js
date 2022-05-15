import { StyleSheet, View, FlatList } from 'react-native';
import RestaurantItem from '../../src/components/RestaurantItem'
import restaurants from '../../assets/data/restaurants.json'


export default function App() {
    return (
        <View style={ styles.page }>
            <FlatList

                data={ restaurants }
                renderItem={ ({ item }) => <RestaurantItem
                    restaurant={ item }
                    keyExtractor={ id }
                /> }
                showsVerticalScrollIndicator={ false }
            />
        </View>
    );
}



const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
});
