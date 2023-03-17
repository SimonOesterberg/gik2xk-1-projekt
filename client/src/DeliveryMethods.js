import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const methods = [
  {
    value: "Snigel Post",
    label: "Snigel Post 10-20 weeks",
  },
  {
    value: "PostNord",
    label: "PostNord 3-5 workdays",
  },
  {
    value: "Instabox",
    label: "Instabox 2-3 workdays",
  },
  {
    value: "DHL",
    label: "DHL 3-5 workdays",
  },
];

export default function DeliveryMethods() {
  return (
    <Box
      className="InputContainer"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-Delivery Method"
          select
          label="Select"
          defaultValue="---"
          helperText="Please select Delivery Method"
        >
          {methods.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
