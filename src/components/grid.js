import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Autorenew, CenterFocusWeak } from '@material-ui/icons';
import { colors } from '@material-ui/core';
//import { Grid } from '@material-ui/core/Grid';

const useStyles = makeStyles((theme, colour) => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: Autorenew,

    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(30),
      height: theme.spacing(30),

    },
    title: {
    // bottom_border: red,

    }
   
  },
}));


export default function SimplePaper() {
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {

    async function getData() {

      const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
      let any = await response.json();

      delete any.results[0].source;
      setGlobalData(any.results[0])
      console.log(any.results[0]);
    }
    getData();
  }, [])





  const classes = useStyles();


  return (



    <div
      className={classes.root}>

      {Object.keys(globalData).map(function (key, ind) {
        // <Grid item xs={12} sm={4} >
        return (
          <Paper
            className={classes.root}
            elevation={3} key={ind}>
              <h4 className={classes.title}>
                {key.replace(/_/g,'-').toUpperCase()}  <h3> {globalData[key]}</h3></h4> 
              
              
                                     
          </Paper>


        )
      })
    } 
    </div>

  )





}






















