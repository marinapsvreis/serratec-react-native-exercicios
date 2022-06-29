import React, {useState, useContext} from 'react';
import {View, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import {Text, Input, Icon, Button} from 'react-native-elements';
import { AuthContext } from '../../context/AuthContext';

const Login = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);

  const handleLogin = async (email:string, senha:string) => {
    console.log(`Email: ${email} - Senha: ${senha}`)
    
    const respostaLogin = await login(email, senha);
    setLoading(false);
    if(!respostaLogin){
      Alert.alert(
        "Erro",
        "",
        [
          { text: "OK"},
          { text: "Não foi possivel realizar o login."},
        ]
      )
    }else{
      navigation.navigate('Home');
    }
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
      {isLoading === false ? <Button 
        buttonStyle={styles.button} 
        title="Login"
        titleStyle={styles.buttonTitle} 
        onPress={() => {handleLogin(email,senha); setLoading(true)}} 
        /> : <ActivityIndicator size="large" color="#fff"/>}
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
    backgroundColor:'#be0003',
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
