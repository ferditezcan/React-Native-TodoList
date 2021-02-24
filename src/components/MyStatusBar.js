import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

export default class MyStatusBar extends Component {
    render() {
        return (
            <View style={{
                height: Constants.statusBarHeight,
                width:'100%'
            }}>
                <StatusBar style="Dark" backgroundColor="snow" />
            </View>
        )
    }
}
