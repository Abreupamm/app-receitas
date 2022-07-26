import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
<<<<<<< HEAD
import RecipeAppProvider from '../context/RecipeAppProvider';
import mockFoods from './mockFoods';
=======
<<<<<<< HEAD
import RecipeAppProvider from '../context/RecipeAppProvider'
=======
import RecipeAppProvider from '../context/RecipeAppProvider';
>>>>>>> 9ddfb37acb27263f24524ec8dba6a66eb68e3dee
>>>>>>> f1e0c0c1cf4231213d7d080eabfd929bb6864c3b

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
      
<<<<<<< HEAD
=======
      const searchButton = screen.getByTestId('search-top-btn');
      userEvent.click(searchButton)
  
      const search = screen.getAllByTestId('search-input');
      const ingredientSearch = screen.getAllByTestId('ingredient-search-radio');
      const nameSearch = screen.getAllByTestId('name-search-radio');
      const firstLetterSearch = screen.getAllByTestId('first-letter-search-radio');
      const execSearch = screen.getAllByTestId('exec-search-btn');

      expect(search).toBeInTheDocument()
      expect(ingredientSearch).toBeInTheDocument()
      expect(nameSearch).toBeInTheDocument()
      expect(firstLetterSearch).toBeInTheDocument()
      expect(execSearch).toBeInTheDocument()
<<<<<<< HEAD
>>>>>>> f1e0c0c1cf4231213d7d080eabfd929bb6864c3b
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
<<<<<<< HEAD
=======
=======
    });
    });
    
    describe('página foods', () => {
      afterEach(() => jest.restoreAllMocks());
    
      it('requisição correta buscando pelo nome', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = (<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/foods');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const nameSearch = screen.getByTestId('name-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'Arrabiata');
        userEvent.click(nameSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
        );
      });
    
      it('requisição correta buscando pelo ingrediente', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/foods');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const nameSearch = screen.getByTestId('name-search-radio');
        const ingredientSearch = screen.getByTestId('ingredient-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'chicken');
        userEvent.click(nameSearch);
        userEvent.click(ingredientSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken',
        );
      });
    
      it('requisição certa - primeira letra', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/foods');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'a');
        userEvent.click(firstLetterSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.themealdb.com/api/json/v1/1/search.php?f=a',
        );
      });
    
      it('alerta - mais de uma letra', async () => {
        const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/foods');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'aaa');
        userEvent.click(firstLetterSearch);
        userEvent.click(execSearch);
    
        await waitFor(() =>  expect(window.alert).toBeCalledWith(
          'Your search must have only 1 (one) character',
        ));
      });
    });
    
    describe('página drinks', () => {
      afterEach(() => jest.restoreAllMocks());
    
      it('requisição correta - nome', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/drinks');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const nameSearch = screen.getByTestId('name-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'lemon');
        userEvent.click(nameSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon',
        );
      });
    
      it('Testando se faz requisição corretamente buscando pelo ingrediente', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/drinks');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const ingredientSearch = screen.getByTestId('ingredient-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'Vodka');
        userEvent.click(ingredientSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka',
        );
      });
    
      it('correta - primeira letra', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/drinks');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'a');
        userEvent.click(firstLetterSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
        );
      });
    
      it('alerta ao digitar mais de uma letra', async () => {
        const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/drinks');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'aa');
        userEvent.click(firstLetterSearch);
        userEvent.click(execSearch);
    
        await waitFor(() =>  expect(window.alert).toBeCalledWith(
          'Your search must have only 1 (one) character',
        ));
      });
    });
>>>>>>> 9ddfb37acb27263f24524ec8dba6a66eb68e3dee
>>>>>>> f1e0c0c1cf4231213d7d080eabfd929bb6864c3b
