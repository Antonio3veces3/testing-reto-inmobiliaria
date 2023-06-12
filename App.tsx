import React, {} from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <SafeAreaView style={styles.centeredView}>
      <RecipeList/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#1111'
  },
});

export default App;