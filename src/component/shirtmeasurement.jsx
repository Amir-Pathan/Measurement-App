import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {AccessData,UpdateMeasurement} from '../redux'
import {TextField,Button,ButtonGroup} from '@material-ui/core'
import { useHistory } from 'react-router'

function AddMeasurement(props){

    let measure={}

    const date = new Date()

    const [no,setNo] = useState(0)

    const {controll} = props

    const history=useHistory()

    const data = useSelector(state=>state.measurement)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(AccessData())
        console.log(data);
        setNo(1)
    },[no])

    const save=(e,i)=>{
         measure[i]=e;
    }

    const update=()=>{
        if(Object.keys(measure).length===0){
            alert('fill details ')
        }
        else{
            measure.date = date.getDate()+'/'+date.getMonth()+'/'
            +date.getFullYear()+'/'+date.getHours()+'/'+date.getMinutes()
            const n = sessionStorage.getItem('user')
            const no = JSON.parse(n)
            dispatch(UpdateMeasurement(no.no,measure,controll))
            history.push('/')
        }
    }

    const home=()=>{
        history.push('/')
    }

    const measurement=()=>{
         history.push('/measurement')
    }

    return(
        <>
        <div>
           {
               data?
               controll==='Shirts'?
               data.shirts.length>0?
               data.shirts.map((i)=>{
                   return <div  key={i}  style={{width:'80%',marginLeft:'10%'}}> 
                       <TextField label={i} fullWidth variant='outlined' 
                       size='small' style={{marginTop:'10px'}} onChange={(e)=>save(e.target.value,i)}/>
                       </div>
               })
               :
               <div style={{textAlign:'center',width:'80%',marginLeft:'10%'}}>
                   <h3>Please Add Measurement First</h3>
                   <Button color='primary' fullWidth variant='contained' onClick={measurement}>
                       Add {controll}
                    </Button>
               </div>:
               data.pents.length>0?
               data.pents.map((i)=>{
                   return <div  key={i}  style={{width:'80%',marginLeft:'10%'}}>
                       <TextField key={i} label={i} fullWidth size='small' variant='outlined'
                       style={{marginTop:'10px'}} onChange={(e)=>save(e.target.value,i)}/>
                   </div>
               })
               :
               <div style={{textAlign:'center',width:'80%',marginLeft:'10%'}}>
                   <h3>Please Add Measurement First</h3>
                    <Button color='primary' fullWidth variant='contained'
                    onClick={measurement}>Add {controll} Measurement</Button>
               </div>
               :
               <h1>Empty</h1>
           }
           {
               data?
               controll==='Shirts'?
                data.shirts.length>0?
                <ButtonGroup variant='contained' color='primary' fullWidth style={{width:'80%',marginLeft:'10%',marginTop:'10px',display:'flex',
                flexDirection:'column',gap:'10px'}}>
                    <Button onClick={update}>Save</Button>
                    <Button onClick={home}>Cancell</Button>
                </ButtonGroup>:
                 null:
                 data.pents.length>0?
                 <ButtonGroup variant='contained' color='primary' fullWidth style={{width:'80%',marginLeft:'10%',marginTop:'10px',display:'flex',
                flexDirection:'column',gap:'10px'}}>
                    <Button onClick={update}>Save</Button>
                    <Button onClick={home}>Cancell</Button>
                </ButtonGroup>:
                null
                :
                null
            }
        </div>
        </>
    )

}

export default AddMeasurement