import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import  CarList  from './components/CarsList';
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* view is the same thing as a div */}

      {/* <CarItem 
        name={"Model 3"}
        tagLine={"Starting from $99,000"}
        taglineCTA={"Touchless Delivery"}
        image={require('./assets/images/Model3.jpeg')}
      /> */}
      <CarList style={styles.CarList} />
      <StatusBar style="auto" />
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
