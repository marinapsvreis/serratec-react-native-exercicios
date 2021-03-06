import React, { useContext, useState } from 'react';

import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { CategoriaContext } from '../context/CategoriaContext';
import { styles } from '../pages/Home'

export default function CategoriaCard(props:any){

  const [nomeImagem, setNomeImagem] = useState(props.categoria.nomeImagem)
  const { handleCategoria } = useContext(CategoriaContext);

  const handlePress = () => {
    handleCategoria(props.categoria)
    props.navigation.navigate('Categoria')
  }

  return(
      <TouchableOpacity style={styles.categoryButton}
        onPress={handlePress}>
          <View style={styles.categoryContainer}>
              <Image 
                source={{uri: nomeImagem}}
                style={{width: 120, height: 120}}/>
              <Text style={styles.categoryText}>{props.categoria.nomeCategoria}</Text>
          </View>
      </TouchableOpacity>
  );
}