import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import ContextRecipeApp from './ContextRecipeApp';

function RecipeAppProvider({ children }) {
  const [state, setState] = useState([]);
  const [foodCheck, setFoodCheck] = useState({});
  const [ingredientsInProgress, setIngredientsInProgress] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [valueInputRadio, setValueInputRadio] = useState('ingredientChecked');
  const [url, setUrl] = useState({ foods: '', drinks: '' });
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [page, setPage] = useState('foods');
  const [favoriteList, setFavoriteList] = useState([]);
  const [details, setDetails] = useState();
  const location = useLocation();

  const history = useHistory();

  const contextValue = {
    foodCheck,
    setFoodCheck,
    ingredientsInProgress,
    setIngredientsInProgress,
    state,
    setState,
    searchInput,
    setSearchInput,
    valueInputRadio,
    setValueInputRadio,
    url,
    setUrl,
    foods,
    setFoods,
    drinks,
    setDrinks,
    page,
    setPage,
    location,
    history,
    favoriteList,
    setFavoriteList,
    details,
    setDetails,
  };

  // useEffect(() => {
  //   if (foods.length === 1) {
  //     history.push(`/foods/${foods[0].idMeal}`);
  //     return;
  //   }
  //   if (drinks.length === 1) {
  //     history.go(`/drinks/${drinks[0].idDrink}`);
  //   }
  // }, [foods, drinks]);

  return (
    <ContextRecipeApp.Provider value={ contextValue }>
      {children}
    </ContextRecipeApp.Provider>
  );
}

RecipeAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeAppProvider;
export const useRecipeApp = () => useContext(ContextRecipeApp);
