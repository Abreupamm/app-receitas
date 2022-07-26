import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '..helpers/renderWithRouter';
import App from '../App';
import RecipeAppProvider from '../context/RecipeAppProvider';

describe('Testando o componente Header', () => {
    it('44 - Verificando os elementos na tela', () => {
      const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
  
      history.push('/done-recipes');

      const filterByAll = screen.getByTestId('filter-by-all-btn');
      const filterByFood = screen.getByTestId('filter-by-food-btn');
      const filterByDrink = screen.getByTestId('filter-by-drink-btn');
      const horizontalIMG = screen.getByTestId('${index}-horizontal-image');
      const horizontalTopText = screen.getByTestId('${index}-horizontal-top-text');
      const horizontalName = screen.getByTestId('${index}-horizontal-name');
      const horizontalDate = screen.getByTestId('${index}-horizontal-done-date');
      const horizontalShareButton = screen.getByTestId('${index}-horizontal-share-btn');
      const horizontalTag = screen.getByTestId('${index}-${tagName}-horizontal-tag');  
  
      expect(filterByAll).toBeInTheDocument();
      expect(filterByFood).toBeInTheDocument();
      expect(filterByDrink).toBeInTheDocument();
      expect(horizontalIMG).toBeInTheDocument();
      expect(horizontalTopText).toBeInTheDocument();
      expect(horizontalName).toBeInTheDocument();
      expect(horizontalDate).toBeInTheDocument();
      expect(horizontalShareButton).toBeInTheDocument();
      expect(horizontalTag).toBeInTheDocument();
    });
});