import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ingredient } from './RecipeItem'

type IngredientProps= {
    ingredient: Ingredient;
}
/**COMPONENTE QUE RENDERIZA CADA INGREDIENTE */
export default function IngredientItem({ingredient}:IngredientProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.ingredientContainer}>
      <Text style={styles.ingredientTxt}>{ingredient.nombre} --</Text>
      <Text style={styles.ingredientTxt}>{ingredient.cantidad}</Text>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
    ingredientContainer: {
        flexDirection: "row",
        height: 30,
    },
    ingredientTxt: {
        fontSize: 16,
        color: "white",
        marginRight: 30
    }
})