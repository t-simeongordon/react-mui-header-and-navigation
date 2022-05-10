import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'

export default function Header(props){
    return (
        // <AppBar position='static'>
        <AppBar position='fixed'>
            <Toolbar>
                development
            </Toolbar>
        </AppBar>
    )
}