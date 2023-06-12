import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {recetas} from '../data/Recetas.json';
import { Recipe, RecipeItem } from './RecipeItem';

/**ESTE COMPONENTE CREA LA LISTA DE RECETAS, usando FlatList */
export default function RecipeList(): JSX.Element {
  // Funcion que renderiza cada una de las recetas con el compopnente RecipeItem.
  // A ese componente le mandamos todos los datos de cada receta.
  
    const renderItem= ({item}: {item: Recipe})=>{
        return <RecipeItem recipe={item}/>
    }
  return (
    <View>
      <FlatList
        data={recetas}
        renderItem={renderItem}
      />
    </View>
  )
}