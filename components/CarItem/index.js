import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import Button from '../StyledButton';

const CarItem = (props) => {

  const { name, tagLine, image, taglineCTA} = props.car;

  return (
    <View style={styles.carConatiner}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagLine}
        {' '}
        <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}> 
      <Button type="primary" content={"Custom Order"}
        onPress={() => {
          console.warn("Custom order was pressed")
        }}
      />
      <Button type="secondary" content={"exisiting inventory"}
        onPress={() => {
          console.warn("exisiting inventory was pressed")
        }}
      />
      </View>

    </View>
  );
};

export default CarItem;    