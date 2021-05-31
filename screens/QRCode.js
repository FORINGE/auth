import React, { useState } from "react"
import {Button, View, StyleSheet, TextInput, ScrollView, Text, Image } from "react-native"

import firebase from "../database/firebase"
import UsersList from "./UsersList";

const QRCode = (props) => {
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

                <Text style={{color: '#fff', fontSize: 20, marginLeft: 70, marginTop: 50, fontWeight: "bold"}}>Для авторизации</Text>
                <Text style={{color: '#fff', fontSize: 20, marginLeft: 60, marginTop: 5, fontWeight: "bold"}}>сканируйте QR Code</Text>
                <Image style={{width: 255, height: 245, marginTop: 52, marginLeft: 13, overflow: 'hidden'}} source={require('../assets/qr.png')} />
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

export default QRCode

