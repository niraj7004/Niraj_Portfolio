import * as React from 'react';
import { Box, Card, Button, CardContent, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function AcheivementsandResponsibilitypage() {
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
        <div id='acheivement'>
            <ThemeProvider theme={theme}>
                <Box sx={{ paddingX: [5, 10, 20], }} paddingY='75px'>
                    <Stack spacing={4}>
                        <Stack alignItems='center'>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                View My
                            </Typography>
                            <Typography variant="h3" component="div" fontSize={40} fontWeight={600}>
                                Acheivements
                            </Typography>
                        </Stack>
                        <Box>
                            <Card variant="outlined" sx={{ m:1, minWidth: 275 }}>
                                <CardContent>
                                    <Box sx={{display:['block','block','flex']}} justifyContent='space-between'>
                                        <Typography sx={{mb:1}} variant="h6" fontSize={18}>
                                            Top 20 finalist in Flipkart Grid 4.0 Robotics Track, Shaastra 2023.
                                        </Typography>
                                        <Button href='https://drive.google.com/file/d/1lGUplV68y7WLlqpeyccKvR_YCjhLvr9P/view?usp=drive_link' target='_blank' color='black' sx={{ borderRadius: '25px', }} variant='outlined' disableElevation>
                                            Certificate
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                            <Card variant="outlined" sx={{ m:1, minWidth: 275 }}>
                                <CardContent>
                                    <Box sx={{display:['block','block','flex']}} justifyContent='space-between'>
                                        <Typography sx={{mb:1}} variant="h6" fontSize={18}>
                                            Certificate for Participation in Inter NIT coding competition.
                                        </Typography>
                                        <Button href='https://drive.google.com/file/d/1ltzaAtxee-XzBi4QQYR1oZbXl43ud2Lh/view?usp=drive_link' target='_blank' color='black' sx={{ borderRadius: '25px', }} variant='outlined' disableElevation>
                                            Certificate
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                            <Card variant="outlined" sx={{ m:1, minWidth: 275 }}>
                                <CardContent>
                                    <Box sx={{display:['block','block','flex']}}>
                                        <Typography variant="h6" fontSize={18}>
                                            Solve 300+ DSA Problems over different Platforms Leetcode, Codechef.
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                            <Card variant="outlined" sx={{ m:1, minWidth: 275 }}>
                                <CardContent>
                                    <Box sx={{display:['block','block','flex']}}>
                                        <Typography variant="h6" fontSize={18}>
                                            Works as Content and PR head in the NSCC NITUK club.
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Stack>
                </Box>
            </ThemeProvider>
        </div>
    );
}
export default AcheivementsandResponsibilitypage;