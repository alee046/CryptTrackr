import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from './src/components';

export default class App extends Component {
    render() {
        return (
            <View>
                <Header/>
            </View>
        );
    }
}

