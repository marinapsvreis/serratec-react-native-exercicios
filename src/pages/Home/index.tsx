import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, FlatList, ActivityIndicator, TouchableOpacity, Keyboard } from 'react-native';
import { Text, Input, Icon, Image, Card } from 'react-native-elements';
import AxiosInstance from '../../api/AxiosInstance';
import ProdutoCard from '../../components/ProdutoCard'
import CategoriaCard from '../../components/CategoriaCard'
import { AuthContext } from '../../context/AuthContext'
import { CategoriaType } from '../../models/CategoriaType';
import { ProdutoType } from '../../models/ProdutoType';

const Home = ({navigation}) => {

    const [search, setSearch] = useState('');

    const { user } = useContext(AuthContext);
    // console.log('Params:' + JSON.stringify(route))
    // console.log('Token:' + token)
    const [categoria, setCategoria] = useState<CategoriaType[]>([]);
    const [produto, setProduto] = useState<ProdutoType[]>([]);

    const [isLoadingCategorias, setIsLoadingCategorias] = useState(true);
    const [isLoadingRecentes, setIsLoadingRecentes] = useState(true);

    useEffect(() => {
        getDadosCategoria();
        getDadosProduto();
    }, [])

    useEffect(() => {
        pesquisarCategoria(search);
    }, [search])

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

    const pesquisarCategoria = (search:any) => {
        if(search !== ''){
            setCategoria(
                categoria.filter(res => res.nomeCategoria.includes(search)),
              ); 
        } else {
            getDadosCategoria();
        }       
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                <View style={styles.searchBox}>
                    <Input
                        placeholder="ex: Produto x"
                        onChangeText={setSearch}
                        inputContainerStyle={styles.inputContainer}
                        value={search}
                        leftIcon={
                            <Icon
                                name="search"
                                color="#a49595"
                                type="font-awesome"
                                size={20}
                                containerStyle={styles.iconContainer}
                                tvParallaxProperties={undefined}
                            />
                        }
                        rightIcon={
                            <Image
                                source={require('../../assets/filter.png')}
                                style={{ width: 20, height: 20, marginRight: 10 }}
                                height={undefined}
                                width={undefined}
                            />
                        }
                        placeholderTextColor={'#a49595'}
                        autoCompleteType={undefined}
                    />
                </View>
                {isLoadingCategorias === true ? 
                <ActivityIndicator size="large" color="#fff"/>
                : <FlatList 
                    data={categoria} 
                    style={styles.categoriesContainer} 
                    horizontal={true}
                    renderItem={response => <CategoriaCard categoria={response.item} />} 
                /> }

                <Text style={styles.text2}>Recentes</Text>

                {isLoadingRecentes === true ?  
                <ActivityIndicator size="large" color="#fff"/>
                : <FlatList 
                    style={styles.recentesContainer} 
                    horizontal={true}
                    data={produto}
                    renderItem={response => <ProdutoCard produto={response.item} />}    
                />}
                <Text style={styles.text3}>Destaques</Text>
                <View>
                    <Image
                        source={require('../../assets/cardDestaques.png')}
                        style={{ width: 380, height: 300 }}
                        height={undefined}
                        width={undefined}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181717'
    },
    nav: {
        backgroundColor: '#4c4747',
        height: 50,
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        backgroundColor: '#242222',
        padding: 16
    },
    text: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 15
    },
    text2: {
        fontSize: 20,
        color: '#fff',
        marginTop: 15,
        marginBottom: 15
    },
    text3: {
        fontSize: 20,
        color: '#fff',
        marginTop: 15,
        marginBottom: 15
    },
    searchBox: {
        flexDirection: 'row'
    },
    inputContainer: {
        backgroundColor: '#fff',
        margin: -8,
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 5,
        height: 40
    },
    iconContainer: {
        padding: 10
    },
    categoriesContainer: {
        flexGrow: 0,
    },
    categoryContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#8e10e2',
        alignContent: 'center',
        justifyContent: 'center'
    },
    categoryButton: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    categoryText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
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
    },
    recentesContainer: {
        paddingBottom: 10,
    },
    recenteContainer: {
        borderRadius: 5,
        padding: 0,
        width: 120,
        height: 250
      },
    textCardTitle: {
        color: '#000000',
        textAlign: 'left',
        fontWeight: 'bold',
        paddingLeft: 10,
        height: 40
      },
    textCardDescription: {
        color: '#000000',
        textAlign: 'left',
        paddingLeft: 10
      },
    destaqueContainer: {
        width: 380,
        height: 150,
        backgroundColor: '#8e10e2',
    }
});

export default Home;