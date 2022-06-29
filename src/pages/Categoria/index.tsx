import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, View, Text} from 'react-native';
import { CategoriaType } from '../../models/CategoriaType';
import { ProdutoType } from '../../models/ProdutoType';
import AxiosInstance from '../../api/AxiosInstance';
import { AuthContext } from '../../context/AuthContext'
import ProdutoCard2 from '../../components/ProdutoCard2';
import { CategoriaContext } from '../../context/CategoriaContext';
import { Button } from 'react-native-elements/dist/buttons/Button';

const Categoria = ({route, navigation}) => {

  const [produto, setProduto] = useState<ProdutoType[]>([]);
  const [listaProdutosCategoria, setListaProdutosCategoria] = useState<ProdutoType[]>([]);
  const { user } = useContext(AuthContext);
  const [isLoadingRecentes, setIsLoadingRecentes] = useState(true);
  const {idCategoria, nomeCategoria, handleCategoria} = useContext(CategoriaContext);

  const getDadosProduto = async () => {
    AxiosInstance.get(
        '/produto', 
        {headers: {"Authorization" : `Bearer ${user.token}`}}
    ).then(result => {
        console.log('Dados dos produtos:' + JSON.stringify(result.data));
        setProduto(result.data);
        setIsLoadingRecentes(false);
    }).catch((error) => {
        console.log("Erro ao carregtar a lista de produtos - " + JSON.stringify(error))
    })
  }

  const limparContext = () => {
    handleCategoria(undefined)
  }

  useEffect(() => {
        getDadosProduto();      
    return () => limparContext();
  }, []);

  useEffect(() => {
    setListaProdutosCategoria(produto.filter(prod => prod.idCategoria === idCategoria));
  },[produto, idCategoria])

  return( 
  <View style={styles.container}>
    <Text style={styles.text}>Categoria {nomeCategoria}</Text>
    {isLoadingRecentes ?
    <ActivityIndicator size='large' color='#fff' />
    :
    <FlatList
        data={listaProdutosCategoria}
        horizontal={false}
        contentContainerStyle={styles.recentesContainer}
        renderItem={response => <ProdutoCard2 produto={response.item} />}
      />
    }
    <Button 
      buttonStyle={styles.button}
      title="Voltar"
      titleStyle={styles.buttonTitle}  
      onPress={() => navigation.navigate('CategoriasDrawerScreen')}/>
  </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 410,
    backgroundColor: '#181717'
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginTop: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor:'#be0003',
    padding: 18,
    marginTop: 70
  },
  buttonTitle:{
    fontSize: 18,
    fontWeight: 'bold'
  },  
  recentesContainer: {
    paddingBottom: 10,
    alignItems: 'center'
  },
  recenteContainer: {
      borderRadius: 5,
      padding: 10,
      width: 300,
      height: 400,
      alignItems: 'center'
  },
  textCardTitle: {
      color: '#000000',
      textAlign: 'center',
      fontWeight: 'bold',
      paddingLeft: 10,
      height: 40
  },
  textCardDescription: {
      color: '#000000',
      textAlign: 'center',
      paddingLeft: 10
  }
});

export default Categoria;
