import React from "react";

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, Image } from "react-native-elements";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { FavoritosContext } from "../../context/FavoritosContext";

const Produto = ({ route, navigation }: any) => {
    const { produto } = route.params;
    console.log("Produto: " + JSON.stringify(produto));

    const { adicionarProduto } = React.useContext(CarrinhoContext);
    const { adicionarProdutoFavoritos } = React.useContext(FavoritosContext);

    const handleAddProduto = () => {
        adicionarProduto(
            produto.sku,
            produto.nomeProduto,
            produto.descricaoProduto,
            produto.precoProduto,
            produto.imagemProduto
        )
    }

    const handleAddProduto2 = () => {
        adicionarProdutoFavoritos(
            produto.sku,
            produto.nomeProduto,
            produto.descricaoProduto,
            produto.precoProduto,
            produto.imagemProduto
        )
    }

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Detalhes Produto</Text>
            <View style={styles.containerProduto}>
                <View style={styles.containerCard}>
                    <View style={styles.leftSide}>
                        <Image
                            source={{ uri: produto.imagemProduto }}
                            style={styles.image}
                            width={undefined}
                            height={undefined}
                        />
                    </View>
                    <View style={styles.rightSide}>
                        <Text style={styles.nomeProduto}>{produto.nomeProduto}</Text>
                        <Text style={styles.precoProduto}>Valor: R$ {produto.precoProduto},00</Text>
                        <TouchableOpacity style={styles.button} onPress={handleAddProduto}>
                            <Text style={styles.buttonText}>COMPRAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleAddProduto2}>
                            <Text style={styles.buttonText}>FAVORITAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Button onPress={() => navigation.navigate('Home')} buttonStyle={styles.button2} title='Voltar' titleStyle={styles.buttonText} />
        </View>
    )
}
export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#181717',
        justifyContent: 'space-between',
    },
    title: {
        color: 'aliceblue',
        fontSize: 32,
        textAlign: 'center',
        marginTop: 10
    },
    containerProduto: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCard: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    leftSide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
    },
    image: {
        width: 150,
        height: 180,
        borderRadius: 10,
    },
    rightSide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 10,
        width: '50%',
    },
    nomeProduto: {
        color: 'aliceblue',
        fontSize: 18,
        textAlign: 'center',
    },
    precoProduto: {
        color: 'aliceblue',
        marginTop: 8,
        fontSize: 18,
    },
    button: {
        flex: 0,
        backgroundColor: '#be0003',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button2: {
        flex: 0,
        backgroundColor: '#be0003',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
});

export default Produto;