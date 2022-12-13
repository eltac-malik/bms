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
import {Link} from 'react-router-dom'
import {useQuery} from 'react-query'
import {getAxios} from 'common/axios'


export default function BasicTable() {
  const [open, setOpen] = React.useState(false);
  const {isLoading,data} = useQuery("Employeers",()=> getAxios("employeers"))
  const navigate = useNavigate()

  if (isLoading) {
    return "waiting..."
  }

  return (
    <div className='employee-table'>
    <div className="operation">
    <Button className='button-mui return' variant="contained" onClick={()=> navigate(-1)}>Geri</Button>
    <Button className='button-mui add-employee' variant="contained" onClick={()=> setOpen(true)}>İşçi əlavə et</Button>
    </div>
    <EmpModal open={open} setOpen={setOpen}/>
    <TableContainer className='emp-table' component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='simple-table'>Ad</TableCell>
            <TableCell className='simple-table' align="right">Maaş</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={e.id} className='mapped-row'>
              <TableCell className='simple-table' component="td" scope="row" colSpan={2}>
                  <Link to={`/employeer/${e.id}`} className='link'>
                    <div style={{display:"inline-block"}}>{e.name} {e.surname}</div>
                  <div style={{display:"inline-block"}}>{e.salary} AZN</div>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}