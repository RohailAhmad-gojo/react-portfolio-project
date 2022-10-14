import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'



const useStyles = makeStyles((theme)=>({
secThree:{ 
  margin:"5% 0",
},
secThreeHeader:{
  textAlign:'center',
  marginBottom:"50px",
},
secThreeHeaderTitle:{
   margin:"20px 0"
},
secThreeHeaderText:{
  fontWeight:"600",
  lineHeight: "1.5",
  //  color:"#706e6c",
},
secThreePara:{
  textAlign:"center"
},
secThreeImg:{
  width:"320px",
  borderRadius:"50%",
  textAlign:"center"
},
secThreeParaHead:{
},
secThreeParaTitle:{
   margin:"10px 0",
   color:"black"
},
secThreeParaTitles:{
 color:"#a062dd",
 fontWeight:"600"
},
secThreeParaText:{
  fontWeight:"500",
  lineHeight: "1.5", 
  color:"#706e6c",

},
secThreeParaLink:{
  fontSize:"1rem",
  margin:"15px 0",
  fontWeight:"300",
  fontFamily: "Mukta",
  color:"#c0c7d1",
  dispaly:"inline",

  "&:hover":{
        cursor:"pointer",
        color:"#a062dd",
        fontWeight:500
  },
  "&:active":{
    color:"#000",
    fontWeight:700
},

},
 
}))

function Secthree() {
  const classes = useStyles();

  return (
    <div>
        <Grid container justifyContent='space-evenly' className={classes.secThree}>
            <Grid item xs={11}>
               <Grid container justifyContent='center'>
                   <div className={classes.secThreeHeader}>
                   <Typography variant='h3' className={classes.secThreeHeaderTitle}>About Me</Typography> 
                  <Typography variant="p" className={classes.secThreeHeaderText}>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.</Typography>
                  
                  </div>
                 
                    <Grid lg= {3} md={2} sm={12} xs={12} className={classes.secThreepara} justifyContent="center">
                      <img src='Assests/simple9.jpg' alt='' className={classes.secThreeImg}/>
                    </Grid>
                    <Grid lg={6} md={5} sm={12} xs={12} className={classes.secThreeParaHead}>
                    <Typography variant='h5'className={classes.secThreeParaTitle}>I'm <spam className={classes.secThreeParaTitles}>Rohail Ahmad</spam></Typography>
                    <Typography variant="h6" className={classes.secThreeParaLink}>Enter Text Here</Typography>
                    <Typography variant="p" className={classes.secThreeParaText}>In publishing and graphic design, In publishing and graphic design, In publishing and graphic design, In publishing and graphic design, Lorem ipsum is a In publishing and graphic design, Lorem ipsum is a In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Typography>
                    </Grid>
               </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Secthree