import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
secTwo:{
    backgroundColor:"#e9e9f5",
},
secTwoHeader:{
    padding:"30px",
    marginTop:"6%",
    textAlign:"center",
    
},
sceTwoTexts:{
    // color:"#919492",
    marginTop: "15px",
    display: "inline-block",
    fontWeight:"600",
    lineHeight: "1.5",
},
secTwoPara:{
 padding:"40px",
},
secTwoImg:{
 textAlign:"center",
 padding:"5px",
 border:"1px solid #aaa8b3",
 width:"280px",
 margin:"20px 0",
 borderRadius:"8px"
},
secTwoParaHead:{
 margin:"20px 0",
 fontWeight:"500",
 color:"#454443",
 fontSize:"1.3rem",
},
secTwoParaText:{
    fontWeight:"500",
    lineHeight: "1.5",
    color:"#706e6c",
},
secTwoParaLink:{
    fontWeight:"200",
    fontFamily: "Mukta",
    color:"#959596",
    fontSize:"1rem",
    display:"inline",
    margin:"20px 0",
    textDecoration: "none",

    "&:hover":{
        cursor:"pointer",
        color:"#a062dd",
        borderBottom:"2px solid #a062dd",
        borderRadius:"7px",
        fontWeight:500
    },
    "&:active":{
        color:"#000",
        fontWeight:500,
        borderBottom:"2px solid #000",
    },
secTwoParaLinks:{
    textDecoration: "none",
}
}


}));
function Sectwo() {
    const classes = useStyles();
  return (
    <div>
        <Grid container justifyContent='space-evenly' className={classes.secTwo} lg={12} md={12} sm={12} xs={12}>
            <Grid item lg={11} md={11} sm={12} xs={12}>
               <Grid container className={classes.secTwoHead}>
                   <Grid item className={classes.secTwoHeader}>                  
                     <Typography variant="h3" className={classes.secTwoText}>My Protfolio</Typography>
                     <Typography variant="p" className={classes.sceTwoTexts}>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</Typography>
                   </Grid>
                   <Grid  item lg={4}  md={6} sm={10} xs={12} className={classes.secTwoPara}>
                       <img src='Assests/simple5.png' alt='' className={classes.secTwoImg}/> 
                       <Typography variant='h6' className={classes.secTwoParaHead}>HTML and CSS WebSite</Typography>
                       <Typography className={classes.secTwoParaText}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. </Typography>               
                      <a href='https://rohailahmad-gojo.github.io/portfolio/task%20flex2/' target={"_blank"} className={classes.secTwoParaLinks}>
                          <Typography varuant="h6" className={classes.secTwoParaLink}>Visit WebSite...</Typography></a>
                   </Grid>



                   <Grid  item lg={4} md={6} sm={10} xs={12} className={classes.secTwoPara}>
                       <img src='Assests/simple10.png' alt='' className={classes.secTwoImg}/> 
                       <Typography variant='h6' className={classes.secTwoParaHead}>React Fully Responsive WebSites</Typography>
                       <Typography className={classes.secTwoParaText}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. </Typography>               
                       <Typography varuant="h6" className={classes.secTwoParaLink}>Visit WebSite...</Typography>
                   </Grid>
                   
                   
                   
                    <Grid  item lg={4} md={6} sm={10} xs={12} className={classes.secTwoPara}>
                       <img src='Assests/simple7.png' alt='' className={classes.secTwoImg}/> 
                       <Typography variant='h6' className={classes.secTwoParaHead}>React Text WebSite</Typography>
                       <Typography className={classes.secTwoParaText}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. </Typography>               
                      <a href='https://github.com/RohailAhmad-gojo/portfolio-' target={"_blank"}><Typography varuant="h6" className={classes.secTwoParaLink}>Visit WebSite...</Typography></a>
                   </Grid>
                </Grid>
                   
            </Grid>
                   
        </Grid>
    </div>
  )
}

export default Sectwo