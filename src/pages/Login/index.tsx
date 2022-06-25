import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Icon, Button} from 'react-native-elements';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (email, senha) => {
    console.log(`Email: ${email} - Senha: ${senha}`)
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{'Bem-vindo(a)'}</Text>
      <Input 
        placeholder="E-mail"
        onChangeText={setEmail}
        inputContainerStyle={styles.inputContainer}
        value={email}
        leftIcon={
          <Icon 
            name="user" 
            color="#a49595" 
            type="font-awesome" 
            size={24}
            containerStyle={styles.iconContainer2}
            />
        }
        placeholderTextColor={'#a49595'}
      />
      <Input
        secureTextEntry={true}        
        placeholder="Senha"
        onChangeText={setSenha}
        inputContainerStyle={styles.inputContainer}
        value={senha}
        leftIcon={
          <Icon 
            name="key" 
            color="#a49595" 
            type="font-awesome" 
            size={24}
            containerStyle={styles.iconContainer}
            />
        }
        placeholderTextColor={'#a295a4'}
      />
      <Button 
        buttonStyle={styles.button} 
        title="Login"
        titleStyle={styles.buttonTitle} 
        onPress={() => handleLogin(email,senha)} 
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#181717',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  titulo: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 70
  },
  inputContainer:{
    backgroundColor:'#fff',
    padding: 5,
    borderRadius: 10,
    margin: -8
  },
  iconContainer:{
    padding: 10
    
  },
  iconContainer2:{
    backgroundColor:'#fff',
    padding: 10,
    marginRight: 5
  },
  button: {
    backgroundColor:'#8e10e2',
    borderRadius: 10,
    padding: 18,
    marginTop: 70
  },
  buttonTitle:{
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default Login;
