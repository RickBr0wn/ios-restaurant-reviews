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
import {createBottomTabNavigator} from 'react-navigation-tabs'
import RestaurantList from 'components/restaurantList'
import RestaurantInfo from 'components/restaurantInfo'
import About from 'components/about'
import Icon from 'react-native-vector-icons/FontAwesome'

const List = createStackNavigator(
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
)

export default createAppContainer(
  createBottomTabNavigator(
    {
      List: {screen: List},
      About: {screen: About},
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({tintColor}) => {
          const route = navigation.state.routeName
          console.log('route', route)
          const name = {
            List: 'list',
            About: 'info-circle',
          }[route]
          return <Icon name={name} color={tintColor} size={22} />
        },
        tabBarOptions: {
          activeBackgroundColor: '#E6F0FA',
        },
      }),
    },
  ),
)
