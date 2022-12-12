import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom'
import {bottomContent} from 'common/route'

export default function TemporaryDrawer({bottom,setBottom}) {
  
  

  const list = (anchor) => (
    <Box
      className='bottom-bar'
      onClick={()=> setBottom(false)}
    >
      <List>
        {bottomContent.map((e,i) => (
          <Link to={e.url}>
          <ListItem key={i} disablePadding>
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