import * as React from 'react';
import dayjs from 'dayjs';
import "./datePicker.css"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
  

export default function DatePickerValue({setDate}) {


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer sx={{color:"#FFF"}} components={['DatePicker', 'DatePicker']}>
        <DatePicker
          value={""}
          onChange={(newValue) => setDate(newValue)}
          sx={{color:"white"}}
          className='text-white'
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}