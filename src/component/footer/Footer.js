import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((them)=>({
  secFooter:{
    backgroundColor:"#a062dd",
    borderTop:"20px solid #441d6b",
    borderRadius:"10px",
  },
  secFooterText:{
    textAlign:"center",
    padding:"4% 0",
    fontSize:"1rem"
  },
  secFooterlist:{
   fontWeight:'700',
   color:"#441d6b",

  }
}))

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Grid container justifyContent='space-evenly' className={classes.secFooter}>
        <Grid item lg={11}>
          <div className={classes.secFooterText}>
            <Typography className={classes.secFooterlist} variant="h6">©CopyRight By Rohail Ahmad</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer