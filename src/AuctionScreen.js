import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions,SafeAreaView } from 'react-native'

import {trendingData, viewedData, carouselData} from '../data/data';
import Carousel from './component/Carousel'

const width = Dimensions.get("window").width;

export default class AuctionScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            trendingData: [],
            viewedData: [],
        }
    }
    componentDidMount(){
        this.setState({
            trendingData: trendingData,
            viewedData: viewedData
        })
    }

    renderTrendingBids(){
        return(
            <ScrollView 
                horizontal={true}
                style={{width: width-20}} 
                >
                {this.state.trendingData.map((item) => (
                   <View style={styles.trendingContainer} >
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/vintage-eyeglasses.png')}
                                style={styles.gogglesImage}
                            />
                        </View>

                        <View>
                            <Text style={styles.trendingTitleStyle}>{item.title}</Text>
                            <Text style={styles.trendingSubTitleStyle}>Current bids: {item.currentBids}</Text>
                            <Text style={styles.trendingTitleStyle}>Market Price: {item.price}</Text>
                        </View>
                   </View>
                ))}
            </ScrollView>
        )
    }

    renderMostViewed(){
        return(
            <View >
                {this.state.viewedData.map((item) => (
                   <View style={styles.viewedContainer} >
                        <View style={styles.hammerContainer} >
                            <Image
                                source={require('../assets/hammer.png')}
                                style={styles.hammerImage}
                            />
                        </View>

                        <View style={styles.viewedTextContainer} >
                            <View style={styles.bidContainer} >
                                <View style={{ backgroundColor: 'black', width: 120, height: 50, borderRadius: 25, justifyContent: 'center',alignItems: 'center'}} >
                                    <Text style={{fontSize: 16, color: '#F5BA01'}}>Bid now</Text>
                                </View>
                            </View>

                            <View style={{position: 'relative', top: -30, marginLeft: 10}} >
                                <Text style={styles.titleStyle}>{item.title}</Text>
                                <Text style={styles.descriptionStyle}>{item.description}</Text>
                                <Text style={styles.titleStyle}>{item.price}</Text>
                                
                                <View style={styles.timer} >
                                      
                                        <View style={styles.timerContainer} >
                                            <Image
                                                source={require('../assets/clock.png')}
                                                style={styles.timerImage}
                                            />
                                            <Text style={styles.timerText}>04d 03h 15m 12s</Text>
                                        </View>
                             
                            </View>
                            </View>
                        </View>
                   </View>
                ))}
            </View>
        )
    }

    renderHeader(){
        return(
            <View style={styles.header} >
                <View style={styles.headerContainer}>
                    <View>
                        <Image
                            source={require('../assets/timer.png')}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <Text style={styles.heading} >E-Auctions</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../assets/bid.png')}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <Text style={styles.subHeading} >Me</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container} >
            
                <ScrollView>
                    {this.renderHeader()}
                    <View>
                        <Carousel data = {carouselData}/>
                    </View>

                    <Text style={styles.trendingTitle} >Most Trending Bids:</Text>
                    {this.renderTrendingBids()}

                    <Text style={styles.viewedTitle} >Most Viewed:</Text>
                    {this.renderMostViewed()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272A28', 
        flex:1
    },
    viewedTitle: {
        color: '#F5BA01',
        fontSize: 24, 
        marginLeft: 10, 
        marginTop: 10
    },
    trendingTitle: {
        color: '#F5BA01',
        fontSize: 24, 
        marginLeft: 10, 
        marginTop: 10
    },
    header: {
        height: 50, 
        justifyContent: 'center'
    },
    headerContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    image: {
        height: 40, 
        width: 40
    },
    heading: {
        color: '#F5BA01', 
        fontSize: 34, 
        fontWeight: 'bold', 
        marginLeft: 10
    },
    subHeading: {
        color: '#484848', 
        fontSize: 32, 
        fontWeight: 'bold',
        marginLeft: 10},
    viewedContainer: {
        backgroundColor: '#81827D', 
        borderRadius: 20, alignItems: 'center', 
        margin: 10, 
        width: width-30, 
        height: 300
    },
    hammerContainer: {
        height: 150, 
        width: width-30,
    },
    hammerImage: {
        width: width-30, 
        height: 200, 
        borderRadius: 20
    },
    viewedTextContainer: {
        height: 150, 
        width: width-30, 
        borderRadius: 20, 
        backgroundColor: '#F0B502'
    },
    bidContainer: {
        position: 'relative', 
        top: -20, 
        marginRight: 20, 
        alignItems: 'flex-end'
    },
    timerContainer: {
        backgroundColor: 'white', 
        width: 200, height: 30, 
        borderRadius: 25, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    timerImage: {
        width: 20,
        height: 20,
    },
    timerText: {
        fontSize: 16, 
        color: 'black'
    },
    timer: {
        position: 'relative', 
        top: -20, 
        marginRight: 30, 
        alignItems: 'flex-end'
    },
    titleStyle: {
        fontSize: 22, 
        marginTop: 4, 
        color: 'black', 
        fontWeight: 'bold'
    },
    descriptionStyle: {
        fontSize: 16, 
        marginTop: 4, 
        color: 'black'
    },
    trendingTitleStyle: {
        fontSize: 18, 
        color: '#F5BA01'
    },
    trendingSubTitleStyle: {
        fontSize: 18, 
        color: 'white'
    },
    gogglesImage: {
        height: 100, 
        width: 100
    },
    imageContainer: {
        backgroundColor: '#615326',
        marginBottom: 10,
        marginTop: 10, 
        height: 155, width: 180, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 20
    },
    trendingContainer: {
        backgroundColor: '#6E5717', 
        borderRadius: 20, 
        alignItems: 'center', 
        margin: 10, 
        width: 200, 
        height: 250
    },

})