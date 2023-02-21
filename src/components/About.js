import { Box, Typography } from '@mui/material';
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography sx={{fontFamily:"fantasy"}} variant='h2' >This is a MERN Stack Crud Book Store Application</Typography>
        <Typography sx={{fontFamily:"cursive"}} variant='h3' >By Tushar Indorkar</Typography>
      </Box>
    </div>
  )
}

export default About;