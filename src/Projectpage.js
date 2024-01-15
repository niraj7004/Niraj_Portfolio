import * as React from 'react'
import DroneImage from './Assests/Drone2.jpg'
import MedicalImage from './Assests/Medical.jpg'
import ApplicationImage from './Assests/Application.jpg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Card, CardMedia, Button, CardActions, CardContent, Stack, Typography } from "@mui/material";

function Projectpage() {

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
        <div id='project'>
        <ThemeProvider theme={theme}>
            <Box sx={{ paddingX: [5, 10, 20], }} paddingY='75px'>
                <Stack spacing={4}>
                    <Stack alignItems='center'>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Browse My
                        </Typography>
                        <Typography variant="h3" component="div" fontSize={40} fontWeight={600}>
                            Projects
                        </Typography>
                    </Stack>
                    <Box sx={{display:['block','block','flex']}} justifyContent='center'>
                        <Card variant="outlined" sx={{ m:1, maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={DroneImage}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Autonomous Drone
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="body2" fontStyle='italic' color="text.secondary">
                                    Flipkart Grid 4.0 Robotics Track, Shaastra 2023 | IIT Madras
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} textAlign='justify'>
                                    Our team's autonomous drone, a top 20 finalist in India, picks up objects from specific locations and transports them autonomously without human intervention.
                                </Typography>
                                <Typography variant="caption" fontStyle='italic' color="text.primary" textAlign='justify'>
                                Object Detection, Drone Technicalities, Autonomous Flight Controlling System.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href='https://drive.google.com/drive/folders/1jTGjSELUv8hfunGafsaLQuM8AmpI3Lm8' target='_blank' color='black' sx={{ borderRadius: '25px', }} variant='contained' disableElevation>
                                    Project Link
                                </Button>
                            </CardActions>
                        </Card>
                        <Card variant="outlined" sx={{ m:1, maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={MedicalImage}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Phathology
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="body2" fontStyle='italic' color="text.secondary">
                                    Web Application
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="body1" color="text.primary" textAlign='justify'>
                                Specifically designed for medical purposes, particularly in the field of pathology. Manages lab tests, patient data, generates reports, and maintains a reference register.
                                </Typography>
                                <Typography variant="caption" fontStyle='italic' color="text.primary" textAlign='justify'>
                                HTML, CSS, JavaScript, NodeJS, ExpressJs, MongoDB.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href='https://github.com/niraj-700/Pythology-Web-App_' target='_blank' color='black' sx={{ borderRadius: '25px', }} variant='contained' disableElevation>
                                    Project Link
                                </Button>
                            </CardActions>
                        </Card>
                        <Card variant="outlined" sx={{ m:1, maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={ApplicationImage}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Portfolio.
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="body2" fontStyle='italic' color="text.secondary">
                                    Web Application
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="body1" color="text.primary" textAlign='justify'>
                                Developed a responsive and fully functional website using React.js and its framework. Improved user experience with my graphic designing expertise.
                                </Typography>
                                <Typography  variant="caption" fontStyle='italic' color="text.primary" textAlign='justify'>
                                ReactJs, Material UI.

                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Stack>
            </Box>
        </ThemeProvider>
        </div>
    );
}
export default Projectpage;