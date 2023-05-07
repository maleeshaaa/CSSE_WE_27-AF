import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { FormLabel } from '@mui/material';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Kandy',
  'Nuwara Eliya',
  'Matale',
  'Kurunegala',
  'Puttalam',
  'Colombo',
  'Gampaha',
  'Galle',
  'Matara',
  'Hambantota',
    'Anuradhapura',
    'Polonnaruwa',
    'Badulla',
    'Monaragala',
    'Ratnapura',
    'Kegalle',
    'Jaffna',
    'Mannar',
    'Vavuniya',
    'Mullaitivu',
    'Batticaloa',
    'Ampara',
    'Trincomalee',
    'Kilinochchi',

];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function NewPlaces() {

    const [age, setAge] = React.useState('');
    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [value, setValue] = React.useState(dayjs('2023-05-07T21:11:54'));

  const handleChange = (event) => {
    setAge(event.target.value);
    const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );

  };
  const handleDateChange = (newValue) => {
    setValue(newValue);
  };


  

  return (
    <div>

    
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-3">
        <Form.Label>Select a Province</Form.Label>
            <Box sx={{  m: 1,width: 570,marginBottom:4,marginLeft:0 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Province</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Central Province</MenuItem>
                    <MenuItem value={20}>North Western Province</MenuItem>
                    <MenuItem value={30}>Western Province</MenuItem>
                    <MenuItem value={40}>Eastern Province</MenuItem>
                    <MenuItem value={50}>Uva Province</MenuItem>
                    <MenuItem value={60}>Southern Province</MenuItem>
                    <MenuItem value={70}>Sabaragamuwa Province</MenuItem>
                    <MenuItem value={80}>North Central Province</MenuItem>
                    <MenuItem value={90}>Northern Province</MenuItem>

                    </Select>
                </FormControl>
            </Box>
        </div>

        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-3">
        <Form.Label>Select Districts</Form.Label>
                <FormControl sx={{ m: 1, width: 570, marginBottom:5,marginLeft:0 }}>
                <InputLabel id="demo-multiple-chip-label">District</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                        <Chip key={value} label={value} />
                        ))}
                    </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                    >
                        {name}
                    </MenuItem>
                    ))}
                </Select>
                </FormControl>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-3">
        <Form.Label>Select a start date</Form.Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                    <DesktopDatePicker Style={{width:900, marginBottom:5}}
                    label="Date"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    </Stack>
                </LocalizationProvider>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-3">
        
        <FormControl sx={{ m: 1, width: 570, marginTop:5,marginLeft:0,MarginBottom:15 }}>
        <Form.Label>Enter number of dates</Form.Label>
            <TextField 
                required
                id="outlined-required"
                label="Days"
                defaultValue="No of days"
                />
            </FormControl>
            <Button type = "submit">Submit</Button>
        </div>
        
</div>


    
  );

}
