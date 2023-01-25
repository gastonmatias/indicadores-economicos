import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FC } from 'react';
import { FullIndicator } from '../../interfaces/indicator';
import { addSymbolToValue, dateFunctions } from '@/utils';
import { StayPrimaryLandscape } from '@mui/icons-material';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface Props  {
    indicator: FullIndicator
}

export const IndicatorDetails: FC<Props> = ({indicator}) =>  {
  
    const {version,autor,codigo,nombre,unidad_medida,serie} = indicator
  
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        {/* <TableContainer sx={{ maxHeight: 'calc(100vh - 200px)' }}> */}
        <TableContainer sx={{ maxHeight: 'calc(100vh - 250px)' }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead sx={{backgroundColor: 'teal', textc: 'whitesmoke'}}>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell align="left">Valor</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {serie.map((row) => (
            <TableRow
              key={row.fecha.toString()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dateFunctions.getFormatDateForCard(new Date(row.fecha))}
              </TableCell>
              <TableCell align="left">{addSymbolToValue(unidad_medida, row.valor)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
}