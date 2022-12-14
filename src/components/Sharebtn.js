import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function ShareBtn(props) {
  const { url, recipeId, dataTestId } = props;

  const handleShareBtn = ({ target }) => {
    const urlBase = 'http://localhost:3000';
    navigator.clipboard.writeText(`${urlBase}${url}/${recipeId}`);
    target.parentElement.textContent = 'Link copied!';
  };

  return (
    <label htmlFor={ `Share_${recipeId}` }>
      <input
        type="image"
        src={ shareIcon }
        data-testid={ dataTestId }
        onClick={ handleShareBtn }
        id={ `Share_${recipeId}` }
        alt="share"
      />
      Share
    </label>
  );
}
ShareBtn.propTypes = {
  url: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
