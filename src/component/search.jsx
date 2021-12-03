import React, { useEffect, useState } from 'react'
import {TextField} from '@material-ui/core'
import {BiArrowBack} from 'react-icons/bi'
import { useHistory } from 'react-router'
import { AccessData } from '../redux'
import {useSelector,useDispatch} from 'react-redux'

function Search(){

    const [search,setSearch] = useState('')
    const [same,setSame] = useState([])
    const [no,setNo] = useState(0)

    const history = useHistory()

    const home=()=>{
        history.push('/')
    }

    const dispatch = useDispatch()
    const data = useSelector((state)=>state.data)

    useEffect(()=>{
       dispatch(AccessData())
       setNo(1)
    },[no])

    const values=(e)=>{
        setSearch(e.target.value)
        console.log(e.target.value);
        const filt = data.filter(i=>{
            return i.no.includes(e.target.value)
        })
        setSame(filt)
    }

    const setLocal=function(i){
        console.log(i);
        sessionStorage.setItem('user',JSON.stringify(i))
        history.push('/details')
    }

    return(
        <>
        <div className='search'>
            <BiArrowBack cursor='pointer' size='40' onClick={home}/>
            <TextField type='number' className='box' label='search no' size='small'
            value={search} onChange={values}/>
        </div>
        <div>
            {
                !search?
                   <h1 style={{textAlign:'center',marginTop:'10px'}}>Please Enter No</h1>:
                same.length>0?
                same.map((i,index)=>{
                    return <div key={index} style={{paddingLeft:'10px',borderBottom:'1px solid black',cursor:'pointer'}}
                    onClick={()=>setLocal(i)}>
                        <h3>{i.name}</h3>
                    </div>
                })
                :
                <h1 style={{textAlign:'center',marginTop:'10px'}}>Not Available</h1>
            }
        </div>
        </>
    )
}

export default Search