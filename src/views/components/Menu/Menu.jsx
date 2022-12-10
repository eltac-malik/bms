import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {delAxios} from 'common/axios'
import {useMutation} from 'react-query'

export default function PositionedMenu({id}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const {mutate} = useMutation((id)=> delAxios("fruits",id),{
    onSuccess:()=>
    {
        console.log("salam succes")
    }
  })

  
  const handleClick = (event) => 
  {
    setAnchorEl(event.currentTarget)
  };
 
  const handleClose = (e) => {
    e.preventDefault()
    mutate(id)
    setAnchorEl(null)
  };



  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <i class="fa-solid fa-ellipsis-vertical"></i>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
}