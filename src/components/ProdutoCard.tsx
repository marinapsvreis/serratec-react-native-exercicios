import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-elements';
import { styles } from '../pages/Home'

export default function ProdutoCard(props:any){

  const [nomeImagem, setNomeImagem] = useState(props.produto.imagemProduto)

  return(
    <TouchableOpacity onPress={() => console.log(`Produto ${props.nomeProduto} foi clicado`)}>
      <Card containerStyle={styles.recenteContainer}>
          <Card.Image
              source={{uri: `${nomeImagem}`}}
              style={{width: 120, height: 120}}
              width={undefined}
              height={undefined}
          />
          <Card.Divider />
          <Card.Title style={styles.textCardTitle}>{props.produto.nomeProduto}</Card.Title>
          <Text style={styles.textCardDescription}>{props.produto.descricaoProduto}</Text>
      </Card>
   </TouchableOpacity>
  )
}