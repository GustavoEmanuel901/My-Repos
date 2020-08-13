import React from 'react';

import { FiStar } from 'react-icons/fi'

import './styles.css'

const ListItem = ({name, id, favorite, handleFavorite}) => {
  return (
        <li key={id}>
        <a href={`https://github.com/GustavoEmanuel901/${name}`} target="_blanck">{name}</a>
        {favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(id)}>
                <FiStar/> 
                Favoritar
            </button>
    </li>        
  );
}

export default ListItem;