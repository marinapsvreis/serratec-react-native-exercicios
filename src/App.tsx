import 'react-native-gesture-handler'
import React from 'react';
import Routes from './routes';
import { AuthProvider } from './context/AuthContext';
import CategoriaProvider from './context/CategoriaContext';
import { CarrinhoProvider } from './context/CarrinhoContext';
import { FavoritosProvider } from './context/FavoritosContext';

export default () => {
  return (
    <AuthProvider>
      <CategoriaProvider>
        <CarrinhoProvider>
          <FavoritosProvider>
            <Routes />
          </FavoritosProvider>
        </CarrinhoProvider>
      </CategoriaProvider>
    </AuthProvider>
  );
};
