// React Componants Imports
import react, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
// Componant, Styles & Constants Imports
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';


const fetchFonts = () =>  {
  return Font.loadAsync({
    'JosefinSans-Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
    'JosefinSans-Regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
    'JosefinSans-Light': require('./assets/fonts/JosefinSans-Light.ttf'),
    'JosefinSans-Thin': require('./assets/fonts/JosefinSans-Thin.ttf'),
    'VT323-Regular': require('./assets/fonts/VT323-Regular.ttf')
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoading, setDataLoading] = useState(false);

  if(!dataLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoading(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  };

  const gameOverHandler = (numbOfRounds) => {
    setGuessRounds(numbOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen 
        usersChoice={userNumber} 
        onGameOver={gameOverHandler} 
      />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title='GUESS A NUMBER' />
      {content}
    </View>
  );
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
