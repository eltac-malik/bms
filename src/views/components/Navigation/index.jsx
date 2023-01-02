import * as React from 'react';
import './Navigation.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation} from "react-i18next";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import i18n from 'langs/i18n'


export default function ButtonAppBar({setLeft,setBottom}) {

  const { t } = useTranslation();
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='navbar'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=> setLeft(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("business")}
          </Typography>
          <Button onClick={()=> setBottom(true)} color="inherit">
          <AccountCircleIcon/>
          </Button>
          {/* <select onChange={(e)=> i18n.changeLanguage(e.target.value)}>
            <option value='en'>Eng</option>
            <option value='az'>Az</option>
          </select> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}