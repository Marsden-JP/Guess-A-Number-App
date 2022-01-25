// React Componants Imports
import react, { useRef, useState, useEffect } from "react";
import { Text, View, Alert, StyleSheet } from 'react-native';
import NumberOutput from "../components/NumberOutput";
import { AntDesign } from '@expo/vector-icons';
// Componant, Styles & Constants Imports
import Card from "../components/Card";
import Colors from "../constants/Colors";
import AppButton from "../components/AppButton";


const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNum;
    }
};

const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumber(1, 100, props.usersChoice)
    );
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { usersChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === usersChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, usersChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < props.usersChoice) ||
            (direction === 'greater' && currentGuess > props.usersChoice)
        ) {
            Alert.alert('Come on!', 'You know this is wrong.', [
                { text: 'Sorry!', style: 'Cancel!' }
            ]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return (
        <View style={styles.gameScrContainer}>
            <Card>
                <Text style={styles.txtH3}>Opponent's Guess</Text>
                <NumberOutput>{currentGuess}</NumberOutput>
            </Card>
            <Card style={styles.inputContainer}>
                <View style={styles.btnContainer}>
                    <AppButton onPress={nextGuessHandler.bind(this, 'lower')} >
                        <AntDesign name="minus" size={24} color="black" />
                    </AppButton>
                    <AppButton onPress={nextGuessHandler.bind(this, 'greater')} >
                        <AntDesign name="plus" size={24} color="black" />
                    </AppButton>
                </View>
            </Card>
        </View>

    );
};

export const styles = StyleSheet.create({
    // GameScreen
    gameScrContainer: {
        flex: 1,
        paddingVertical: 40,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    inputContainer: {
        alignItems: 'center',
        width: 400,
        maxWidth: '90%',
        marginBottom:  100,
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    txtH3: {
        color: Colors.whiteTxt,
        textAlign: 'center'
    },
});

export default GameScreen;