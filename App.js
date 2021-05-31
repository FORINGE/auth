import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createDrawerNavigator} from "@react-navigation/drawer"
import {NavigationContainer} from "@react-navigation/native"

import Enter from "./screens/Enter"
import Register from "./screens/Register"
import Welcome from "./screens/Welcome"
import FieldActivity from "./screens/FieldActivity"
import QRCode from "./screens/QRCode";


const globalScreenOptions = {
    headerStyle: {backgroundColor: '#A1006A'}
}

const Drawer = createDrawerNavigator()



export default function App() {
return (
      <NavigationContainer>
          <Drawer.Navigator screenOptions={globalScreenOptions}>

              <Drawer.Screen name='Вход' component={Enter}/>
              <Drawer.Screen name='Регистрация' component={Register}/>
              <Drawer.Screen name='QRCode' component={QRCode}/>
              <Drawer.Screen name='Сфера деятельности' component={FieldActivity}/>
              <Drawer.Screen name='Профиль' component={Welcome}/>



          </Drawer.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
