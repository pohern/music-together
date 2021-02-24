import React, { useState, useEffect } from 'react'
import {Grid, Button, Typography, IconButton} from '@material-ui/core'

import { Link } from 'react-router-dom'

const pages = {
    JOIN: 'pages.join',
    CREATE: 'pages.create'
}

export default function Info(props){
    const [page, setPage] = useState(pages.JOIN)
    
    function joinInfo(){
        return 'Join Page'
    }
    function createInfo(){
        return 'Create Page'
    }
    

    return (
      <Grid container spacing={1}>
        <Grid item align='center' xs={12}>
          <Typography component='h4' variant='h4'>
            What Is Music Together?
          </Typography>
        </Grid>
        <Grid item align='center' xs={12}>
          <Typography variant='body1'>
            {page === pages.JOIN ? joinInfo() : createInfo()}
          </Typography>
        </Grid>
        <Grid item align='center' xs={12}>
          <IconButton
            onClick={() => {
              page === pages.CREATE
                ? setPage(pages.JOIN)
                : setPage(pages.CREATE);
            }}
          >
            {page === pages.CREATE ? (
              <Button>Previous</Button>
            ) : (
              <Button>Next</Button>
            )}
          </IconButton>
        </Grid>
        <Grid item align='center' xs={12}>
          <Button color='secondary' variant='contained' to='/' component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    );
}