import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useMediaQuery, useTheme } from '@mui/material';
import { SmallIndicator } from '@/interfaces';
import { FC } from 'react';
import { addSymbolToValue } from '@/utils';
import { Router, useRouter } from 'next/router';

import dolar from '@/public/dolar.png'

interface Props {
    indicator: SmallIndicator
}

export const IndicatorCard: FC<Props> = ({indicator}) => {

    const {nombre, fecha, valor, unidad_medida, codigo} = indicator

    const router = useRouter()

    const valorConSimbolo = addSymbolToValue(unidad_medida, valor)

    return (
    <>
    <Card 
      sx={{
        // mx:1, 
        // px:5,
        py:1,
        // maxWidth: 300
      }} 
      onClick={()=> router.push(`/indicador/${codigo}`)} 
      elevation={4} 
      
      >
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="50"
          // image="/static/images/cards/contemplative-reptile.jpg"
          image={dolar.src}
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography align='center' variant="body2" color="text.secondary">
            {nombre}
          </Typography>
          <Typography align='center' gutterBottom variant="h5" component="div" >
            {valorConSimbolo} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}