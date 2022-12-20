import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({data}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box style={{width:"90%",outline:"none"}} sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bölmə</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          className='salary-field'
          onChange={handleChange}
        >
            {
                data.map(e=>
                {
                    return(
                        <MenuItem value={e}>{e}</MenuItem>
                    )
                })
            }
          
        </Select>
      </FormControl>
    </Box>
  );
}