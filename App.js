import { StyleSheet, View } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen'
// import RestaurantDetails from './src/screens/RestaurantDetails'
import DishDetail from './src/screens/DishDetail';


export default function App() {
  return (
    <View style={ styles.container }>
      {/* <RestaurantDetails /> */ }
      <DishDetail />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
