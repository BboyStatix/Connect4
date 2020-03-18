import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from "./Components/Header";
import Grid from "./Components/Grid";

const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <Grid />
    </SafeAreaView>
  );
}

export default App