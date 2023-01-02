import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BadgeIcon from '@mui/icons-material/Badge';
import PaidIcon from '@mui/icons-material/Paid';

export const content = 
[
    {
        name:"Ana səhifə",
        url:"/",
        icon:<HomeIcon/>
        
    },
    {
        name:"İşçilər",
        url:"/employeer",
        icon:<BadgeIcon/>
    },
    {
        name:"Maaş",
        url:"/add-salary",
        icon:<PaidIcon/>
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