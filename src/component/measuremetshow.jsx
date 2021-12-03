import React from 'react'
import {BiArrowBack} from 'react-icons/bi' 
import { useHistory } from 'react-router'

function Show({controll}){

    const history = useHistory()

    const data = sessionStorage.getItem('user')
    const dt = JSON.parse(data)
    const arrs = Object.keys(dt.shirts)
    const  arrp=Object.keys(dt.pents)
    console.log(arrp);
    console.log(arrs);

    const details=()=>{
        history.push('/details')
    }

    return(
        <>
        <BiArrowBack size='50' onClick={details} cursor='pointer'/>
        {
            controll==='shirts'?
            arrs.length>0?
            arrs.map((i,index)=>{
                return <div key={index} className='flex'>
                    <h3>{i}</h3>
                    <h3>{dt.shirts[i]}</h3>
                </div>
            }):
            null
            :
            arrp.length>0?
            arrp.map((i,index)=>{
                return <div key={index} className='flex'>
                    <h3>{i}</h3>
                    <h3>{dt.pents[i]}</h3>
                </div>
            })
            :
            null
        }
        </>
    )
}

export default Show