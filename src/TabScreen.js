
import * as React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import MoviesScreen from './MoviesScreen'
import AuctionScreen from './AuctionScreen';
import MerchandiseScreen from './MerchandiseScreen';
import ProfileScreen from './ProfileScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


const TabScreen = () => {
    return (
        <Tab.Navigator
          initialRouteName="E-Auction"
          activeColor="#F5BA01"
        >
          <Tab.Screen
            name="Movies"
            component={MoviesScreen}
            options={{
              tabBarLabel: 'Movies',
              tabBarColor: '#272A28',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="movie-open-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="E-Auction"
            component={AuctionScreen}
            options={{
              tabBarLabel: 'E-Auction',
              tabBarColor: '#272A28',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="currency-usd-circle-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Merchandise"
            component={MerchandiseScreen}
            options={{
              tabBarLabel: 'Merchandise',
              tabBarColor: '#272A28',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="tshirt-v-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#272A28',
              tabBarIcon: ({ color }) => (
                <Ionicons name="md-person-outline" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default TabScreen
