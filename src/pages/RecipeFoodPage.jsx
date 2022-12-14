import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/RecipeDetails';
import { useRecipeApp } from '../context/RecipeAppProvider';
import fetchDetailsFood from '../helpers/fetchDetailsFood';
import fetchRecomendedDrinks from '../helpers/fetchRecomendedDrinks';

const RecipeFoodPage = ({ match: { params: { id } } }) => {
  const { setPage, setDetails, setIngredientsInProgress } = useRecipeApp();
  const [ingredients, setIngredient] = useState([]);
  const [measures, setMeasure] = useState([]);
  const [recomendedDrinks, setRecomendedDrinks] = useState();

  useEffect(() => {
    fetchDetailsFood(id).then((response) => {
      const recipeDetails = response.meals[0];
      setDetails(recipeDetails);
      const ingredientList = Object
        .values(Object
          .fromEntries(Object
            .entries(recipeDetails)
            .filter(([key, value]) => key.includes('Ingredient') && value !== '')));
      const measureList = Object
        .values(Object
          .fromEntries(Object
            .entries(recipeDetails)
            .filter(([key, value]) => key.includes('Measure') && value !== '')));
      setPage('foodDetails');
      setIngredientsInProgress({ ingredientList, measureList });
      setIngredient(ingredientList);
      setMeasure(measureList);
    });
    fetchRecomendedDrinks().then((response) => setRecomendedDrinks(response.drinks));
  }, [id]);

  return (
    <div>
      <RecipeDetails
        ingredients={ ingredients }
        idRecipe={ id }
        measures={ measures }
        recomendeds={ recomendedDrinks }
      />
    </div>
  );
};

RecipeFoodPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default RecipeFoodPage;
