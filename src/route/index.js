import React from 'react'
import {Platform, Image} from 'react-native'
import {StackNavigator, TabNavigator} from 'react-navigation'

import Tab1 from './src/screens/Tab1'
import Tab2 from '../screens/Tab2'
import Tab3 from '../screens/Tab3'

const TabNavigation = TabNavigator({
    Tab1: {
        screen: Tab1
        navigationOptions: ({navigation}) => ({
                    title: 'TAB1',
                    tabBarLabel: 'TAB10',
                    tabBarIcon: ({tintColor}) => (
                        <Image
                            source={require('../assets/icons/joke.png')}
                            resizeMode='contain'
                            style={[styles.icon, {tintColor: '#00000'}]}
                        />
                    )
                })
            }
    },
    Tab2: {
        screen: Tab2
    },
    Tab3: {
        screen: Tab3
    }
}, {
    headerMode: 'none',
    navigationOptions: {
        header: null
    }
})

const styles = {
    listStyle: {
        flex: 1,
    },
    icon: {
        height: 20,
        width: 20
        resizeMode: 'contain'
    }
}

export default AppNavigation
