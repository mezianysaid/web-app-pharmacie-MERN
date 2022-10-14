import React from 'react';
import PropTypes from 'prop-types';
import './ContactUs.scss';
import Typography from '@mui/material/Typography';
import { Card,Box, Button } from '@mui/material';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
const ContactUs = ({formFeilds,handleChange,handleSubmit}) => (
  <div className="ContactUs">
    <Card className="card">
     <Typography paragraph variant="h3" className="display-h3 title">
      Contact Us:
    </Typography>
    <Box className='content display-h5'> 
      <Card className="m-2">
      <ValidatorForm className="" autoComplete="on" onSubmit={handleSubmit}>
       <TextValidator className="col-12 p-2" 
        name="username"
        label="Username :"
        value={formFeilds.username}
        placeholder="Username"
        validators={['required']}
        errorMessages={['this field is mandatory']}
        onChange={handleChange}
       />
       <TextValidator className="col-12 p-2" 
        name="gmail"
        label="E-mail :"
        value={formFeilds.gmail}
        placeholder="Username@gmail.com"
        validators={['required']}
        errorMessages={['this field is mandatory']}
        onChange={handleChange}
       />
       <TextValidator className="col-12 p-2" 
        name="message"
        label="Message : "
        value={formFeilds.message}
        placeholder="type your message ..."
        validators={['required']}
        errorMessages={['this field is mandatory']}
        onChange={handleChange}
       />
      
      <Box className='btmbtn'>
        <Button variant='outlined' type="submit" className='btn' color="success" sx={{backgroundColor:'#00FF7F',color:'black', borderColor:'#00FF7F'}}>Send</Button>
      </Box>
      </ValidatorForm>
      </Card>
    </Box>
    </Card>
  </div>
);

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
