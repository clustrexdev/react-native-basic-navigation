import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'; 
import AppDrawer from './main.js';
import ListItemData from './components/ListItem.js';
import ListEnd from './components/ListEnd.js';

const basicTemplate = StackNavigator({
  AppDrawer: { screen: AppDrawer },
  ListItemData : {screen:ListItemData},
  LastNavigation:{screen:ListEnd}
  },
  {
      initialRouteName: "AppDrawer",
      headerMode: "none",
  });

  export default basicTemplate;
