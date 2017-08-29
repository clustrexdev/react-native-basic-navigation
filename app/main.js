import React, { Component } from 'react';
import {DrawerNavigator} from 'react-navigation'; 
import Home from './components/Home/Home.js';
import Notifications from './components/Notification/Notification.js'; 
import Phone from './components/Phone/Phone.js';
import Image from './components/Image/Image.js';
import Drawer from './components/Drawer/Drawer.js';


const AppDrawer = DrawerNavigator({
    Home: { screen: Home },
    Notifications: { screen: Notifications },
    Phone :{screen:Phone},
    Image :{screen:Image}
  },{
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <Drawer {...props} />
  });

export default AppDrawer;