import { useRouter } from 'next/router';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { teal } from '@mui/material/colors';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useTheme } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 200;

export const ClippedDrawer = () => {
  
  const names: string[] = ['uf','ivp','dolar','dolar_intercambio','euro','ipc','utm','imacec','tpm','libra_cobre','tasa_desempleo','bitcoin']

  // obtener nombre de pagina actual, para marcar el ListItem del drawer
  const router = useRouter()
  const { name } = router.query

  const theme = useTheme();

  return (
    <>
    {/* <Box sx={{ display: 'flex' }}> */}
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
        <Toolbar>
            <Typography 
              variant="h3" 
              noWrap
              // textTransform='uppercase' 
              textTransform='capitalize' 
              component="div"
              sx={{    
                flexGrow: 1,
                textAlign: "center",
                justifySelf:'center',
                cursor: 'pointer',
                fontWeight: 'light',
                // fontFamily: 'Noto Serif Toto'
                // fontFamily: 'Lobster Two'
                fontFamily: 'Bebas Neue'
              }}
              onClick={()=>router.push('/')}
              >
              Indicadores Económicos
            </Typography>
        </Toolbar>
      </AppBar>

      <Drawer 
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box', 
            backgroundColor: theme.palette.secondary.main,
        },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List disablePadding >
              
              <ListItem 
                disablePadding 
                disableGutters
                sx={{
                  'backgroundColor':  theme.palette.secondary.main,
                  "& .Mui-selected": { backgroundColor: theme.palette.primary.main},
                  ":hover": { backgroundColor: theme.palette.primary.main}
                }}
                >
              <ListItemButton selected={name === undefined }  onClick={() =>  router.push(`/`)} divider>
                  <ListItemIcon sx={{color: 'white'}} >
                    <LabelImportantIcon/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={<Typography variant='button' >Todos</Typography>} 
                    sx={{textTransform: 'capitalize', color: 'white'}}
                  />
                </ListItemButton>
              </ListItem >

            {names.map((text, index) => (
              <ListItem 
                key={text} 
                disablePadding 
                disableGutters 
                sx={{
                  'backgroundColor':  theme.palette.secondary.main,
                  "& .Mui-selected": { backgroundColor: theme.palette.primary.main},
                  ":hover": { backgroundColor: theme.palette.primary.main},
                }}
                >
                <ListItemButton divider selected={name===text }  onClick={() =>  router.push(`/indicador/${text}`)}>
                  <ListItemIcon sx={{color: 'white'}} >
                    <LabelImportantIcon/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={<Typography variant='button' color='white' >{text.replace('_',' ')}</Typography>} 
                    />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>

    </>
  );
}
