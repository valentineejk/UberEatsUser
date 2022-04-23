import {StyleSheet,View} from 'react-native';
// import HomeScreen from './src/screens/HomeScreen'
import RestaurantDetails from './src/screens/RestaurantDetails'


export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantDetails />
    </View>
  );
}

import React from 'react'



const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
