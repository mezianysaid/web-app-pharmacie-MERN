import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import { borderColor } from '@mui/system';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'

import ph1 from './assets/ph1.jfif'
import  elkenz from './assets/elkenz.jpeg'
import doc1 from './assets/doc1.jfif'
import dc1 from './assets/dc1.png'
import log1 from './assets/log1.png'
import HomeIcon from '@mui/icons-material/Home'
import SettingIcon from '@mui/icons-material/Settings'
import TimesOneMobiledataOutlinedIcon from '@mui/icons-material/TimesOneMobiledataOutlined'
import { LocalPhone } from '@mui/icons-material';
import { AccountBalanceOutlined } from '@mui/icons-material';
import { PeopleAlt } from '@mui/icons-material';
import routers from './Myrouters'
import { Link } from 'react-router-dom'
import CategoryIcon from '@mui/icons-material/Category';
import AddIcon from '@mui/icons-material/Add'
const listItems =[
  {
    name:'Home',
    route:'/home',
    icon:<HomeIcon/>
  },
  {
    name:'Our Categories',
    route:'/Categories',
    icon:<CategoryIcon/>
  },
  {
    name:'Add Product',
    route:'/addProduct',
    icon:<AddIcon/>
  },
  {
    name:'Services',
    route:'/Services',
    icon:<SettingIcon/>
  },
  {
    name:'Opening Houres',
    route:'/OpeningHoures',
    icon:<TimesOneMobiledataOutlinedIcon/>
  },
  {
    name:'Location',
    route:'/Location',
    icon:<LocalPhone/>
  },  
  {
    name:'Clients Opinion',
    route:'/ClientOpinion',
    icon:<PeopleAlt/>
  },
  {
    name:'Contact us',
    route:'/ContactUs',
    icon:<LocalPhone/>
  },
  {
    name:'About us ',
    route:'/AboutUs',
    icon:<AccountBalanceOutlined/>
  },
  
]
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


function HeaderBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="HeaderBar">             
        <div className="header">
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{background:'#00FF7F', color:'black'}}>
        <Toolbar>
          <Typography variant="h6 logo" noWrap   component={Link} to={'/'} sx={{flexGrow: 1 ,color:'black',textDecoration:'None'}}>
          <img src={log1} alt="logo" width={40} height={40} className='ml-2 pr-2' />PHARMACIE AL KENZ SANTE
          </Typography>
          <Button variant='outlined' component={Link} to={"/signIn"}  sx={{color:'black', borderColor:'black'}}>Sign in</Button>
          <Button variant='outlined' component={Link} to={"/signUp"}  sx={{color:'black', borderColor:'black',marginLeft:1}}>Sign up</Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open} >
        <DrawerHeader />
        <Box>
          {/* the Content*/}       
            {routers}
        </Box>
            


      </Main>
      <Drawer
        sx={{
          width: drawerWidth,          
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className='listItem'>
          {listItems.map((text, index) => (
            <ListItem key={text.route} disablePadding  component={Link} to={text.route} button style={{color:'black', fontWeight:'bolder'}}>
              <ListItemButton>
                <ListItemIcon>
                     {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.name} style={{color:'black', fontWeight:'bolder'}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </Drawer>
    </Box>
    
    </div>                           
    </div>
  );
}

export default HeaderBar;
