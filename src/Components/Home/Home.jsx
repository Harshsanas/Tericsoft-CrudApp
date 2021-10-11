import React from 'react';  
import { makeStyles } from '@material-ui/core/styles';  
import Paper from '@material-ui/core/Paper';  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody'; 
import TableCell from '@material-ui/core/TableCell'; 
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import axios from 'axios';
import { useState, useEffect } from 'react'   

import DeleteIcon from "@mui/icons-material/Delete";
const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: "20px auto",
  },
  container: {
    maxHeight: 440,
  },

});  
export default function Home() {  
  const classes = useStyles(); 
  const [list, setList] = useState({});

  useEffect(() => {
    axios
      .get("https://mytericsoftserver.herokuapp.com/data")
      .then((res) => {
        setList(res.data);
        // console.log(res.data.forms)
      })
      .catch((err) => console.log(err));
  });
    const handleDelete = (id) => {
      axios
        .delete(`https://mytericsoftserver.herokuapp.com/data/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={classes.headersec}>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Hobbies</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.length > 0 &&
              list.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.mobile}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">{row.hobbies}</TableCell>
                    <TableCell align="right">
                      <DeleteIcon onClick={() => handleDelete(row.id)} />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );  

} 