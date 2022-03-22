import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../Firebase/useAuth';

const drawerWidth = 240;

const Dashbord = (props) => {
    const { admin, user } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="dashbor-link">
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to="/home"><Button color="inherit">Home</Button></Link>
            <br />
             {user.email && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to={`dashbord/myappointment`}><Button color="inherit">Appointment</Button></Link>}
            <br />
            {user.email && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to={`dashbord/addreview`}><Button color="inherit">Add Review</Button></Link>}
            <br />
            <Divider />
            {/*{admin && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to={`dashboard/manageallOrders`}><Button color="inherit">All Orders</Button></Link>}
            <br />
            {admin && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to={`dashboard/makeadmin`}><Button color="inherit">Make Admin</Button></Link>}
            <br />
            {admin && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to={`dashboard/addproduct`}><Button color="inherit">Add Products</Button></Link>}
            <br />
            {admin && <Link style={{ textDecoration: "none", paddingLeft: "15px", color: "black" }} to={`dashboard/manageproduct`}><Button color="inherit">Manage All Orders</Button></Link>} */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{ background: '#32A262' }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Deshbord
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
};


export default Dashbord;


