import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '../pages/Home'

export default function CategoriaCard(props:any){
  return(
      <TouchableOpacity style={styles.categoryButton}
        onPress={() => console.log(`Categoria ${props.categoria.nomeCategoria} foi clicada`)}>
          <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{props.categoria.nomeCategoria}</Text>
          </View>
      </TouchableOpacity>
  );
}