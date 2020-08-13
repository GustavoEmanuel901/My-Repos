import React, { useState, useEffect } from 'react';

import Footer from './components/Footer'
import ListItem from './components/ListItem'

import './global.css'

export default function App() {
  const [repositories, setRepositories] = useState([])

  async function ListRepos() {
    const response = await fetch('https://api.github.com/users/GustavoEmanuel901/repos')
    const data = await response.json()

    setRepositories(data)
  }

  useEffect(() => {
    ListRepos()
  }, [])

  useEffect(() => {
    const filltered = repositories.filter(repo => repo.favorite)

    document.title = `Você tem ${filltered.length} favoritos`
  }, [repositories])

  function handleAddFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite} : repo
    })

    setRepositories(newRepositories)
  }


  return (
    <>

      <h1>Meus Repositórios</h1>
      <ul>
        { repositories.map(repo => (
            <ListItem
              key={repo.id}
              name={repo.name}
              id={repo.id}
              favorite={repo.favorite}
              handleFavorite={handleAddFavorite}
            />
          ) 
        )}
      </ul>

      <Footer/>
     
    </>
  );
}