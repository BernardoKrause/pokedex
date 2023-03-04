import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Skeletons } from '../Skeletons';
import { CardMedia } from '@mui/material';
import { Box } from '@mui/system';

export default function PokemonList( { pokemons} ) {

  return (
    
    <TableContainer sx={{ margin: 'auto', width: 1200, marginBlock: '2em' }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ fontWeight: '600' }} >
          <TableRow>
            <TableCell align="left">#</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">HP</TableCell>
            <TableCell align="left">Attack</TableCell>
            <TableCell align="left">Defense</TableCell>
            <TableCell align="left">Sp.Atk</TableCell>
            <TableCell align="left">Sp.Def</TableCell>
            <TableCell align="left">Speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {pokemons.map((pokemon, key) => (   
                <TableRow 
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="left" sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }} >
                      <CardMedia sx={{ width: 'auto', objectFit: 'contain'}} component="img" image={pokemon.data.sprites.front_default} />
                      <Box padding='8px'>{key}</Box>
                    </TableCell>
                    <TableCell align="left" sx={{ textTransform: 'capitalize' }}>{pokemon.data.name}</TableCell>
                    <TableCell align="center">
                    {pokemon.data.types.map((type, key) => (
                      <Box 
                        key={key}
                        component="div" 
                        sx={{ fontSize: '12px', 
                        fontWeight: 'bold',
                        marginBlock: '4px', 
                        width: '48px' }} 
                        className={pokemon.data.types[key].type.name}>
                          {pokemon.data.types[key].type.name.toUpperCase()}
                      </Box>
                    ))}
                    </TableCell>
                    <TableCell align="left">{pokemon.data.stats[0].base_stat}</TableCell>
                    <TableCell align="left">{pokemon.data.stats[1].base_stat}</TableCell>
                    <TableCell align="left">{pokemon.data.stats[2].base_stat}</TableCell>
                    <TableCell align="left">{pokemon.data.stats[3].base_stat}</TableCell>
                    <TableCell align="left">{pokemon.data.stats[4].base_stat}</TableCell>
                    <TableCell align="left">{pokemon.data.stats[5].base_stat}</TableCell>
                </TableRow>
                ))}
          </TableBody>
      </Table>
    </TableContainer>
  );
}
