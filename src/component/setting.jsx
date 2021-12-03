import React,{useEffect,useState} from 'react'
import {TextField,Button} from '@material-ui/core'
import {ShirtItem,AccessData,PentsItem,RemoveShirtItem,RemovePentItem} from '../redux'
import {useDispatch,useSelector} from 'react-redux'
import {AiFillCloseCircle} from 'react-icons/ai'
import {useHistory} from 'react-router-dom'

function Setting({controll}){

    const [no,setNo] = useState(0)

    const history = useHistory()

    const [item,setItem] = useState('')

    const home=()=>{
        history.push('/')
    }

    const data = useSelector(state=>state.measurement)
    const dispatch = useDispatch()

    const items=(e)=>{
        setItem(e.target.value)
    }

    const removeItem=(item)=>{
        if(controll==='Shirts'){
            dispatch(RemoveShirtItem(item))
            setNo(0)
        }
        else{
            dispatch(RemovePentItem(item))
            setNo(0)
        }
    }

    const sett = ()=>{
        if(!item){
            alert('Fill Details')
        }
        else{
            if(controll==='Shirts'){

                const indx= data.shirts.indexOf(item) 
                if(indx===-1){
                    dispatch(ShirtItem(item))
                    setItem('')
                    setNo(0)
                }
                else{
                    alert('AVAILABLE')
                }
            }
            else{
                const indx = data.pents.indexOf(item)
                if(indx===-1){
                    dispatch(PentsItem(item))
                    setItem('')
                    setNo(0)
                }
                else{
                    alert('AVAILABLE')
                }
            }
        }
    }

    useEffect(()=>{
        dispatch(AccessData())
        setNo(1)
        console.log(data);
    },[no])

    return(
        <>
           <h2 style={{textAlign:'center'}}>ADD {controll} MEASUREMENT</h2>
           <div style={{
               width:'80%',
               marginLeft:'10%'
            }}> 
                <TextField label='Enter New MeasureMent' size='small' variant='outlined' 
                fullWidth required value={item} onChange={items}/>
                <div className='grid'>
                    {
                        controll==='Shirts'?
                        data?
                            data.shirts.map((i,index)=>{
                                return <div key={index} style={{
                                    display:'flex',
                                    flexDirection:'row',
                                    border:'1px solid black',
                                    justifyContent:'space-around',
                                    borderRadius:'10px',
                                    height:'50px',
                                    marginTop:'10px'
                                }}>  
                                     <h4>{i}</h4> 
                                     <AiFillCloseCircle onClick={()=>removeItem(i)}/>
                                </div>
                            }):
                            <h3>Empty</h3>:
                            data?
                               data.pents.map((i,index)=>{
                                   return <div key={index} style={{
                                    display:'flex',
                                    flexDirection:'row',
                                    border:'1px solid black',
                                    justifyContent:'space-around',
                                    borderRadius:'10px',
                                    height:'50px',
                                    marginTop:'10px'
                                }}>  
                                     <h4>{i}</h4> 
                                     <AiFillCloseCircle onClick={()=>removeItem(i)}/>
                                </div>
                               })
                            :
                            null
                    }
                </div>
                <Button variant='contained' fullWidth color='primary' style={{marginTop:'10px'}}
                onClick={sett}>Add</Button>
                <Button variant='contained' fullWidth color='primary' style={{marginTop:'10px'}}
                onClick={home}>SAVE</Button>
            </div>
        </>
    )
}

export default Setting