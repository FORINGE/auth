import React, { useState } from "react"
import {Button, View, StyleSheet, TextInput, ScrollView, Text, Image, ImageBackground, TouchableOpacity } from "react-native"

import firebase from "../database/firebase"
import UsersList from "./UsersList"
import Enter from "./Enter";


const Welcome = (props) => {
       return (
        <ScrollView style={styles.container}>
            <View>
                <Image style={{width: 50, height: 50, marginTop: 52, marginLeft: 60, overflow: 'hidden'}} source={require('../assets/people.png')} />
                <Text style={{color: '#8a2be2', fontSize: 36, marginLeft: 120, marginTop: -50}}>Foringe</Text>
            </View>

            <View>
                <Text style={{fontSize: 24, marginLeft: 40, marginTop: 66, color: '#8C0ECC'}}>Добро пожаловать
                    </Text>
                <Text style={{fontSize: 24, marginLeft: 70, marginTop: -1, color: '#8C0ECC'}}>
                    Александр!</Text>
                <Text style={{fontSize: 14, marginTop: 7}}>Заполните свой профиль, установите контакт
                    со своими знакомыми и общайтесь с
                    ними на интересующие вас темы.</Text>
                <Text style={{marginTop: 30, fontSize: 14, marginLeft: 17, color: '#6D6D6D'}}>Номер телефона</Text>
                <TextInput
                    style={{marginTop: 4, borderBottomWidth: 1, backgroundColor: '#F7F8F9', borderRadius: 14, padding: 7}}
                    placeholder='   +7 (903) 711-34-40'
                />
                <Text style={{marginTop: 30, fontSize: 14, marginLeft: 17, color: '#6D6D6D'}}>Эл. почта</Text>
                <TextInput
                    style={{marginTop: 4, borderBottomWidth: 1, backgroundColor: '#F7F8F9', borderRadius: 14, padding: 7}}
                    placeholder='   mmaching6688'
                />
            </View>

            <View style={{marginTop: 13}}>
                <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('Enter')}}
                    style={{marginTop: 20,
                        width: 291,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 30,
                        backgroundColor: '#8C0ECC'}}>
                    <Text style={{fontSize: 14, color: '#fff'}}>Далее</Text>

                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: '#fff'
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",

    },
    loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Welcome

