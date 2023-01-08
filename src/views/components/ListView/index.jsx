import * as React from 'react';
import list from './List.module.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BusinessIcon from '@mui/icons-material/Business';
import Person3Icon from '@mui/icons-material/Person3';


export default function FolderList() {

  let testArr = 
  [
    {
      primary:"Koroglu",
      secondary:"04.01.2023",
      icon:<BusinessIcon/>
    },
    {
      primary:"Maas",
      secondary:"04.01.2023",
      icon:<Person3Icon/>
    },
    {
      primary:"Veyseloglu",
      secondary:"04.01.2023",
      icon:<BusinessIcon/>
    },
    {
      primary:"Maas",
      secondary:"04.01.2023",
      icon:<Person3Icon/>
    },
    {
      primary:"Azersun",
      secondary:"04.01.2023",
      icon:<BusinessIcon/>
    },
  ]

  return (
    <div className={list.list}>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {
      testArr.map(e=>
        {
          return(
            <ListItem>
            <ListItemAvatar >
              <Avatar sx={{backgroundColor:"red"}}>
                {e.icon}
              </Avatar>
            </ListItemAvatar>
            <div className={list.list_item_text_content}>
            <ListItemText primary={e.primary} secondary={e.secondary} />
            <p className={list.money_price}> -100 <span>AZN</span></p>
            </div>
          </ListItem>
          )
        })
    }
    </List>
    </div>
  );
}