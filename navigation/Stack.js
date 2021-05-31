import {StatusBar} from "expo-status-bar"
import React from "react";
import {View, Text, StyleSheet} from "react-native-web"
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import UsersList from "../screens/UsersList";
import CreateUserScreen from "../screens/CreateUserScreen";
import UserDetailScreen from "../screens/UserDetailScreen";
import {Button} from "react-native";

const Stack = createStackNavigator()

function myStack({navigation}) {
    return (
        <View>
        <Stack.Navigator>
            <Button style={{flex: 1}} title='<' onPress={() => navigation.toggleDrawer()} />
            <Stack.Screen name='UsersList' component={UsersList} />
            <Stack.Screen name='CreateUserScreen' component={CreateUserScreen} />
            <Stack.Screen name='UserDetailScreen' component={UserDetailScreen} />
        </Stack.Navigator>
        </View>
    )
}

export default Stack
