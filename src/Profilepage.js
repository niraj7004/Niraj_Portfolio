import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ProfilePic from './Assests/ProfilePic.jpg';

function Profilepage() {

    const theme = createTheme({
        palette: {
            black: {
                main: '#000000',
                light: '#000000',
                dark: '#000000',
                contrastText: '#ffffff',
            },
        },
    });

    const [isHovered, setIsHovered] = useState(false);


    // this is for text rotation
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 50);
    const [index, setIndex] = useState(1);
    const toRotate = ['Competitive Programmer', 'MERN Stack Developer'];
    const period = 5000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(250);
        } else {    
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
                <Avatar
                    alt="Profile Picture"
                    src={ProfilePic}
                    sx={{ width: 300, height: 300 }}
                />
                <Stack spacing={1} sx={{ alignItems: 'center', justifyContent: 'center', paddingX: '60px' }}>
                    <Typography variant="body1" sx={{ color: 'grey' }} fontWeight={800}>Hello, I'm</Typography>
                    <Typography variant="h3" fontSize={40} fontWeight={600}>Patel Niraj Kumar</Typography>
                    <Typography variant="h5" fontSize={20} sx={{ color: '#737373' }} fontWeight={800}>{text}</Typography>
                    <Box padding={1.5}>
                        <Button color='black' sx={{ borderRadius: '25px', }}
                            variant={isHovered ? "contained" : "outlined"}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            href='https://drive.google.com/file/d/11Nh2ACIs_mrVDlZIZ2f0V4Gh7HBedOuP/view?usp=sharing'
                            target='_blank'
                        >
                            Download CV
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </ThemeProvider>
    );
}
export default Profilepage;