import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Image, Icon } from 'react-native-elements';
import { FavoritosContext } from '../context/FavoritosContext';

export default function FavoritosCard(props: any) {

    const { removerItemFavoritos } = React.useContext(FavoritosContext);

    const handleFavorite = () => {
        return null; // TODO
    }

    const handleRemove = () => {
        removerItemFavoritos(props.produto);
    }

    return (
        <View style={props.styles.produtoContainer}>
            <View style={props.styles.leftSideCard}>
                <Image
                    source={{ uri: props.produto.imagem_produto }}
                    style={props.styles.imagemProduto}
                    width={undefined}
                    height={undefined}
                />
            </View>
            <View style={props.styles.rightSideCard}>
                <View style={props.styles.rightSideCardLeft}>
                    <Text style={props.styles.textCardTitle}>{props.produto.nome_produto}</Text>
                    <Text style={props.styles.textCardValue}>R$ {parseFloat(props.produto.preco_produto).toFixed(2).replace('.', ',')}</Text>
                </View>
                <View style={props.styles.rightSideCardRight}>
                    <TouchableOpacity onPress={handleFavorite} style={props.styles.favoriteBtn}>
                        <Icon name='heart' color='#151515' type='font-awesome' size={30} tvParallaxProperties={undefined} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRemove} style={props.styles.removeBtn}>
                        <Icon name='trash' color='#151515' type='font-awesome' size={30} tvParallaxProperties={undefined} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}