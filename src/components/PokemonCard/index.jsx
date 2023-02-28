import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './style.css'
import { Box } from '@mui/system';

export default function PokemonCard({ name, image, types }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography sx={{ textTransform: 'capitalize' }} gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography>
            {types.map((type, key) => (
              <Box component="div" sx={{ display: 'inline', fontSize: '12px', fontWeight: 'bold', marginRight: '6px' }} className={types[key].type.name}>{types[key].type.name.toUpperCase()}</Box>
            ))}   
          </Typography>
          {/*<Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
  </Typography>*/}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
