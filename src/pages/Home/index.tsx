import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Input, Icon, Image, Card } from 'react-native-elements';

const Home = () => {

    const [search, setSearch] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Image
                    source={require('../../assets/menuHamburguer.png')}
                    style={{ width: 20, height: 20 }}
                    width={undefined}
                    height={undefined}
                />
                <Text style={styles.text}>Delivery</Text>
            </View>
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
                <ScrollView style={styles.categoriesContainer} horizontal={true}>
                    <TouchableOpacity style={styles.categoryButton} onPress={() => console.log('Categoria 1 foi clicada')}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryText}>Categoria 1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton} onPress={() => console.log('Categoria 2 foi clicada')}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryText}>Categoria 2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton} onPress={() => console.log('Categoria 3 foi clicada')}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryText}>Categoria 3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton} onPress={() => console.log('Categoria 4 foi clicada')}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryText}>Categoria 4</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                <Text style={styles.text2}>Recentes</Text>

                <ScrollView style={styles.recentesContainer} horizontal={true}>
                    <TouchableOpacity onPress={() => console.log('Recentes 1 foi clicado')}>
                        <Card containerStyle={styles.recenteContainer}>
                            <Card.Image
                                source={require('../../assets/image.png')}
                                style={{width: 120, height: 120}}
                                width={undefined}
                                height={undefined}
                            />
                            <Card.Divider />
                            <Card.Title style={styles.textCardTitle}>Título</Card.Title>
                            <Text style={styles.textCardDescription}>Descrição</Text>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Recentes 2 foi clicado')}>
                        <Card containerStyle={styles.recenteContainer}>
                            <Card.Image
                                source={require('../../assets/image.png')}
                                style={{width: 120, height: 120}}
                                width={undefined}
                                height={undefined}
                            />
                            <Card.Divider />
                            <Card.Title style={styles.textCardTitle}>Título</Card.Title>
                            <Text style={styles.textCardDescription}>Descrição</Text>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Recentes 3 foi clicado')}>
                        <Card containerStyle={styles.recenteContainer}>
                            <Card.Image
                                source={require('../../assets/image.png')}
                                style={{width: 120, height: 120}}
                                width={undefined}
                                height={undefined}
                            />
                            <Card.Divider />
                            <Card.Title style={styles.textCardTitle}>Título</Card.Title>
                            <Text style={styles.textCardDescription}>Descrição</Text>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Recentes 4 foi clicado')}>
                        <Card containerStyle={styles.recenteContainer}>
                            <Card.Image
                                source={require('../../assets/image.png')}
                                style={{width: 120, height: 120}}
                                width={undefined}
                                height={undefined}
                            />
                            <Card.Divider />
                            <Card.Title style={styles.textCardTitle}>Título</Card.Title>
                            <Text style={styles.textCardDescription}>Descrição</Text>
                        </Card>
                    </TouchableOpacity>
                </ScrollView>
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

const styles = StyleSheet.create({
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
        height: 210
      },
    textCardTitle: {
        color: '#000000',
        textAlign: 'left',
        fontWeight: 'bold',
        paddingLeft: 10
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