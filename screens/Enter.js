import React, { useState } from "react"
import {Button, View, StyleSheet, TextInput, ScrollView, Text, Image } from "react-native"

import firebase from "../database/firebase"
import UsersList from "./UsersList"

const Enter = (props) => {
    const [state, setState] = useState({
        phone: '',
        password: ''
    })

    const handleChangeText = (phone, value) => {
        setState({...state, [phone]: value})
    }

    const saveNewUser = async () => {
        if (state.phone === '') {
            alert('Введите Ваш номер телефона')
        } else {
            try {
                await firebase.db.collection('users').add({
                    phone: state.phone,
                    password: state.password

                })
                props.navigation.navigate("UsersList")
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
    <ScrollView style={styles.container}>
        <View>
            <Image style={{width: 50, height: 50, marginTop: 52, marginLeft: 60, overflow: 'hidden'}} source={require('../assets/people.png')} />
            <Text style={{color: '#fff', fontSize: 36, marginLeft: 120, marginTop: -50}}>Foringe</Text>
        </View>

            <View>
                <Text style={{fontSize: 24, marginLeft: 100, marginTop: 66, color: '#fff'}}>ВХОД</Text>
                <TextInput
                    style={{marginTop: 30, borderBottomWidth: 1, backgroundColor: '#ccc', borderRadius: 14, padding: 7}}
                    placeholder='    Номер телефона'
                    onChangeText={(value) => handleChangeText( "phone", value)}
                    value={state.phone}
                />
            </View>
        <View>
            <TextInput
                style={{marginTop: 11, borderBottomWidth: 1, backgroundColor: '#ccc', borderRadius: 14, padding: 7 }}
                placeholder='    Пароль'
                onChangeText={(value) => handleChangeText("password", value)}
                value={state.password}
                underlineColorAndroid="transparent"
            />
        </View>
        <View style={{marginTop: 25, borderRadius: 14 }}>
            <Button
                style={{borderRadius: 190, borderWidth: 1, color: '#5397FA'}}
                title="Вход" onPress={() => saveNewUser()} />
        </View>

            <View style={{marginTop: 13}}>
                <Button title="Регистрация" onPress={() => saveNewUser()} />
            </View>


            <Text style={{marginTop: 17, color: '#C5DCFF', textAlign: 'center' }}>Забыли пароль?</Text>
        <View>
            <Image style={{width: 120, height: 1, marginTop: 50, marginLeft: -10, overflow: 'hidden'}} source={require('../assets/line.png')} />
            <Image style={{width: 120, height: 1, marginTop: 0, marginLeft: 180, overflow: 'hidden'}} source={require('../assets/line.png')} />
            <Text style={{marginTop: -11, color: '#C5DCFF', textAlign: 'center' }}>или</Text>
        </View>

        <View style={{marginTop: 13}}>
            <Button
                title="Подключен на другом устройстве"
                color="#8a2be2"
                onPress={() => saveNewUser()} />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: '#8a2be2'
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

export default Enter

