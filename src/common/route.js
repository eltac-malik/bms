import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BadgeIcon from '@mui/icons-material/Badge';

export const content = 
[
    {
        name:"Home",
        url:"/",
        icon:<HomeIcon/>
        
    },
    {
        name:"Employeer",
        url:"/employeer",
        icon:<BadgeIcon/>
    }
]

export const bottomContent = 
[
    {
        name:"Profile",
        url:"/profile",
        icon:<AccountCircleIcon/>
    },
    {
        name:"Logout",
        url:"/logout",
        icon:<LogoutIcon/>
    },
    {
        name:"Settings",
        url:"/settings",
        icon:<SettingsIcon/>
    }
]