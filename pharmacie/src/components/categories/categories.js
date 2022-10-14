import * as React from 'react';
import PropTypes from 'prop-types';
import './categories.scss';
import { styled, alpha } from '@mui/material/styles';
import {Box,Typography,Card,Grid} from '@mui/material'
import im3 from '../../assets/im3.jfif'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#00FF7F', 0.25),
  '&:hover': {
    backgroundColor: alpha('#00FF7F', 0.25),
  },
  marginLeft: 0,
  width: '100%',
  marginBottom: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))
const Categories = ({categories}) => (
  <div className="categories">
    <Box>
      <Grid container className='head'>
        <Grid md={6} sm={6} xs ={6}>
        <Typography paragraph className='display-h4' variant='h4'>
        Our Categories:
        </Typography>
        </Grid>
        <Grid md={6} sm={6} xs ={6} className='search'>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
      </Search>
        </Grid>
      </Grid>
   
    
    {categories? (
      <Grid container>
      {categories.map((item) => (
        
        <Grid item={true} md={3} sm={4} xs ={12}>
          <Box className="categ" component={Link}  to={`/products/${item.title}`}>
            <Typography paragraph  className='display-h6 title'  variant='h6'>{item.title}</Typography>
            <Box className="flesh"></Box>
            <Card className="cards">
             {item.img}
            </Card>              
         </Box>
        </Grid>                
      ))}
      </Grid>
    ):null}
    
    </Box>
  </div>
);

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
