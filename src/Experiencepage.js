import * as React from 'react';
import { Box, Card, CardActions, Button, CardContent, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Experiencepage() {

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
        <div id='experience'>
            <ThemeProvider theme={theme}>
                <Box paddingX='150px'>
                    <Stack spacing={4}>
                        <Stack alignItems='center'>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Explore My
                            </Typography>
                            <Typography variant="h3" component="div" fontSize={40} fontWeight={600}>
                                Experience
                            </Typography>
                        </Stack>
                        <Stack>
                            <Card variant="outlined" sx={{ minWidth: 275}}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        2LC Technologies
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Worked as a Trainee
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} fontSize={16.5} variant="body1" textAlign='justify'>
                                        I played a pivotal role in the ongoing development of a dynamic web application project, where I had the privilege of receiving guidance and mentorship from experienced professionals within a highly collaborative work environment.
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} fontStyle='italic' color="text.secondary" gutterBottom>
                                        Work on website development
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href='https://drive.google.com/file/d/1-pqU5lICT2CxU46s2dT8GCpG14iGxcN1/view?usp=drive_link' target='_blank' color='black' sx={{ borderRadius: '25px', }} variant='contained' disableElevation>
                                        Certificate
                                    </Button>
                                </CardActions>
                            </Card>
                        </Stack>
                    </Stack>
                </Box>
            </ThemeProvider>
        </div>
    );
}
export default Experiencepage;