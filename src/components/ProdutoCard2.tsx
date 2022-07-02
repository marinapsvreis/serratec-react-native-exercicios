import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-elements';
import { styles } from '../pages/Categoria'

export default function ProdutoCard(props:any){

  const [nomeImagem, setNomeImagem] = useState(props.produto.imagemProduto);

  const handlePress = () => {
    props.navigation.navigate({name:'Produto', params: {
      produto: props.produto
    }})
  }

  return(
    <TouchableOpacity onPress={handlePress}>
      <Card containerStyle={styles.recenteContainer}>
          <Card.Image
              source={{uri: `${nomeImagem}`}}
              style={{width: 280, height: 280}}
              width={undefined}
              height={undefined}
          />
          <Card.Divider />
          <Card.Title style={styles.textCardTitle}>{props.produto.nomeProduto}</Card.Title>
          <Text style={styles.textCardDescription}>Valor unitário: R$ {parseFloat(props.produto.precoProduto).toFixed(2).replace('.', ',')}</Text>
      </Card>
   </TouchableOpacity>
  )
}