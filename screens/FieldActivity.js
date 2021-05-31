import React, {useState} from "react"
import {View, StyleSheet, TextInput, ScrollView, Text, Image, Picker, TouchableOpacity } from "react-native"

const FieldActivity = (props) => {
    const [selectedValue, setSelectedValue] = useState("Управленческая деятельность")
    return (
        <ScrollView style={styles.container}>
            <View>
                <Image style={{width: 50, height: 50, marginTop: 52, marginLeft: 60, overflow: 'hidden'}} source={require('../assets/people.png')} />
                <Text style={{color: '#8a2be2', fontSize: 36, marginLeft: 120, marginTop: -50}}>Foringe</Text>
            </View>
            <View>
                <Text style={{fontSize: 14, marginTop: 102}}>С помощью своего профиля
                    вы можете находить людей и
                    новые карьерные возможности.</Text>
                <Text style={{marginTop: 30, fontSize: 14, marginLeft: 13, color: '#6D6D6D'}}>Сфера деятельности</Text>
               <View style={{ borderWidth: 1, borderRadius: 14, borderColor: '#8C0ECC', marginTop: 4}}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Управленческая деятельность" value="Управленческая деятельность" />
                    <Picker.Item label="Операционная деятельность в сфере
                    бизнеса и финансов" value="Операционная деятельность в сфере
                    бизнеса и финансов" />
                    <Picker.Item label="Компьютеры и вычислительная
                    деятельность" value="Компьютеры и вычислительная
                    деятельность" />
                    <Picker.Item label="Архитектура и инжиниринг" value="Архитектура и инжиниринг" />
                    <Picker.Item label="Деятельность в сфере науки о жизни,
                    естествознания и социальных наук" value="Деятельность в сфере науки о жизни,
                    естествознания и социальных наук" />
                    <Picker.Item label="Общинная и общественная работа" value="Общинная и общественная работа" />
                    <Picker.Item label="Юридическая деятельность" value="Юридическая деятельность" />
                    <Picker.Item label="Медицина и здравоохранение" value="Медицина и здравоохранение" />
                </Picker>
               </View>
                <Text style={{marginTop: 30, fontSize: 14, marginLeft: 17, color: '#6D6D6D'}}>Статус занятости </Text>
                <View style={{ borderWidth: 1, borderRadius: 14, borderColor: '#8C0ECC', marginTop: 4}}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Занятый" value="Занятый" />
                    <Picker.Item label="Не занятый" value="Не занятый" />
                </Picker>
                </View>
            </View>

            <View style={{marginTop: 13}}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Enter')}}
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

export default FieldActivity

