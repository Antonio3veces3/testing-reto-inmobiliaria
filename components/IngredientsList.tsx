import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Ingredient } from './RecipeItem'
import IngredientItem from './IngredientItem';

type IngredientsProps= {
    ingredients: Ingredient[];
}

/**CREA LA LISTA DE LOS INGREDIENTES 
 * NOTA: POR ALGUNA RAZON NO ME HACE SCROLL CON ESTA LISTA.
*/
export default function IngredientsList({ingredients}: IngredientsProps): JSX.Element {
    const renderIngredient= ({item}: {item: Ingredient})=>{
        return <IngredientItem ingredient={item}/>
    }
  return (
    <SafeAreaView style={styles.listIngredientContainer}>
      <FlatList
      data={ingredients}
      renderItem={renderIngredient}
      scrollEnabled={true}
      contentContainerStyle={{
        flexGrow: 1,
        }}
      />
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    listIngredientContainer:{
        borderWidth: 1,
        borderColor: 'white',
    }
})