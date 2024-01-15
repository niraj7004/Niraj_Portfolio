import * as React from 'react';
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import Button from '@mui/material/Button';

function Contactme() {

    const buttonStyles = {
        paddingX: 4,
        fontSize: '15px',
        backgroundColor: 'transparent',
        color: 'black', 
        textTransform: 'none', 
        '&:hover': {
            backgroundColor: 'transparent'
        }
    };
        
    return(
        <div id = 'contact' >
                <Box sx={{ paddingX: [5, 10, 20], }} paddingTop='75px'>
                    <Stack spacing={4}>
                        <Stack alignItems='center'>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Get In Touch
                            </Typography>
                            <Typography variant="h3" component="div" fontSize={40} fontWeight={600}>
                                Contact Me
                            </Typography>
                        </Stack>
                        <Stack alignItems='center'>
                            <Card variant='outlined' sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Stack alignItems='center' padding={2}>
                                        <Box sx={{display:['block','block','flex']}}>
                                            <Button sx={buttonStyles} href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrlFSncJtQFdVcMhCbsTbkFpTRqZWVQbNRMJJrlrHhJdlgsmmJkpbcJtWMmwkCSjKrhSRL' target='_blank' startIcon={<EmailIcon />}>
                                                bt20cse020@nituk.ac.in
                                            </Button>
                                            <Button sx={buttonStyles} startIcon={<PhoneIcon />}>
                                                +91-7004954985
                                            </Button>
                                        </Box>
                                        <Box sx={{display:['block','block','flex']}}>
                                            <Button sx={buttonStyles} href='https://www.linkedin.com/in/patel-niraj-kumar-5b6685204/' target='_blank' startIcon={<LinkedInIcon />}>
                                                @patelniraj
                                            </Button>
                                            <Button sx={buttonStyles} href='https://github.com/niraj-700' target='_blank' startIcon={<GitHubIcon />}>
                                                @niraj_7004
                                            </Button>
                                            <Button sx={buttonStyles} href='https://leetcode.com/niraj_700/' target='_blank' startIcon={<CodeIcon />}>
                                                @niraj_700
                                            </Button>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Stack>
                        <Typography variant='caption' color='text.secondary' textAlign='center' paddingTop={8}>Thank You</Typography>
                    </Stack>
                </Box>
        </div >
    );
}
export default Contactme;