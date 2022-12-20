import React,{useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './SalaryHistory.css'
import {filterByTime} from 'common/constantField'

function Index() {
  const [value, setValue] = React.useState(null);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='salary-page'>
      <div className="filter-salary-group">
      <Box className='filter-field' sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Zamana görə axtar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Zamana görə axtar"
          onChange={handleChange}
        >
          {filterByTime.map(e=>
            {
              return(
                <MenuItem value={e}>{e}</MenuItem>
              )
            })}
         
        </Select>
      </FormControl>
    </Box>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        className='filter-field filter-date-field'
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
      </div>

    </div>
  )
}

export default Index