/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import RestaurantList from 'components/restaurantList'
import RestaurantInfo from 'components/restaurantInfo'

export default createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: RestaurantList,
        navigationOptions: {
          headerShown: false,
        },
      },
      Info: {
        screen: RestaurantInfo,
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0066cc',
        },
        headerTintColor: '#fff',
      },
    },
  ),
)
