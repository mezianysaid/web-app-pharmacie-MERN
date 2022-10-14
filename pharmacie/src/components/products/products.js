import React from 'react';
import PropTypes from 'prop-types';
import './products.scss';
import { Box,Grid,Card } from '@mui/material';
import l1 from '../../assets/l1.jpeg'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel'


const Products = ({products}) => (
  <div className="products">
    <Box className='header'>
    <img src={l1} alt="elkenz"  width='100%' height='100%'/>        
    </Box>
    <Box className='product'>      
        <Grid container className='mt-2'>
        {/* <Card> */}
        {/* {listproducts ? ( */}
              {products.map((prod) => (
                <Grid item={true} md={3} sm={4} xs={12}  className="grid" key={prod.name}> 
                <Card className="card">
                <Box className='promotion'>-50%</Box>
                <img src={prod.image} alt={prod.name} key={prod.name} height={250} width='100%' />
                </Card>      
                </Grid>
             ))}     
        {/* ):(<Box> Sorry there is no product yet forthis category</Box>)} */}
                    
        </Grid>
    </Box>
  </div>
);

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
