import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import RecipeAppProvider from '../context/RecipeAppProvider';
import mockFoods from './mockFoods';

describe('Testes do searchbar', () => {
      afterEach(() => jest.restoreAllMocks());
    it('Testa elementos da barra com seus atributos em /foods', async () => {
      const fetch = jest.spyOn(global, 'fetch');
      const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
      history.push('/foods');

      await waitFor(() => {expect(screen.getByTestId('0-card-name')).toBeInTheDocument()})
      await waitFor(() => {expect(screen.getByTestId('11-card-name')).toBeInTheDocument()})

      const searchIconInput = screen.getByTestId('search-top-btn');
      expect(searchIconInput).toBeInTheDocument()
      userEvent.click(searchIconInput)

      const searchInput = screen.getByTestId('search-input');
      const radioIngredient = screen.getByTestId('ingredient-search-radio')
      const radioName = screen.getByTestId('name-search-radio')
      const radioFirstLetter = screen.getByTestId('first-letter-search-radio')
      const buttonSearch = screen.getByTestId('exec-search-btn')

      expect(searchInput).toBeInTheDocument()
      expect(radioIngredient).toBeInTheDocument()
      expect(radioName).toBeInTheDocument()
      expect(radioFirstLetter).toBeInTheDocument()
      expect(radioFirstLetter).toBeInTheDocument()
      expect(buttonSearch).toBeInTheDocument()

      userEvent.click(searchIconInput)

      expect(searchInput).not.toBeInTheDocument()
      expect(radioIngredient).not.toBeInTheDocument()
      expect(radioName).not.toBeInTheDocument()
      expect(radioFirstLetter).not.toBeInTheDocument()
      expect(radioFirstLetter).not.toBeInTheDocument()
      expect(buttonSearch).not.toBeInTheDocument()

      userEvent.click(searchIconInput)

      userEvent.click(radioIngredient)
      userEvent.type(searchInput, 'banana')
      userEvent.click(buttonSearch)

      await waitFor(() => {expect(screen.getByTestId('0-card-name')).toBeInTheDocument()})
      await waitFor(() => {expect(screen.getByTestId('2-card-name')).toBeInTheDocument()})

      userEvent.clear(searchInput)
      userEvent.click(radioFirstLetter)
      userEvent.type(searchInput, 'b')
      userEvent.click(buttonSearch)
      

      
      await waitFor(() => {expect(screen.getByTestId('0-card-name')).toBeInTheDocument()})
      await waitFor(() => {expect(screen.getByTestId('11-card-name')).toBeInTheDocument()})

      userEvent.clear(searchInput)
      userEvent.click(radioName)
      userEvent.type(searchInput, 'banana')
      userEvent.click(buttonSearch)

      expect(fetch).toHaveBeenCalledWith(
            'https://www.themealdb.com/api/json/v1/1/search.php?s=',
          );
      waitFor(() => {expect(screen.getByRole('heading', {
            name: /gg/i
          })).toBeInTheDocument()})
      waitFor(() => {expect(screen.getByTestId('6-ingredient-name-and-measure')).toBeInTheDocument()})

    })

    it('Testa elementos da barra com seus atributos em /drinks', () => {
      const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
      history.push('/drinks');

      const searchIconInput = screen.getByTestId('search-top-btn');
      expect(searchIconInput).toBeInTheDocument()
      userEvent.click(searchIconInput)

      const searchInput = screen.getByTestId('search-input');
      const radioIngredient = screen.getByTestId('ingredient-search-radio')
      const radioName = screen.getByTestId('name-search-radio')
      const radioFirstLetter = screen.getByTestId('first-letter-search-radio')
      const buttonSearch = screen.getByTestId('exec-search-btn')

      expect(searchInput).toBeInTheDocument()
      expect(radioIngredient).toBeInTheDocument()
      expect(radioName).toBeInTheDocument()
      expect(radioFirstLetter).toBeInTheDocument()
      expect(radioFirstLetter).toBeInTheDocument()
      expect(buttonSearch).toBeInTheDocument()

      userEvent.click(searchIconInput)

      expect(searchInput).not.toBeInTheDocument()
      expect(searchInput).not.toBeInTheDocument()
      expect(radioIngredient).not.toBeInTheDocument()
      expect(radioName).not.toBeInTheDocument()
      expect(radioFirstLetter).not.toBeInTheDocument()
      expect(radioFirstLetter).not.toBeInTheDocument()
      expect(buttonSearch).not.toBeInTheDocument()
      
    })
//     it('10 - elementos da barra com seus atributos', () => {
//       const { history } = renderWithRouter(<App />);
  
//       history.push('/foods');
      
//       const searchButton = screen.getByTestId('search-top-btn');
//       userEvent.click(searchButton)
  
//       const search = screen.getAllByTestId('search-input');
//       const ingredientSearch = screen.getAllByTestId('ingredient-search-radio');
//       const nameSearch = screen.getAllByTestId('name-search-radio');
//       const firstLetterSearch = screen.getAllByTestId('first-letter-search-radio');
//       const execSearch = screen.getAllByTestId('exec-search-btn');

//       expect(search).toBeInTheDocument()
//       expect(ingredientSearch).toBeInTheDocument()
//       expect(nameSearch).toBeInTheDocument()
//       expect(firstLetterSearch).toBeInTheDocument()
//       expect(execSearch).toBeInTheDocument()
//     })
/*     it('11 - 3 radion buttons implementados', () => {
        const { history } = renderWithRouter(<App />);
      }) */
/*       it('12A - API de comidas', () => {

      })   */
/*       it('12B - API de bebidas', () => {

      }) */
/*       it('13 - rota de detalhes de receitas p/ uma receita', () => {

      }) */
/*       it('14 - Mais de uma receita em cards', () => {

      }) */
/*       it('15 - alert', () => {

      }) */
})
