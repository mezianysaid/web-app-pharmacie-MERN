import React from 'react';
import PropTypes from 'prop-types';
import './AddProduct.scss';
import {Card,Box,Typography,TextField,Button} from '@mui/material'
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Alert,FormControl,InputLabel,Select,MenuItem} from '@mui/material'
// import InputLabel from '@mui/material/InputLabel';
const AddProduct = ({formValues,handleChange,handleSubmit, onCancel,file,setFile,listOptions}) => (
  <div className="AddProduct">
    <Card className="card col-lg-8 col-md-6 col-sm-12 col-xs-12">
     <Typography paragraph variant="h3" className="display-h3 title">
      Add Product
    </Typography>
    <Box className='content display-h5' > 
      {/* {errors ? (
        <Alert color="error">{errors}</Alert>
      ):null} */}
      <Card className="m-2 pt-3">      
       <ValidatorForm component="form" autoComplete="on" onSubmit={handleSubmit} >
       <TextValidator className="p-2 pl-0 col-12"
        name="name"
        label="Name :"
        value={formValues.name}
        placeholder="Name"
        validators={['required']}
        errorMessages={['this field is mandatory']}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
       />
       
       <Box sx={{ minWidth: 120 }} className="col-12 p-2">
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formValues.category}
          label="Category :"
          name='category'
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
        >
          {listOptions.map((item)=>(
               <MenuItem value={item}>{item}</MenuItem>
          ))}  

        </Select>
      </FormControl>
      </Box>

       <input type='file' 
         className="col-12 mt-2"
         name="file"
        //  value={data.file}
        //  validators={['required']}
        //  errorMessages={["this field is mandatory"]}
         onChange={event=>{const file=event.target.files[0];
          setFile(file)}}
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

AddProduct.propTypes = {};

AddProduct.defaultProps = {};

export default AddProduct;
