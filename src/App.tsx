import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Categorias from './pages/Categorias'
import Favoritos from './pages/Favoritos'
import Carrinho from './pages/Carrinho'
import { Icon } from 'react-native-elements';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return(
    <TabNavigation.Navigator screenOptions={{
      headerShown:false,
      tabBarStyle:{backgroundColor: '#4c4747', borderBottomWidth: 0, borderTopWidth: 0 },
      tabBarShowLabel: false
    }}>
      <TabNavigation.Screen
        name='HomeTabScreen'
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon 
              name='home'
              color={focused ? "#c763f5" : "#fff"}
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
          tabBarIcon: ({focused}) => (
            <Icon 
              name='magnify'
              color={focused ? "#c763f5" : "#fff"}
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
          tabBarIcon: ({focused}) => (
            <Icon 
              name='heart'
              color={focused ? "#c763f5" : "#fff"}
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
          tabBarIcon: ({focused}) => (
            <Icon 
              name='basket'
              color={focused ? "#c763f5" : "#fff"}
              type='material-community'
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
          tabBarBadge: 3
        }}
      />
    </TabNavigation.Navigator>
  );
}

const StackNavigation = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{
      headerShown:false}}>
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
};
