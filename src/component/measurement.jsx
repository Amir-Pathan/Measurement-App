import { Button } from "@material-ui/core";
import React from "react";
import {useHistory} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

function MeasureMent(){

    const history = useHistory()

    const gotoShirts=()=>{
        history.push('/settingShirts')
    }

    const gotoPents=()=>{
        history.push('/settingPents')
    }

    const gotoHome=()=>{
        history.push('/')
    }


    return(
        <> 
        <BiArrowBack onClick={gotoHome} style={{marginLeft:'10px',marginTop:"15px"}}/>
        <div style={{width:'80%',marginLeft:'10%',marginTop:'15%'}}> 
            <Button fullWidth variant='contained' style={{marginTop:'10px'}} 
            color='primary' onClick={gotoShirts}>ADD SHIRT MEASUREMENT</Button>
            <Button fullWidth variant='contained' style={{marginTop:'10px'}}
             color='primary' onClick={gotoPents}>ADD PENTS MEASUREMENT</Button>
        </div>
        </>
    )
}

export default MeasureMent