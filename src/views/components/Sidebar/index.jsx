import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom'
import {content} from 'common/route'

export default function TemporaryDrawer({left,setLeft}) {


  const list = (anchor) => (
    <Box
      sx={{ width:250 }}
      onClick={()=> setLeft(false)}
    >
      <List>
        {content.map((e,i) => (
          <Link key={i}  to={e.url}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {e.icon}
              </ListItemIcon>
              <ListItemText primary={e.name} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
        <React.Fragment>
          <Drawer
            anchor={"left"}
            open={left}
            onClose={()=>setLeft(false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
    </>
  );
}