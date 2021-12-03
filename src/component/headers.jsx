import React from 'react'
import {AiFillSetting,AiOutlinePlusCircle,AiOutlineUnorderedList} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
import {useHistory} from 'react-router-dom'
import CustomerList from './customerlist'

function Header(){
    

    const history = useHistory()

    const gotoSetting=()=>{
        history.push('/measurement')
   }

   const Customer =()=>{
       history.push('/customer')
   }

   const search=function(){
       history.push('/search')
   }
    
        return(
            <>
            <div className='header'> 
                <h3>SKT</h3>
                <div>
                    <FaSearch onClick={search} cursor='pointer'/>
                    <AiOutlineUnorderedList cursor='pointer'/>
                    <AiFillSetting onClick={gotoSetting} cursor='pointer'/>
                    <AiOutlinePlusCircle onClick={Customer} cursor='pointer'/>
                </div>
            </div>
            <CustomerList/>
            </>
        )

}

export default Header
