import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Profile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        fontSize: 28
    }
})