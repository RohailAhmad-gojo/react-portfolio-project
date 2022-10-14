import { Grid, makeStyles, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';

import React from 'react'


const useStyles = makeStyles((theme)=>({
secFour:{
    padding:"5% 0",
    backgroundColor:"#e9e9f5",
},
SecfourHeader:{
    textAlign:"center",
},
secfourHeaderHead:{
    margin:"20px 0",
},
secfourHeaderText:{
    fontWeight:"600",
    lineHeight: "1.5",
},
secFourPara:{
    marginTop:"5%"
},
secFourParaText:{
    textAlign:'center',
},
secFourIcon:{
    fontSize:"7rem",
    margin:"3% 0",
    color:"#a062dd",
    "&:hover":{
        backgroundColor:"#a062dd",
        color:"#e9e9f5",
        borderRadius:"50%",
        padding:"15px", 
    }
},
secFourParaHead:{
    margin:"10px 0",
    fontWeight:"500",
    color:"#454443",
    fontSize:"1.3rem",
   },
   secFourParaLink:{
       textDecoration: "none",
    fontSize:"1rem",
    // margin:"15px 0",
    fontWeight:"300",
    fontFamily: "Mukta",
    color:"#818a84",
    dispaly:"inline",
    "&:hover":{
      cursor:"pointer",
          color:"#a062dd",
          fontWeight:500
    },
    "&:active":{
        color:"#000",
        fontWeight:500
    },
  },
}))
function Secfour() {
const classes = useStyles();
  return (
    <div>
        <Grid container justifyContent='space-evenly'className={classes.secFour}>
            <Grid Item lg={11} md={11} sm={12} xs={12}>
                <div className={classes.SecfourHeader}>
                    <Typography variant='h3' className={classes.secfourHeaderHead}>Contact Me</Typography>
                    <Typography variant='p' className={classes.secfourHeaderText}>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</Typography>
                </div>
              <Grid container className={classes.secFourPara}>
                <Grid item lg={4} md={4} sm={6} xs={12}className={classes.secFourParaText} >               
                <GitHubIcon className={classes.secFourIcon}/>
                <Typography variant='h5' className={classes.secFourParaHead}>Visit My GitHub</Typography>
                <a href='https://github.com/RohailAhmad-gojo' target={"_blank"}><Typography className={classes.secFourParaLink}>@rohailahmad-gojo</Typography></a>
                </Grid>

                <Grid itemlg={4} md={4} sm={6} xs={12} className={classes.secFourParaText} >               
                <TwitterIcon className={classes.secFourIcon}/>
                <Typography variant='h5' className={classes.secFourParaHead}>Check Out My Twitter</Typography>
               <a href='https://twitter.com/RohailA55608973' target={"_blank"}><Typography className={classes.secFourParaLink}>@RohailA55608973</Typography></a>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12} className={classes.secFourParaText} >               
                <EmailIcon className={classes.secFourIcon}/>
                <Typography variant='h5' className={classes.secFourParaHead}>Mail Me At Gmail</Typography>
                <a href='https://mail.google.com/mail/u/0/#inbox' target={'_blank'}><Typography className={classes.secFourParaLink}>rohailgojali@gmail.com</Typography></a>
                </Grid>

              </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Secfour