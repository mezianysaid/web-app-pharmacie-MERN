import React from 'react';
import PropTypes from 'prop-types';
import './OpeningHoures.scss';
import Typography from '@mui/material/Typography';
import { Card,Box,Grid,Button} from '@mui/material';
const OpeningHoures = ({ListDays}) => (
  <div className="OpeningHoures">
    <Card>     
    <Typography paragraph variant="h3" className="display-h3 title">
      Opening Houres:
    </Typography>
    <Box>
      
        {ListDays.map((item) => (
          <Card className="card">
           <Typography paragraph variant="h5" className="display-h5">    
           <Grid container className='grid mt-2'>
              <Grid className='item' lg={4} md={4} sm={4} sx={4}>{item.day}</Grid>
              <Grid className='item' lg={4} md={4} sm={4} sx={4} >{item.time}</Grid>
              <Grid className='item' lg={4} md={4} sm={4} sx={4}>
                  
                {item.open === 'Open' ? (<Button  variant='contained' value='open' name='open' className='openBtn'>{item.open}</Button>) :
                (<Button  variant='contained' value='open' name='open' className='closeBtn'>{item.open}</Button>)}
                  
               </Grid>
           </Grid>
           </Typography>
           </Card>
        ))}
      


          
      
    </Box>
    </Card>
  </div>
);

OpeningHoures.propTypes = {};

OpeningHoures.defaultProps = {};

export default OpeningHoures;
