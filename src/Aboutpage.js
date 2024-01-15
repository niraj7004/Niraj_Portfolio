import * as React from 'react';
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CheckIcon from '@mui/icons-material/Check';

function Aboutpage() {
    const theme = createTheme({
        typography: {
            fontFamily: ['Poppins', 'sans-serif'
            ].join(','),
          },
        palette: {
            black: {
                main: '#000000',
                light: '#000000',
                dark: '#000000',
                contrastText: '#ffffff',
            },
        },
    });

    return (
        <div id='about'>
            <ThemeProvider theme={theme}>
                <Box sx={{ paddingX: [5, 10, 20], }} paddingY='75px'>
                    <Stack alignItems='center'>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Get To Know More
                        </Typography>
                        <Typography variant="h3" component="div" fontSize={40} fontWeight={600}>
                            About Me
                        </Typography>
                    </Stack>
                    <Typography sx={{ textAlign: 'justify', padding: '20px 0px 30px 0px' }}>Hey everyone! I'm a passionate computer science student at NIT Uttarakhand, fueled by the thrill of problem-solving and building things that matter. I'm always down to learn new skills and explore the endless possibilities of tech.</Typography>
                    <Box sx={{display:['block', 'block', 'flex']}} justifyContent='center' >
                        <Card sx={{m:1}} variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Stack direction='row' justifyContent='center' padding={1}>
                                        <SchoolIcon sx={{ paddingRight: '10px' }} />
                                        <Typography variant="h5" component="div">
                                            Education
                                        </Typography>
                                    </Stack>
                                    <Stack spacing={1} sx={{ paddingX: '45px' }}>
                                        <Box sx={{ display: ['block', 'block', 'flex'] }}>
                                            <Stack>
                                                <Typography color="text.secondary">
                                                    <CheckIcon fontSize='small' sx={{ paddingRight: '5px' }} />
                                                    B. Tech. | CSE
                                                </Typography>
                                                <Typography variant="body2" sx={{ paddingLeft: '25px' }}>
                                                    Nit Uttarakhand <br />
                                                    2020-2024 <br />
                                                    CGPA: 7.02/10 (till 6th Sem.) <br />
                                                </Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="text.secondary">
                                                    <CheckIcon fontSize='small' sx={{ paddingRight: '5px' }} />
                                                    Intermediate
                                                </Typography>
                                                <Typography variant="body2" sx={{ paddingLeft: '25px' }}>
                                                    J. J. Public School <br />
                                                    2019 <br />
                                                    Percentage: 76.6% <br />
                                                </Typography>
                                            </Stack>
                                        </Box>
                                        <Stack>
                                            <Typography color="text.secondary">
                                                <CheckIcon fontSize='small' sx={{ paddingRight: '5px' }} />
                                                Marticulation
                                            </Typography>
                                            <Typography variant="body2" sx={{ paddingLeft: '25px' }}>
                                                J. J. Public School <br />
                                                2017 <br />
                                                CGPA: 10/10 <br />
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                        <Card sx={{m:1}} variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Stack direction='row' justifyContent='center' padding={1}>
                                        <AutoStoriesIcon sx={{ paddingRight: '10px' }} />
                                        <Typography variant="h5" component="div">
                                            Course Work
                                        </Typography>
                                    </Stack>
                                    <Stack sx={{ paddingX: '45px' }}>
                                        <Typography variant="body2">
                                            <CheckIcon fontSize='small' sx={{ paddingTop: '5px' }} /> Data Structures & Algorithm <br />
                                            <CheckIcon fontSize='small' sx={{ paddingTop: '5px' }} /> Machine Learning <br />
                                            <CheckIcon fontSize='small' sx={{ paddingTop: '5px' }} /> Computer Network <br />
                                            <CheckIcon fontSize='small' sx={{ paddingTop: '5px' }} /> Operating System <br />
                                            <CheckIcon fontSize='small' sx={{ paddingTop: '5px' }} /> Cryptography <br />
                                            <CheckIcon fontSize='small' sx={{ paddingTop: '5px' }} /> Database Management <br />
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </Box>
            </ThemeProvider>
        </div >
    );
}
export default Aboutpage;