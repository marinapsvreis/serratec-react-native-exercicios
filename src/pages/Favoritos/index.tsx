import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Icon, Button} from 'react-native-elements';

const Favoritos = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favoritos</Text>
    </View>     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#181717',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  text: {
    color: '#fff'
  }
});

export default Favoritos;
