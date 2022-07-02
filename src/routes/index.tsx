import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React, { useContext } from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Categorias from '../pages/Categorias'
import Categoria from '../pages/Categoria'
import Favoritos from '../pages/Favoritos'
import Carrinho from '../pages/Carrinho'
import Produto from '../pages/Produto'
import { Icon, withBadge } from 'react-native-elements';
import { CarrinhoContext } from '../context/CarrinhoContext';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {

  const { contarQuantidadeProdutos } = useContext(CarrinhoContext);

  return (
    <TabNavigation.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#4c4747', borderBottomWidth: 0, borderTopWidth: 0 },
      tabBarShowLabel: false
    }}>
      <TabNavigation.Screen
        name='HomeTabScreen'
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon
              name='home'
              color={focused ? "#e05456" : "#fff"}
              type='material-community'
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name='CategoriasTabScreen'
        component={Categorias}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon
              name='clipboard-text'
              color={focused ? "#e05456" : "#fff"}
              type='material-community'
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name='FavoritosTabScreen'
        component={Favoritos}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon
              name='heart'
              color={focused ? "#e05456" : "#fff"}
              type='material-community'
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name='CarrinhoTabScreen'
        component={Carrinho}
        options={{
          tabBarLabel: '',
          tabBarBadge: contarQuantidadeProdutos(),
          tabBarIcon: ({ focused }) => (
            <Icon
              name='basket'
              color={focused ? "#e05456" : "#fff"}
              type='material-community'
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
    </TabNavigation.Navigator>
  );
}

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{
        headerShown: false
      }}>
        <StackNavigation.Screen
          name='Login'
          component={Login}
        />
        <StackNavigation.Screen
          name='Home'
          component={BottomTabNavigator}
        />
        <StackNavigation.Screen
          name='Categorias'
          component={BottomTabNavigator}
        />
        <StackNavigation.Screen
          name='Categoria'
          component={Categoria}
        />
        <StackNavigation.Screen
          name='Produto'
          component={Produto}
        />
        <StackNavigation.Screen
          name='Favoritos'
          component={BottomTabNavigator}
        />
        <StackNavigation.Screen
          name='Carrinho'
          component={BottomTabNavigator}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}

export default Routes;