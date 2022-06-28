import 'react-native-gesture-handler'
import React from 'react';
import Routes from './routes';
import { AuthProvider } from './context/AuthContext';

export default () => {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>   
  );
};
