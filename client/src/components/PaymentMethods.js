import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const methods = [
  {
    value: "Klarna",
    label: "Klarna",
  },
  {
    value: "Card",
    label: "Credit card",
  },
  {
    value: "Swish",
    label: "Swish",
  },
  {
    value: "Paypal",
    label: "Paypal",
  },
];

export default function PaymentMethods() {
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
          style={{ color: "white" }}
          id="outlined-select-Payment Method"
          select
          label="Select"
          defaultValue="---"
          helperText="Please select Payment Method"
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
