import React,{useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import './Salary.css'

function Salary() {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    return (
        <div className='salary'>
    <Box style={{width:"90%",outline:"none",marginTop:"50px"}} sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">İşçini seçin</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value} label="İşçini seçin"
          className='salary-field' onChange={handleChange} >
          
          {/* {
                data.map(e=>
                {
                    return(
                        <MenuItem value={e}>{e}</MenuItem>
                    )
                })
          } */}

        </Select>
      </FormControl>
    </Box>

    <TextField  
    className='profile-input'
    id="outlined-basic" label="Maaş"
    variant="outlined" />
    

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} className='profile-input'>
        <MobileDatePicker
          className='mobile-date'
          label="Tarixi seçin"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>

          button
    </div>
    )
}

export default Salary
