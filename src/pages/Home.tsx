import './Home.css'
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Home() {

    const buttons = [
        <Button variant="outlined" href="https://store.steampowered.com/app/980610/Quaver/">Steam Page</Button>,
        <Button variant="outlined" href="https://store.steampowered.com/news/app/980610?updates=true">Dev Blog</Button>
    ];

    return (
        <Box sx={{ width: '100%' }}>

            <Navbar />
            <div className="banner">
                <h1 className="logo">
                    <img src="https://static.quavergame.com/img/logo.png"></img>
                </h1>
                <Typography variant="h6" gutterBottom component="div">
                    The ultimate community-driven, and open-source competitive rhythm game
                    <br />
                    available on Steam Early Access.
                </Typography>

                <ButtonGroup size="large" aria-label="large button group">
                    {buttons}
                </ButtonGroup>

            </div>
        </Box>
    );

}

export default Home;