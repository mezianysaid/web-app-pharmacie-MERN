import React from 'react';
import PropTypes from 'prop-types';
import './Services.scss';
import { Typography,Box,Card,Grid, Divider,Button} from '@mui/material';
import { Link } from 'react-router-dom';

const Services = ({ListServices}) => (
  <div className="Services" justify='center'>
    <Typography paragraph variant="h2" className="display-h2 title">
      Our Services
    </Typography>
    <Box className="container">
                  
        <Grid container className='grid mt-2'>
        
          {ListServices.map((item) =>(           
               <Grid className='item'  item={true} lg={4} md={4} sm={12} sx={12} >
                <Card className="card">
                  <Box className='b'>
                   <Typography paragraph variant="h5" className="display-h5 title">
                    {item.service}                   
                  </Typography>
                 </Box>                
                <Box>
                {item.img}
                </Box>
                {/* <Typography paragraph variant="h5" className="display-h5"> */}
                   {/* {item.description}                    */}
                {/* </Typography> */}
                </Card>
                </Grid>                  
          ))}
            
        </Grid> 

      <Box>
         <Button  variant='contained' component={Link} to={'/ContactUs'}  sx={{backgroundColor:'#00FF7F', color:'black'}} className='consultBtn' >Consult us</Button>  
      </Box> 
    </Box>
  </div>
);

Services.propTypes = {};

Services.defaultProps = {};

export default Services;
