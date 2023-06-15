import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import '../CSS/Perfil.css';
import Navbar from '../../components/Navbar';
import PerfilImg from '../../components/Imagens/Perfil.gif'

const Perfil = () => {
  const collection = useSelector((state) => state.collection);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemonsCapturados, setPokemonsCapturados] = useState(0);

  useEffect(() => {
    // Atualiza a contagem de Pokémon sempre que a coleção for modificada
    setTotalPokemons(collection.length);
    setPokemonsCapturados(collection.filter((pokemon) => pokemon.isCaptured).length);
  }, [collection]);

  return (
    <div className='div div-Perfil'>
      <Navbar esconderPesquisa/>
      <h1>Perfil do Usuário</h1>
      <div className='div div-ConteudoPerfil'>
      <Box className="box box-perfil">
        <h2>Pokemons na Coleção: {totalPokemons}</h2>
        <h2>Total de Pokemons no Sistema: 700</h2>
      </Box>
      <Box className="box box-img">
        <img src={PerfilImg}/>
      </Box>
      </div>
    </div>
  );
};

export default Perfil;
