import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import RecipeAppProvider from '../context/RecipeAppProvider';

describe('Testando o componente Header', () => {
  it('Verificando os elementos na tela', () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);

    history.push('/foods')

    const buttonEnter = screen.getByText(/enter/i)
    const profileIcon = screen.getByTestId('profile-top-btn');
    const pageTitle = screen.getByTestId('page-title');
    const searchIcon = screen.getByTestId('search-top-btn');

    expect(buttonEnter).toBeInTheDocument();
    expect(profileIcon).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });
  it('Verificando se a barra de pesquisa aparece ao clicar no botão', () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);

    history.push('/foods');

    const dataTestIdSearch = 'search-input';

    const searchIcon = screen.getByTestId('search-top-btn');

    expect(screen.queryByTestId(dataTestIdSearch)).not.toBeInTheDocument();

    userEvent.click(searchIcon);

    expect(screen.getByTestId(dataTestIdSearch)).toBeInTheDocument();

    userEvent.click(searchIcon);

    expect(screen.queryByTestId(dataTestIdSearch)).not.toBeInTheDocument();
  });
});

describe('7 - Implemente o header de acordo com a necessidade de cada tela', () => {
  it('testa elementos', () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    history.push('/foods');

    const titleIconInput = screen.getByTestId('profile-top-btn');
    const searchIconInput = screen.getByTestId('search-top-btn');
    const titleInput = screen.getByTestId('page-title');

    expect(titleIconInput).toBeInTheDocument()
    expect(searchIconInput).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()

    userEvent.click(searchIconInput)

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toBeInTheDocument()

    userEvent.click(searchIconInput)

    expect(searchInput).not.toBeInTheDocument()
  });
});

describe('Testando o componente Header', () => {
  it('Verificando se a barra de pesquisa aparece ao clicar no botão', () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);

    history.push('/drinks');

    const dataTestIdSearch = 'search-input';

    const searchIcon = screen.getByTestId('search-top-btn');

    expect(screen.queryByTestId(dataTestIdSearch)).not.toBeInTheDocument();

    userEvent.click(searchIcon);

    expect(screen.getByTestId(dataTestIdSearch)).toBeInTheDocument();

    userEvent.click(searchIcon);

    expect(screen.queryByTestId(dataTestIdSearch)).not.toBeInTheDocument();
  });
});

describe('7 - Implemente o header de acordo com a necessidade de cada tela', () => {
  it('testa algo sem header', () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
    history.push('/foods');

    const titleIconInput = screen.getByTestId('profile-top-btn');
    const searchIconInput = screen.getByTestId('search-top-btn');
    const titleInput = screen.getByTestId('page-title');

    history.push('/foods/:id');

    expect(titleIconInput).not.toBeInTheDocument()
    expect(searchIconInput).not.toBeInTheDocument()
    expect(titleInput).not.toBeInTheDocument()
  });
  it('testa algo sem header', () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);

    history.push('/foods');

    const titleIconInput = screen.getByTestId('profile-top-btn');
    const searchIconInput = screen.getByTestId('search-top-btn');
    const titleInput = screen.getByTestId('page-title');

    history.push('/drinks/:id');

    expect(titleIconInput).not.toBeInTheDocument()
    expect(searchIconInput).not.toBeInTheDocument()
    expect(titleInput).not.toBeInTheDocument()
  });
});

describe('Cards aparecem na tela', () => {
  it('Card é renderizado na tela', async () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);

    history.push('/foods');

    waitFor(() => expect(screen.getByTestId('0-card-img')).toBeInTheDocument())
  
  });
});

describe('Testa se redireciona para /profile ao clicar no icone de profile', () => {
  it('Redireciona para /profile', async () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);

    history.push('/foods');

    const profileIcon = screen.getByTestId('profile-top-btn')

    userEvent.click(profileIcon)

    const profileEmail = screen.getByTestId('profile-email')

    expect(history.location.pathname).toBe('/profile')
    expect(profileEmail).toBeInTheDocument()
  
  });
});
