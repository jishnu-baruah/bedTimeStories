import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Image
                    style={styles.Logo}
                    source={require('../assets/logo.png')}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('AppTabNavigator')}
                >
                    <Text style={styles.submitButtonText}>Start</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Logo: {
        width: 250,
        height: 200,
    },
    submitButton: {
        backgroundColor: '#3d7bf9',
        width: 150,
        height: 50,
        margin: 20,
        borderRadius: 20
        // paddingTop: 20
    },
    submitButtonText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    },
});