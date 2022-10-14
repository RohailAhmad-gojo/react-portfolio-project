import { colors } from '@material-ui/core';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme)=>({
secOne:{
    backgroundImage: `url(Assests/simple.jpg)`,
    height:"100vh",
    backgroundSize:"cover",
    width: "100%",
    backgroundColor: "#b1a7a79b",
},
secOneText:{
    textAlign:"center",
    display:"flex",
    height:"50%",
    marginTop:"150px",
    textAlign:"center",
    alignItems:"space-between"
},

secOnePara:{
width: "100%",
backgroundColor: "#56555861",
textAlign:"center"
},

secOneParaHead:{
    fontSize:"3rem",
    margin:"20px 0",
    color:"#a062dd"
},
secOneParaText:{
    fontWeight:"600",
    lineHeight: "1.5",
    
},
secOnebtn:{
    border:"1px solid black",
    margin:"20px 0",
    "&:hover":{
        border:"1px solid #a062dd",
        cursor:"pointer",
        color:"#a062dd",
    "&:active":{
        border:"1px solid black",
        color:"black",
    }
    }
}

}))
function Secone() {
    const classes = useStyles();
  return (
    
    <div > 
             <Grid container justifyContent='space-evenly' className={classes.secOne}>
              <Grid item className={classes.secOnePara}>
                <Grid container justifyContent='center'>
                 <Grid item xs={11} md={10} lg={11} className={classes.secOneText} alignItems="space-between" lg={10} >
                    <div>
                    <Typography variant="h3" className={classes.secOneParaHead}>I Am A Front End Web Developer</Typography>
                    <Typography variant="p" className={classes.secOneParaText} >A front-end developer builds the front-end portion of websites and web applications—that is, the part that users actually see and interact with.</Typography>
                    <div><Button className={classes.secOnebtn}>Make A WebSite</Button></div>
                    </div> 
                </Grid>
                </Grid>
            </Grid>
           </Grid>
         </div>
  )
}

export default Secone