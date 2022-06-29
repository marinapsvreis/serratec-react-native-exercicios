import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, View, Text} from 'react-native';
import { CategoriaType } from '../../models/CategoriaType';
import AxiosInstance from '../../api/AxiosInstance';
import { AuthContext } from '../../context/AuthContext'
import CategoriaCard2 from '../../components/CategoriaCard2'

const Categorias = ({route, navigation}) => {

  const [categoria, setCategoria] = useState<CategoriaType[]>([]);
  const { user } = useContext(AuthContext);
  const [isLoadingCategorias, setIsLoadingCategorias] = useState(true);

  const getDadosCategoria = async () => {
    AxiosInstance.get(
        '/categoria', 
        {headers: {"Authorization" : `Bearer ${user.token}`}}
    ).then(result => {
        console.log('Dados das categorias:' + JSON.stringify(result.data));
        setCategoria(result.data);
        setIsLoadingCategorias(false);
    }).catch((error) => {
        console.log("Erro ao carregtar a lista de categorias - " + JSON.stringify(error))
    })
  }

  useEffect(() => {
        getDadosCategoria();
  }, []);

  return( 
  <View style={styles.container}>
     {isLoadingCategorias ?
     <ActivityIndicator size='large' color='#fff' />
     :
     <FlatList
         data={categoria}
         horizontal={false}
         contentContainerStyle={styles.categoriesContainer}
         renderItem={response => <CategoriaCard2 categoria={response.item} navigation={navigation} styles={styles} />}
     />
    }
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
  categoriesContainer: {
      alignItems: 'center'
  },
  categoryContainer: {
      padding: 10,
      width: 300,
      height: 300,
      backgroundColor: '#fff',
      alignItems: 'center'
  },
  categoryButton: {
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15
  },
  categoryText: {
      color: '#000',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 20,
      height: 50,
  },
  categoryTextTitle: {
      color: '#000000',
      textAlign: 'left',
      fontWeight: 'bold'
  },
  categoryTextDescription: {
      color: '#000000',
      textAlign: 'left',
      padding: 'auto'
  }
});

export default Categorias;
