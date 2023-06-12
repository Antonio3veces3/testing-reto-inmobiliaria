import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Recipe} from './RecipeItem';
import IngredientsList from './IngredientsList';

type RecipeInfoProps = {
  setModalState: () => void;
  recipe: Recipe;
};

/** COMPONENTE QUE MUESTRA LA INFO DE LAS RECETAS */
export default function RecipeInfo({
  setModalState,
  recipe,
}: RecipeInfoProps): JSX.Element {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.containerImg}>
          <ImageBackground
            source={{uri: recipe.imagen}}
            resizeMode="cover"
            style={styles.recipeImg}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={setModalState}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </ImageBackground>
          <View style={styles.containerIngredients}>
            <Text style={styles.textIngredients}>Titulo: {recipe.nombre}</Text>
            <Text style={styles.textIngredients}>Ingredients</Text>
            <Text style={styles.textIngredients}>
              For {recipe.personas} servings
            </Text>

            {/**Aqui van los ingredientes */}
            <SafeAreaView style={styles.ingredienList}>
              <IngredientsList ingredients={recipe.ingredientes} />
            </SafeAreaView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#333333',
  },
  modalView: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#333333',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  containerImg: {
    height: 370,
    width: '100%',
  },
  recipeImg: {
    width: '100%',
    height: '100%',
  },
  textIngredients: {
    color: 'white',
    fontSize: 18,
  },
  containerIngredients: {
    paddingTop: 15,
    paddingLeft: 20,
  },
  ingredienList: {
    height: 150
  }
});
