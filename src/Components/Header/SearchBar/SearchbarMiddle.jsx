import React from 'react'
import { Box, Button, Paper } from '@mui/material';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const SearchbarMiddle = ({widthcss}) => {
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const [selectedDate1, handleDateChange1] = React.useState(new Date());
  return (
    <Box sx={
        {
            display:"flex"
        }
    }>
 
 <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDateTimePicker
                      variant="inline"
                      label="Start"
                      value={selectedDate}
                      onChange={handleDateChange}
                      format="yyyy/MM/dd HH:mm"
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDateTimePicker
                      variant="inline"
                      label="Start"
                      value={selectedDate}
                      onChange={handleDateChange}
                      format="yyyy/MM/dd HH:mm"
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
  </Box>
  )
}

export default SearchbarMiddle