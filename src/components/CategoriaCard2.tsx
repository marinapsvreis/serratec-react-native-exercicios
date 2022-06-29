import React, { useState, useContext } from 'react';
import { CategoriaContext } from '../context/CategoriaContext';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '../pages/Categorias'

export default function CategoriaCard2(props:any){

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
                style={{width: 240, height: 240}}/>
              <Text style={styles.categoryText}>{props.categoria.nomeCategoria}</Text>
          </View>
      </TouchableOpacity>
  );
}