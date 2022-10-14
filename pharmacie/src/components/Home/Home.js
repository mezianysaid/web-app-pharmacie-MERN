import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'

import ph1 from '../../assets/ph1.jfif'
import  elkenz from '../../assets/elkenz.jpeg'
import doc1 from '../../assets/doc1.jfif'
import dc1 from '../../assets/dc1.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';


const Home = () => {
  

  return(
  <div className="Home">
   
      <Box className='header' container>
        <Grid container spacing={2} className="Grid">
              <Grid item xs={12} md={8} sm={12}>
                {/* <Item> */}
                <Typography paragraph variant="h2" className="display-h2 Typography">         
                  Wellcome to your pharmacie : PHARMACIE AL KENZ SANTE                  

                </Typography>
                <Typography paragraph variant="h5" className="display-h5">         
                  You can ask for every thing, any time !      
                </Typography>

                {/* </Item>s */}
              </Grid>
              <Grid item xs={12} md={4} sm={12} className="imgdiv">
                <img src={dc1} alt="elkenz" edge="end"  width={400} height={300}  />
              </Grid>            
          </Grid>
          <Box className="btns "> 
            <Grid container>
              <Grid  md={6} sm={6} xs={12}>
                <Button  variant="outlined" component={Link} to={'/AboutUs'} text="About Us" className='aboutus'>Contact Us</Button>
                <Button  variant="outlined" text="About Us"  component={Link} to={'/ContactUs'}  className='aboutus'>About Us</Button>
              </Grid>           
              <Grid  md={6} sm={6} xs={12} className='Contactbtns'>       
                  <IconButton aria-label="facebook" size="large"  href={'https://www.facebook.com/'} sx={{color:'black'}}><FacebookIcon/> </IconButton>
                  <IconButton aria-label="facebook" size="large" sx={{color:'black'}} href={'https://www.instagram.com/'}><InstagramIcon /> </IconButton>
                  <IconButton aria-label="facebook" size="large" sx={{color:'black'}} href={'https://www.twitter.com/'}><TwitterIcon/> </IconButton>
              </Grid>
            </Grid>
           
           </Box>          
        
        </Box>
        

    
  </div>
)}
Home.propTypes = {};

Home.defaultProps = {};

export default Home;
