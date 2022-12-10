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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer({bottom,setBottom}) {
    
  const list = (anchor) => (
    <Box
      className='bottom-bar'
      onClick={()=> setBottom(false)}
    >
      <List>
        {['Profile', 'Settings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
        <React.Fragment key={"bottom"}>
          <Drawer
            anchor={"bottom"}
            open={bottom}
            onClose={()=> setBottom(false)}
          >
            {list("bottom")}
          </Drawer>
        </React.Fragment>
    </>
  );
}