import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Categorias from '../pages/Categorias'
import Favoritos from '../pages/Favoritos'
import Carrinho from '../pages/Carrinho'
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

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
  return(
    <DrawerNavigation.Navigator screenOptions={{
      drawerStyle: { backgroundColor: '#242222'},
      drawerActiveTintColor: '#8e10e2',
      drawerInactiveTintColor: '#fff', }} >
      <DrawerNavigation.Screen 
        name="TabNavigationScreen"
        options={{
          title: 'Home', 
          headerStyle: { backgroundColor: '#4c4747'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
          },}} 
        component={BottomTabNavigator}
        
      />
      <DrawerNavigation.Screen 
        name="CategoriasDrawerScreen"
        options={{title: 'Categorias', 
        headerStyle: { backgroundColor: '#4c4747'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },}}
        component={Categorias}
      />
      <DrawerNavigation.Screen 
        name="FavoritosDrawerScreen"
        options={{title: 'Favoritos', 
        headerStyle: { backgroundColor: '#4c4747'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },}}
        component={Favoritos}
      />
      <DrawerNavigation.Screen 
        name="CarrinhoDrawerScreen"
        options={{title: 'Carrinho', 
        headerStyle: { backgroundColor: '#4c4747'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },}}
        component={Carrinho}
      />
    </DrawerNavigation.Navigator>
  );
}

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
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
          component={NavigationDrawer}
        />
        <StackNavigation.Screen 
          name='Categorias'
          component={NavigationDrawer}
        />
        <StackNavigation.Screen 
          name='Favoritos'
          component={NavigationDrawer}
        />
        <StackNavigation.Screen 
          name='Carrinho'
          component={NavigationDrawer}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}

export default Routes;