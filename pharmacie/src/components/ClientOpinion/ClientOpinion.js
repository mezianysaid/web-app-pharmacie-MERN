import React from 'react';
import PropTypes from 'prop-types';
import './ClientOpinion.scss';
import Typography from '@mui/material/Typography';
import { Card,Box,Divider, CardHeader, CardContent,Grid, Button} from '@mui/material';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
const ClientOpinion = ({formFeilds,handleChange,handleSubmit,opinions}) => (
  <div className="ClientOpinion">
    <Card >
      {/* <Container> */}
    <Typography paragraph variant="h3" className="display-h3 title">
       Clients opinions:
    </Typography>
    {opinions.map((opin) => (
    <Card className="card" key={opin.username}>
       <Box variant="h6" className='display-h6 m-2'>
        <Grid container>          
              <Grid item={true} md={2} sm={6} xs ={6}>{opin.username}</Grid>
              <Grid item={true} md={2} sm={6} xs ={6}>{opin.date}</Grid>            
        
          </Grid>
       </Box>
      <Divider></Divider>
      <CardContent>{opin.message}</CardContent>
    </Card>
      ))}
  {/* form for adding comment  */}
      <Card className="card">
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
        name="message"
        label="Message : "
        value={formFeilds.message}
        placeholder="type your message ..."
        validators={['required']}
        errorMessages={['this field is mandatory']}
        onChange={handleChange}
       />
      
      <Box className='addbtn'>
        <Button variant='outlined' type="submit" className='btn' color="success" sx={{backgroundColor:'#00FF7F',color:'black', borderColor:'#00FF7F'}}>Add Comment</Button>
      </Box>
      </ValidatorForm>
      </Card>
    </Card>
  </div>
);

ClientOpinion.propTypes = {};

ClientOpinion.defaultProps = {};

export default ClientOpinion;
