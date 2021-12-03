import React from 'react'
import {Button,ButtonGroup} from '@material-ui/core'
import { useHistory } from 'react-router'
import { BiArrowBack } from 'react-icons/bi'

function User(){

    const user= sessionStorage.getItem('user')

    const details= JSON.parse(user)
    console.log(details);

    const length = Object.keys(details.shirts).length
    const pentLength = Object.keys(details.pents).length

    const history=useHistory()

    const AddShirt=()=>{
        history.push('/AddShirtMeasurement')
    }

    const addPent=()=>{
        history.push('/addPentMeasurement')
    }

    const ShowShirt=()=>{
        history.push('/showShirtMeasurement')
    }

    const showPent=()=>{
        history.push('/showPentMeasurement')
    }

    const home=()=>{
        history.push('/')
    }

    return(
        <>
        <BiArrowBack size='50' cursor='pointer' onClick={home}/>
        <div>
            <h2 className='center'>Name : {details.name}</h2>
            <h4 className='center'>Number : {details.no}</h4>
            <h5 className='center'>Address : {details.address}</h5>
            <h5 className='center'>Id : {details.id+1}</h5>
        </div>
        <div style={{width:'80%',marginLeft:'10%'}}>
            <ButtonGroup style={{display:'flex',flexDirection:'column',marginTop:'10px',gap:'10px'}} color='primary' fullWidth variant='contained'>
            {
                 length===0?
                   <Button  onClick={AddShirt}>ADD SHIRTS MEASUREMEN</Button>:
                   <Button onClick={ShowShirt}>Shirt MEASUREMENT @{details.shirts.date} @ID : {details.id+1}</Button>
            }
            {
                pentLength===0?
                    <Button onClick={addPent}>ADD PENTS MEASUREMENT</Button>:
                    <Button onClick={showPent}>PENT MEASUREMENT @{details.pents.date}  @ID : {details.id+1}</Button>
            }
            </ButtonGroup>
        </div>
        </>
    )
}

export default User