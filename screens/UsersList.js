import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UsersList = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        firebase.db.collection("users").onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.docs.forEach((doc) => {
                const { name, email, phone } = doc.data();
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone,
                });
            });
            setUsers(users);
        });
    }, []);

    return (
        <ScrollView>
            <Button
                onPress={() => props.navigation.navigate("CreateUserScreen")}
                title="Create User"
            />
            {users.map((user) => {
                return (
                    <ListItem
                        key={user.id}
                        bottomDivider
                        onPress={() => {
                            props.navigation.navigate("UserDetailScreen", {
                                userId: user.id,
                            });
                        }}
                    >
                        <ListItem.Chevron />
                        <Avatar
                            source={{
                                uri:
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXalxSaQ4jN-zKBd4kSTrF19aqmp-Lxd_Qg&usqp=CAU",
                            }}
                            rounded
                        />
                        <ListItem.Content>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                );
            })}
        </ScrollView>
    );
};

export default UsersList;

