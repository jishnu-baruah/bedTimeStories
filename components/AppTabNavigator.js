import React, { Component } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteScreen from '../screens/WriteScreen';
import ReadScreen from '../screens/ReadScreen';



export const TabNavigator = createBottomTabNavigator({
    Read: { screen: ReadScreen },
    Write: { screen: WriteScreen },
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
                const routeName = navigation.state.routeName;
                console.log(routeName)
                if (routeName === "Write") {
                    return (
                        <Image
                            source={require("../assets/write.png")}
                            style={{
                                width: 35, height: 35, alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        />
                    )

                }
                else if (routeName === "Read") {
                    return (
                        <Image
                            source={require("../assets/read.png")}
                            style={{
                                width: 40, height: 40, alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        />)

                }
            }
        })
    }
);

