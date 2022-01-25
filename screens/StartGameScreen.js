// React Componants Imports
import react, { useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Alert,
    Keyboard,
    StyleSheet
} from 'react-native';
// Componant, Styles & Constants Imports
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberOutput from '../components/NumberOutput';
import AppButton from '../components/AppButton';
import HowToPlay from '../components/HowToPlay';

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false)
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number must be a number between 1 & 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        setConfirmed(true);
        setEnteredValue(chosenNumber);
        setSelectedNumber(parseInt(enteredValue));
        Keyboard.dismiss();
    };

    let confirmedOutput
    let viewHowToPlay

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={styles.txtH3}>You Selected</Text>
                <NumberOutput>{selectedNumber}</NumberOutput>
                <View style={styles.btn}>
                    <AppButton onPress={() => props.onStartGame(selectedNumber)} >
                        Start Game
                    </AppButton>
                </View>
            </Card>
        ) 
    } else {
        viewHowToPlay = (
            <HowToPlay/>
        )
    }

    return (

        <TouchableWithoutFeedback
            onPress={() => { Keyboard.dismiss() }}
        >
            <View style={styles.gameScrContainer}>
                <Text style={styles.gameScrTxt}>Start a New Game</Text>
                {confirmedOutput}
                <Card style={styles.inputContainer}>
                    <Text style={styles.txtH3}>Select a Number</Text>
                    <Input
                        style={styles.selectNumInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.btnContainer}>
                        {/* Reset Btn */}
                        <AppButton
                            title='Reset'
                            onPress={resetInputHandler}
                        >Reset</AppButton>

                        {/* Confirm Btn */}
                        <AppButton
                            title='Confirm'
                            onPress={confirmInputHandler}
                        >Confirm</AppButton>
                    </View>
                </Card>
                {viewHowToPlay}
            </View>
        </TouchableWithoutFeedback>
    );
};

export const styles = StyleSheet.create({
    summaryContainer: {
        marginBottom: 15,
        width: 400,
        maxWidth: '70%',
        alignItems: 'center',
    },
    txtH3: {
        color: Colors.whiteTxt,
        
    },
    gameScrContainer: {
        flex: 2,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: Colors.background,
    },
    gameScrTxt: {
        alignItems: 'center',
        fontSize: 20,
        color: Colors.whiteTxt,
        margin: 10,
        marginBottom: 20,
    },
    inputContainer: {
        alignItems: 'center',
        width: 400,
        maxWidth: '90%',
    },
    selectNumInput: {
        width: 40,
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.whiteTxt,
        fontSize: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
});

export default StartGameScreen;