import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={item.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: 120,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    image: {
        width: width - 20,
        height: 120,
        borderRadius: 10,
        resizeMode: 'cover'
        
    },
})

export default CarouselItem