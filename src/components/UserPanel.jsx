import React from 'react';
import { Container, CssBaseline, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Dashboard from './Dashboard';
import ChangePassword from './ChangePassword';
import IssuedBooks from './IssuedBooks';
import SubmitBookRequest from './SubmitBookRequest';

const drawerWidth = 240;

const UserPanel = () => {
  const [selectedSection, setSelectedSection] = React.useState('Dashboard');
  
  const handleListItemClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            User Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Dashboard', 'Change Password', 'View Issued Books', 'View All Archive Books', 'Submit Book Request', 'About Software'].map((text) => (
              <ListItem button key={text} onClick={() => handleListItemClick(text)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {selectedSection === 'Dashboard' && <Dashboard />}
        {selectedSection === 'Change Password' && <ChangePassword />}
        {selectedSection === 'View Issued Books' && <IssuedBooks />}
        {selectedSection === 'View All Archive Books' && <div>View All Archive Books Section</div>}
        {selectedSection === 'Submit Book Request' && <SubmitBookRequest />}
        {selectedSection === 'About Software' && <div>About Software Section</div>}
      </Box>
    </Box>
  );
};

export default UserPanel;