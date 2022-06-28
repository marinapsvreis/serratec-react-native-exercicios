import React from "react";
import AxiosInstance from "../api/AxiosInstance";
import jwt_decode from 'jwt-decode';

const LoginService = async (email: string, senha: string) => {
  console.log(`LoginService.Email: ${email}`)
  console.log(`LoginService.Senha: ${senha}`)
  var tokenDecodificado:any = null;

  try{
      const response = await AxiosInstance.post('autenticacao',{
        email,
        senha
      });

      if(response.status === 200){
        console.log('Resposta do Login Service: ' + JSON.stringify(response.data));
        tokenDecodificado = jwt_decode(response.data.token);
        tokenDecodificado['token'] = response.data.token;
        return tokenDecodificado;
      }else{
        return false;
      }
  }catch(error){
    console.log('Erro: ' + JSON.stringify(error))
    return false;
  }
}

export {LoginService};