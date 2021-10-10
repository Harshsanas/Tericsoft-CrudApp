import React, { useState } from "react";
import styled from "styled-components";
import {Modal} from "@mui/material";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";

const NAVBAR = styled.div`
  background-color: #49018c;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 0 1px 1px grey;
  width: 100%;
  display: flex;
  justify-content: space-around;

  .navbar-icon {
    cursor: pointer;
    color: whitesmoke;
    font-size: 25px;
    text-decoration: none;
    font-family: monospace;
    font-weight: bold;
  }
  .navbar-head {
    cursor: pointer;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
  }

  img{
      width: 30px;
      float: left;
      margin-right: 5px;
  }
  button {
    background-color: white;
    border: 1px solid white;
    font-size: 14px;
    cursor: pointer;
    color: #49018c;
    font-weight: 600;
    padding: 5px 15px;
    border-radius: 4px;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #c1c1c1",
  boxShadow: 20,
  p: 4,
};

const btnStyle = {
  marginLeft:"100px",
  alignItems: "center",
};

const radioBtn = {
    justifyContent:"space-between",

}



export default function Navbar() {
    
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const[email,setEmail] = useState();
    const handleChange = (event) => {
      setEmail(event.target.value)
    };

  const handleClose = () => setOpen(false);
  return (
    <div>
      <NAVBAR>
        <div>
          <NavLink to="/" className="navbar-icon">
            <img
              src="https://images.yourstory.com/cs/images/companies/Te9-Y4l400x400-1596781470735.jpg"
              alt=""
            />
            TERICSOFT
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="navbar-head">
            Employee Details
          </NavLink>
        </div>
        <div>
          <button onClick={handleOpen}>Add Employee</button>
        </div>
      </NAVBAR>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h5" component="h4">
            Add Employee Deatils
          </Typography>
          <TextField
            sx={{
              "& > :not(style)": { width: "40ch" },
            }}
            label="Enter Name"
            variant="standard"
          />
          <br />
          <br />
          <TextField
            sx={{
              "& > :not(style)": { width: "40ch" },
            }}
            label="Email"
            variant="standard"
            onChange={handleChange}
            name="email"
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <br />
          <br />
          <TextField
            sx={{
              "& > :not(style)": { width: "40ch" },
            }}
            label="Enter Mobile no."
            variant="standard"
          />
          <br />
          <br />
          <br />
          <FormControl sx={radioBtn}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              defaultValue="female"
              size="small"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>

            <br />
            <FormLabel component="legend">HOBBIES</FormLabel>
            <FormControlLabel
              value="Playing"
              control={<Checkbox />}
              label="Playing"
              labelPlacement="Playing"
            />
            <FormControlLabel
              value="Music"
              control={<Checkbox />}
              label="Music"
              labelPlacement="Music"
            />
            <FormControlLabel
              value="Road-Trip"
              control={<Checkbox />}
              label="Road-Trip"
              labelPlacement="Road-Trip"
            />
            <FormControlLabel
              value="Coding"
              control={<Checkbox />}
              label="Coding"
              labelPlacement="Coding"
            />
          </FormControl>
          <br />
          <ButtonGroup
            sx={btnStyle}
            variant="text"
            aria-label="text button group"
          >
            <div>
              <Button>ADD DETAILS</Button>
            </div>
            <div>
              <Button>CLOSE</Button>
            </div>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
}
