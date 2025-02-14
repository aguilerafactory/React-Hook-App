import React from 'react'
import { useCounter, useFecht } from '../hooks'
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MulipleCustomHooks = () => {
    const {counter, decrement, increment} = useCounter(1, 1, 2000);
    const {data, hasError, isLoading, error} = useFecht(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

    return (
        <>
            <h1>Informacion del pokemon</h1>
            <hr/>
            { isLoading ? <LoadingMessage/> : 
            
            <PokemonCard id = {data.id} name = {data.name} sprites ={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny
            ]
            }/>}

            <button className='btn btn-primary mt-2 ' onClick={ decrement }>Anterior</button>
            <button className='btn btn-primary mt-2 ' onClick={ increment }>Siguiente</button>
        </>
    )
}
