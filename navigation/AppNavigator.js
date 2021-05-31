import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"

import FeedScreen from "../screens/footer/FeedScreen"

import {createStackNavigator} from "react-navigation-stack"

const _FeedNavigator = createStackNavigator({
    Feed: {
        screen: FeedScreen,
        navigationOptions: {
            title: 'Профиль'
        }
    },
})
const _MessageNavigator = createStackNavigator({
    Feed: {
        screen: FeedScreen,
        navigationOptions: {
            title: 'Профиль'
        }
    },
})

const AppNavigator = createBottomTabNavigator({

    Feed: {
        screen: _FeedNavigator,
        navigationOptions: {
            title: 'Профиль'
        }
    },
    Message: {
        screen: _MessageNavigator,
        navigationOptions: {
            title: 'Сообщения'
        }
    }
}, {
    initialRouteName: 'Сообщения'
    }
    )


