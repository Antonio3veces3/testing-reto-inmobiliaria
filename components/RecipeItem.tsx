import React, { useState } from 'react';
import {Alert, ImageBackground, Modal, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RecipeInfo from './RecipeInfo';

type recipeProps = {
  recipe: Recipe;
};

export type Recipe = {
  nombre: string;
  personas: number;
  id: number;
  imagen: string;
  ingredientes: Ingredient[];
};

export type Ingredient = {
  nombre: string;
  cantidad: string;
};

/** ESTE COMPONENTE RENDERIZA CADA UNA DE LAS RECETAS */
export const RecipeItem = ({recipe}: recipeProps): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false) //Estado para saber si esta visible o no el Modal

    //Funcion que cambia el estado del Modal true/false == visible/invisible
    const changeStateModal = ()=>{ 
        setModalVisible(!modalVisible);
    }
  return (
    <SafeAreaView>
      //Componente modal para mostrar la info de la receta
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={changeStateModal}> 
            <RecipeInfo recipe={recipe} setModalState={changeStateModal}/> // Componente que muestra la info de la receta
      </Modal>

    <TouchableOpacity onPress={changeStateModal}>
      <Text style={styles.recipeTxt}>{recipe.nombre}</Text> // Nombre de cada receta. Al dar clic a una receta, abre el modal y muestra la info de esa receta.
    </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
    recipeTxt: {
        fontSize: 25
    }
})
