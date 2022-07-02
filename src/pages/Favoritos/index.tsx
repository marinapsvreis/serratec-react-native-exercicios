import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Touchable, TouchableOpacity, RefreshControl } from 'react-native';
import { Text, Input, Icon, Button, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import FavoritosCard from '../../components/FavoritosCard';
import { FavoritosContext } from '../../context/FavoritosContext';

const Favoritos = ({ navigation }) => {

  const { listarProdutos, resetFavoritos } = useContext(FavoritosContext);
  const [favoritos, setFavoritos] = useState();
  const [refreshing, setRefreshing] = useState(false);



  const getDadosFavoritos = async () => {
    setRefreshing(true);
    await setFavoritos(listarProdutos());
    setRefreshing(false);
  }

  const handlePress = () => {
    resetFavoritos();
  }

  useEffect(() => {
    getDadosFavoritos();
  }, [])

  return (
    <View style={styles.body}>
      <FlatList
        data={favoritos}
        keyExtractor={(k, i) => i.toString()}
        horizontal={false}
        numColumns={1}
        style={styles.produtosContainer}
        renderItem={response => <FavoritosCard produto={response.item} navigation={navigation} styles={styles} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getDadosFavoritos} />
        }
      />
      <Button onPress={handlePress} title={'Limpar Favoritos'} buttonStyle={styles.buttonLimpar} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#151515',
    padding: 16,
    height: '100%',
  },
  produtosContainer: {
    paddingBottom: 10,
    width: '100%',
  },
  produtoContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    height: 120,
    marginTop: 15,
  },
  leftSideCard: {
    width: '33%',
  },
  imagemProduto: {
    width: 100,
    height: 100,
  },
  rightSideCard: {
    flex: 1,
    flexDirection: 'row',
    width: '66%',
  },
  rightSideCardLeft: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
  },
  textCardTitle: {
    color: '#151515',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textCardValue: {
    color: '#151515',
    fontSize: 18,
  },
  rightSideCardRight: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  favoriteBtn: {

  },
  removeBtn: {
    marginTop: 8,
  },
  buttonLimpar: {
    backgroundColor: '#be0003',
    borderRadius: 10,
    padding: 18,
    marginTop: 70
  }
})

export default Favoritos;
