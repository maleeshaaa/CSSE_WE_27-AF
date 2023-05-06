import React from "react";
import Header from "../Payment/Header";
import { TextField } from "@mui/material";
import "./admin-styles.css";

const Packages = () => {
  return (
    <div>
      <Header title="PACKAGES" subtitle="Create new packages for requests" />
      <br />
      <div className="package-form">
        <TextField
          disabled
          id="outlined-disabled"
          label="Request ID"
          defaultValue="Hello"
          // value={}
          variant="outlined"
          style={{
            marginRight: "1rem",
            width: 460,
          }}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="User ID"
          defaultValue="Hello World"
          // value={}
          variant="outlined"
          style={{
            marginRight: "1rem",
            width: 460,
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-read-only-input"
          label="Province"
          defaultValue="Central"
          // value={}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          style={{
            marginRight: "1rem",
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="District"
          defaultValue="Kandy, Matale"
          // value={}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          style={{
            marginRight: "1rem",
            width: 343,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="No of Days"
          defaultValue="5"
          // value={}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          style={{
            marginRight: "1rem",
            width: 100,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="From"
          defaultValue="2023-06-07"
          // value={}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          style={{
            marginRight: "1rem",
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="To"
          defaultValue="2023-06-12"
          // value={}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Packages;
