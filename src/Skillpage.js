import * as React from 'react';
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TerminalIcon from '@mui/icons-material/Terminal';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import VerifiedIcon from '@mui/icons-material/Verified';

function Skillpage() {
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
        <div id='skill'>
            <ThemeProvider theme={theme}>
                <Box sx={{ paddingX: [5, 10, 20], }} paddingY='75px'>
                    <Stack alignItems='center'>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Explore My
                        </Typography>
                        <Typography variant="h3" component="div" fontSize={40} fontWeight={600}>
                            Skills
                        </Typography>
                    </Stack>
                    <Box sx={{display:['block','block','flex']}} justifyContent='center'>
                        <Card sx={{m:1}} variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Stack direction='row' justifyContent='center'>
                                        <TerminalIcon sx={{ paddingRight: '10px' }} />
                                        <Typography variant="h5" component="div" sx={{ paddingBottom: '10px' }}>
                                            Programming
                                        </Typography>
                                    </Stack>
                                    <Box sx={{ display:['block','block','block','flex'], paddingX: '45px' }}>
                                        <Stack sx={{m:1}}>
                                            <Typography color="text.secondary">
                                                Language
                                            </Typography>
                                            <Typography variant="body2" fontSize='16px'>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />C/C++</Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} /> SQL </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} /> HTML </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} /> CSS </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} /> JavaScript </Stack>
                                            </Typography>
                                        </Stack>
                                        <Stack sx={{m:1}}>
                                            <Typography color="text.secondary">
                                                Frameworks & Tools
                                            </Typography>
                                            <Typography variant="body2" fontSize='16px'>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />ExpressJs </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />ReactJs </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />NodeJs </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />Git/Github </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />Mongoose </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />VsCode </Stack>
                                            </Typography>
                                        </Stack>
                                        <Stack sx={{m:1}}>
                                            <Typography color="text.secondary">
                                                Operating System
                                            </Typography>
                                            <Typography variant="body2" fontSize='16px'>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />Linux </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />Window </Stack>
                                            </Typography>
                                        </Stack>
                                        <Stack sx={{m:1}}>
                                            <Typography color="text.secondary">
                                                Database
                                            </Typography>
                                            <Typography variant="body2" fontSize='16px'>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} /> MySql </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />MongoDB </Stack>
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                        <Card sx={{m:1}} variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Stack direction='row' justifyContent='center'>
                                        <GraphicEqIcon sx={{ paddingRight: '10px' }} />
                                        <Typography variant="h5" component="div" sx={{ paddingBottom: '10px' }}>
                                            Designing
                                        </Typography>
                                    </Stack>

                                    <Stack direction='row' spacing={4} sx={{ paddingX: '45px' }}>
                                        <Stack>
                                            <Typography color="text.secondary">
                                                Software
                                            </Typography>
                                            <Typography variant="body2" fontSize='16px'>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />Photoshop </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />Premiere Pro </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />After Affect </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />Audition </Stack>
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    );
}
export default Skillpage;