import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Componant, Styles & Constants Imports
import Colors from '../constants/Colors';
import AppButton from '../components/AppButton';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.gameOverTxt}>Game Over</Text>
            <View style={styles.txtContainer}>
                <Text style={styles.txt}>Number of Rounds: {props.roundsNumber}</Text>
                <Text style={styles.txt}>Number was: {props.userNumber}</Text>
            </View>
            <AppButton onPress={props.onRestart}>New Game</AppButton>
        </View>
    )
};

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        paddingBottom: 80
    },
    gameOverTxt: {
        fontFamily: 'VT323-Regular',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 200,
        color: Colors.primary,
        lineHeight: 160,
        padding: 0,
        margin: 0
    },
    txtContainer: {
        marginBottom: 40,
    },
    txt: {
        color: Colors.whiteTxt,
        fontSize: 20,
        textAlign: 'center'
    }
});

export default GameOverScreen;