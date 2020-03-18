import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Game from "./Containers/Game";
import CurrentPlayerIndicator from "./Components/CurrentPlayerIndicator";

const App = () => {
  return (
    <SafeAreaView>
        <Game>
            {(
                gameState, setGameState,
                currentPlayer, setCurrentPlayer
            ) =>
                <>
                    <Header />
                    <Grid
                        gameState={gameState}
                        currentPlayer={currentPlayer}
                        setGameState={setGameState}
                        setCurrentPlayer={setCurrentPlayer}
                    />
                    <CurrentPlayerIndicator currentPlayer={currentPlayer}/>
                </>
            }
        </Game>
    </SafeAreaView>
  );
}

export default App