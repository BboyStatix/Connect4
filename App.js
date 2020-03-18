import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Game from "./Containers/Game";

const App = () => {
  return (
    <SafeAreaView>
        <Game>
            {(gameState, setGameState) =>
                <>
                    <Header />
                    <Grid gameState={gameState} setGameState={setGameState} />
                </>
            }
        </Game>
    </SafeAreaView>
  );
}

export default App