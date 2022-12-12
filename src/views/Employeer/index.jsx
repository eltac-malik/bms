import * as React from 'react';
import {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {useNavigate} from 'react-router-dom'
import EmpModal from 'views/components/Modals/EmpModal'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate()

  return (
    <div className='employee-table'>
    <div className="operation">
    <Button className='button-mui return' variant="contained" onClick={()=> navigate(-1)}>Go Back</Button>
    <Button className='button-mui add-employee' variant="contained" onClick={()=> setOpen(true)}>Add</Button>
    </div>
    <EmpModal open={open} setOpen={setOpen}/>
    <TableContainer className='emp-table' component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='simple-table'>Dessert (100g serving)</TableCell>
            <TableCell className='simple-table' align="right">Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='simple-table' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className='simple-table' align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}