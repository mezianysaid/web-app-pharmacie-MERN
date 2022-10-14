import React from 'react';
import PropTypes from 'prop-types';
import './AboutUs.scss';
import Typography from '@mui/material/Typography';
import { Card, Container,Box,Divider,Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const AboutUs = () => (
  <div className="AboutUs">
    <Card >
      {/* <Container> */}
    
    <Typography paragraph variant="h3" className="display-h3 title">
       About Us:
    </Typography>
    <Grid container>
      <Grid md={6} sm={12} xs ={12}>
      <Typography paragraph  className="display-h5 content container" >
      Citypara est le plus grand site E-commerce de livraison de produits parapharmaceutiques au Maroc,
       avec plus de 6000 articles. 
      Nous livrons les produits de parapharmacie partout au Maroc.
    </Typography>
      </Grid>
      <Grid md={6} sm={12} xs ={12}>
      <Box className='card card'>
          <Typography paragraph  className='display-h6' variant='h6'>
             Adresse: lot al kenz, 23 All. des Jardins, Casablanca 20590 
          </Typography>
          <Typography paragraph  className='display-h6' variant='h6'>
             Telephone: 0546543214
          </Typography>
          <Divider></Divider>
          <Typography paragraph  className='display-h6' variant='h6'>
             Telephone mobile: 0646543214
          </Typography>
          <Divider></Divider>
          <Typography paragraph  className='display-h6' variant='h6'>
             E-mail: elkenz@gmail.com
          </Typography>
          <Divider></Divider>
          <Typography paragraph  className='display-h6' variant='h6'>
             Code Postal: 33333
          </Typography>
          <Box>
                  <IconButton aria-label="facebook" size="large"  href={'https://www.facebook.com/'} sx={{color:'black'}}><FacebookIcon/> </IconButton>
                  <IconButton aria-label="facebook" size="large" sx={{color:'black'}} href={'https://www.instagram.com/'}><InstagramIcon /> </IconButton>
                  <IconButton aria-label="facebook" size="large" sx={{color:'black'}} href={'https://www.twitter.com/'}><TwitterIcon/> </IconButton>
          </Box>
        </Box>
      </Grid>

    </Grid>
    
        {/* </Container> */}

    </Card>
  </div>
);

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;
