import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({  
   Navbar:{
      backgroundColor:"#a062dd", 
   },
   navBarText:{
      // display:"flex",
   },
   navBarlogo:{
   fontFamily:'Lavishly Yours',
   fontWeight:500,
   fontSize:"3rem",
   color:"#fff",
   display:"inline-block",
   borderRadius:"50px",
   textAlign:"center",
   },
   navBarbtn:{
   fontWeight:"800",
   backgroundColor:"#e7d8f7",
   fontSize:"1.3rem",
   padding:"6px 50px",
   borderRadius:"30px",
   border:"none",
   "&:hover":{
      backgroundColor:"#a062dd",
      color:"#000",
      cursor:"pointer",
      fontWeight: "600",
      border:"1px solid black"
  },
  "&:active":{
   border:"1px solid black",
   color:"white",
   backgroundColor:"black"
},
   }
  
   
}));
function Navbar() {
    const classes = useStyles();
  return (
    <div>
        <Grid container className={classes.Navbar} justifyContent='space-evenly'lg={12} md={12} sm={12} xs={12}>
           <Grid item lg={11} md={11} sm={12} xs={12} alignItems="center">
              <Grid container justifyContent='space-between' alignItems='center'>
                 <Grid item><Typography className={classes.navBarlogo} veriant="h2" lg={1}>R</Typography>
                  </Grid>
                  <Grid item>
                    <Button className={classes.navBarbtn}>Hire me</Button>
                  </Grid>
              </Grid>
           </Grid>
        </Grid>
    </div>
  )
}

export default Navbar