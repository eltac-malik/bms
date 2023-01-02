import * as React from 'react';
import list from './List.module.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function FolderList() {
  return (
    <div className={list.list}>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    <ListItem>
        <ListItemAvatar >
          <Avatar sx={{backgroundColor:"red"}}>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
    </div>
  );
}