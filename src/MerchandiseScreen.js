import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class MerchandiseScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Merchandise</Text>
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