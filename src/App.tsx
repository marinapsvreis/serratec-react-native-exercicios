import 'react-native-gesture-handler'
import React from 'react';
import Routes from './routes';
import { AuthProvider } from './context/AuthContext';
import CategoriaProvider from './context/CategoriaContext';

export default () => {
  return (
    <AuthProvider>
      <CategoriaProvider>
        <Routes/>
      </CategoriaProvider>      
    </AuthProvider>   
  );
};
