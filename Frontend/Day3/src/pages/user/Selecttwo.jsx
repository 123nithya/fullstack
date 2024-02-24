import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../assets/CSS/Login.css';

export default function Selectone() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box style={{height:'100%'}}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          style={{border: "2px solid rgba(255, 255, 255, 0.2)",borderRadius: '40px',outline:'none',background: 'transparent',width: '100%',height: '50px',color:'#fff'}}
        >
          <MenuItem value={10}>Beginner</MenuItem>
          <MenuItem value={20}>Intermediate</MenuItem>
          <MenuItem value={20}>Advanced</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}