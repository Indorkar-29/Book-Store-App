import React, { useState } from 'react';
import  {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import {NavLink} from "react-router-dom";

const Header = () => {
    const [value,setValue]= useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:"#e60000"}} position='sticky'>
            <Toolbar>
                <NavLink to='/' style={{color:"white"}}>
                    <Typography>
                        <MenuBookOutlinedIcon/>
                    </Typography>
                </NavLink>
                <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/add" label="Add Book"/>
                    <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                    <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;