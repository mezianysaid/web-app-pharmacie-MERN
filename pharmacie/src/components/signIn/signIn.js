import React from 'react';
import PropTypes from 'prop-types';
import './signIn.scss';
import {Card,Box,Typography,TextField,Button} from '@mui/material'
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Alert} from '@mui/material'
const SignIn = ({formValues, handleChange,handleSubmit,onCancel,errors}) => (
  <div className="signIn">
    <Card className="card col-lg-8 col-md-6 col-sm-12 col-xs-12">
     <Typography paragraph variant="h3" className="display-h3 title">
      SIGN IN
    </Typography>
    <Box className='content display-h5' > 
      {errors ? (
        <Alert color="error">{errors}</Alert>
      ):null}
      <Card className="m-2 pt-3">      
       <ValidatorForm component="form" autoComplete="on" onSubmit={handleSubmit} >
       
       <TextValidator className="col-12 p-2" 
        name="Email"
        label="E-mail :"
        value={formValues.Email}
        placeholder="Username@gmail.com"
        validators={['required']}
        errorMessages={['this field is mandatory']}
        onChange={handleChange}
        type="email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AlternateEmailIcon />
            </InputAdornment>
          ),
        }}
       />
       <TextValidator className="col-12 p-2" 
        name="password"
        label="Password : "
        value={formValues.password}
        placeholder="Enter your password"
        validators={['required']}
        errorMessages={['this field is mandatory']}
        onChange={handleChange}
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          ),
        }}
       />
      
      <Box className='btmbtn'>
        <Button variant='outlined' type="reset" onClick={onCancel} className='btn m-1' startIcon={<CancelIcon/>} color="secondary" sx={{color:'black', borderColor:'#00FF7F'}}>Cancel</Button>
        <Button variant='outlined' type="submit" className='btn m-1' startIcon={<SaveIcon/>} color="success" sx={{backgroundColor:'#00FF7F',color:'black', borderColor:'#00FF7F'}}>Save</Button>
      </Box>
      </ValidatorForm> 
      </Card>
    </Box>
    </Card>

  </div>
);

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
