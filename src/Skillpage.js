import * as React from 'react';
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import TerminalIcon from '@mui/icons-material/Terminal';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import VerifiedIcon from '@mui/icons-material/Verified';

function Skillpage() {
    return (
        <div id='skill'>
            <Box>
                <Stack spacing={4}>
                    <Stack alignItems='center'>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Explore My
                        </Typography>
                        <Typography variant="h3" component="div" fontSize={40} fontWeight={600}>
                            Skills
                        </Typography>
                    </Stack>
                    <Stack direction='row' spacing={2} justifyContent='center'>
                        <Card variant="outlined">
                            <React.Fragment>
                                <CardContent>
                                    <Stack direction='row' justifyContent='center'>
                                        <TerminalIcon sx={{ paddingRight: '10px' }} />
                                        <Typography variant="h5" component="div" sx={{ paddingBottom: '10px' }}>
                                            Programming
                                        </Typography>
                                    </Stack>
                                    <Stack direction='row' spacing={4} sx={{ paddingX: '45px' }}>
                                        {/* <Stack direction='row' spacing={12}> */}
                                        <Stack>
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
                                        <Stack>
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
                                        {/* </Stack> */}
                                        {/* <Stack direction='row' spacing={10.5}> */}
                                        <Stack>
                                            <Typography color="text.secondary">
                                                Operating System
                                            </Typography>
                                            <Typography variant="body2" fontSize='16px'>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />Linux </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />Window </Stack>
                                            </Typography>
                                        </Stack>
                                        <Stack>
                                            <Typography color="text.secondary">
                                                Database
                                            </Typography>
                                            <Typography variant="body2" fontSize='16px'>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} /> MySql </Stack>
                                                <Stack direction='row' sx={{ paddingY: '5px' }}><VerifiedIcon fontSize='small' sx={{ paddingRight: '15px' }} />MongoDB </Stack>
                                            </Typography>
                                        </Stack>
                                        {/* </Stack> */}
                                    </Stack>
                                </CardContent>
                            </React.Fragment>
                        </Card>
                        <Card variant="outlined">
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
                    </Stack>
                </Stack>
            </Box>
        </div>
    );
}
export default Skillpage;