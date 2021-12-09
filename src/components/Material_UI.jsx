import { Button } from '@mui/material'
// import { Button } from '@material-ui/core'
import React from 'react'
import { Outlet } from 'react-router-dom'


const Material_UI = () => {
    return (
        <div>
            <Button variant="contained"> I am @mui/material button</Button>
            <Button variant="outlined" color="secondary"> I am @material-ui/core button </Button>
            <Outlet />
        </div>
    )
}

export default Material_UI
