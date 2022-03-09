import './Navbar.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import NavSearchMobile from './NavSearchMobile';

type Anchor = 'top';

export default function NavDrawer() {
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation">
            <List>
                <ListItem>
                    <Button className="btn" sx={{ color: '#c6c6c6', borderColor: '#c6c6c6', justifyContent: 'flex-start' }} fullWidth >Tournaments</Button>
                </ListItem>
                <ListItem>
                    <Button className="btn" sx={{ color: '#c6c6c6', borderColor: '#c6c6c6', justifyContent: 'flex-start' }} fullWidth >Recent Matches</Button>
                </ListItem>
            </List>
            <Divider />
            <List>
                <NavSearchMobile />
            </List>
        </Box>
    );

    return (
        <div className="drawer">
            {(['top'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} sx={{ maxHeight: '39px', color: '#c6c6c6', borderColor: '#c6c6c6' }}>Menu</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}