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
import axios from "axios"

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
    font-weight: 500;
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

const obj={
  name:"",
  email:"",
  mobile:"",
  gender:"",
  hobbies:"",
};

export default function Navbar() {
    

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  
  const [form, setForm] = useState(obj);
    const handleChange = (e) => {
    const { name, value, checked} = e.target;
       

        if(name==="gender"){
          setForm({
            ...form,
            [name] : checked ,
          });
        }else{
          setForm({...form, [name]: value})
        }

        console.log(form)
    };

    const handleSubmit=(e)=>{
      
    e.preventDefault();
    console.log(form)

    axios
      .post("https://mytericsoftserver.herokuapp.com/data", form)
      .then((res) => {
        console.log(form);
        console.log(res);
      })
      .catch((err) => console.log(err));
      setOpen(false);
    }
    
    

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
      <form onSubmit={handleSubmit}>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography variant="h5" component="h4">
              Add Employee Details
            </Typography>
            <TextField
              sx={{
                "& > :not(style)": { width: "40ch" },
              }}
              label="Enter Name"
              onChange={handleChange}
              variant="standard"
              required
              name="name"
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
              required
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
              name="mobile"
              required
              onChange={handleChange}
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
                type="radiobtn"
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                  name="gender"
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  name="gender"
                  label="Male"
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  onChange={handleChange}
                  label="Other"
                  name="gender"
                />
              </RadioGroup>

              <br />
              <FormLabel component="legend">HOBBIES</FormLabel>
              <FormControlLabel
                value="Playing"
                type="checkbox"
                control={<Checkbox />}
                label="Playing"
                labelPlacement="Playing"
              />
              <FormControlLabel
                value="Music"
                type="checkbox"
                control={<Checkbox />}
                label="Music"
                labelPlacement="Music"
              />
              <FormControlLabel
                value="Road-Trip"
                control={<Checkbox />}
                type="checkbox"
                label="Road-Trip"
                labelPlacement="Road-Trip"
              />
              <FormControlLabel
                value="Coding"
                control={<Checkbox />}
                type="checkbox"
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
                <Button onClick={handleSubmit}>ADD DETAILS</Button>
              </div>
              <div>
                <Button onClick={handleClose}>CLOSE</Button>
              </div>
            </ButtonGroup>
          </Box>
        </Modal>
      </form>
    </div>
  );
}
