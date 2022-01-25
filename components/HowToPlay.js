import react from "react";
import { Text, View, StyleSheet } from 'react-native';
import Colors from "../constants/Colors";
import Card from "./Card";

const HowToPlay = (props) => {
    return (
        <Card style={styles.howToContainer}>
            <Text style={styles.howToTitle}>How to Play</Text>
            <Text style={styles.howToBodyTxt}>
                1. Enter a number between 1 and 99 and press confirm 
                when you are ready. If you make a mistake and would like 
                to reset, do so by pressing the 'reset' button. {'\n'}{'\n'}
                2. Your chosen number is displayed on the screen, press 
                'start game' and let the computer guess your chosen number. {'\n'}{'\n'}
                3. Tap the lower and greater icons to give hints and guide the 
                computer to your answer. {'\n'}{'\n'}
                4. Keep going until the 'Game Over' screen shows you the stats.</Text>
        </Card>
    )
};

export const styles = StyleSheet.create ({
    howToContainer: {
        width: 400,
        maxWidth: '90%',
        marginTop: 40,
        paddingHorizontal: 20,
    },
    howToTitle: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    },
    howToBodyTxt: {
        color: Colors.whiteTxt,
        borderLeftWidth: 2,
        borderColor: Colors.primary,
        paddingLeft: 20,
        marginBottom: 10
    },
    haveFunTxt: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 20,
        marginTop: 15
    }
})

export default HowToPlay;