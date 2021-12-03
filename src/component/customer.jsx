import React,{Component} from 'react'
import {TextField,ButtonGroup,Button} from '@material-ui/core'
import {NewCustomer,AccessData} from '../redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
 
class Customer extends Component{
    constructor(){
        super()
        this.state={
            name : '',
            no :'',
            address :''
        }
        this.submit=this.submit.bind(this)
    }

    nameHandler(e){
        this.setState({
            ...this.state,
            name : e.target.value
        })
    }

    noHandler(e){
        this.setState({
            ...this.state,
            no :e.target.value
        })
    }

    addressHandler(e){
        this.setState({
            ...this.state,
           address :e.target.value
        }
        ) 
    }


    componentDidMount(){
        this.props.access()
    }

    submit(){
        if(this.state.name.length<4||this.state.no.length!==10){
            if(this.state.name<4){
              alert('Enter Name Greather Than 4 Charecters')
            }
            if(this.state.no.length!==10){
                alert('Enter valid No')
            }
        }
        else{
               if(this.props.users!=='undifined'){
                if(this.props.users.length){
                    const index= this.props.users.findIndex(i=>{
                        return i.no===this.state.no
                    })
    
                    if(index===-1){
                        const length = this.props.users.length
                        this.props.add({
                            name : this.state.name,
                            no : this.state.no,
                            address : this.state.address,
                            id:length,
                            shirts :{},
                            pents :{}
                        })
                        console.log(this.props.users);
                        alert('Add Successfully')
                        this.setState({
                            name:'',
                            no:'',
                            address:''
                        })
                    }
                    else{
                        alert('No Available')
                    }
                }
                else{
    
                    this.props.add({
                        name : this.state.name,
                        no : this.state.no,
                        address : this.state.address,
                        id:0,
                        shirts :{},
                        pents :{}
                    })
                    console.log(this.props.users);
                    alert('Add Successfully')
                    this.setState({
                        name:'',
                        no:'',
                        address:''
                    })
    
                }
            }   
               }
                    
    }

    render(){
        return(
            <>
               <div>
                   <Link to={{pathname:'/'}}>
                       <BiArrowBack size='50' color='black'/>
                   </Link>
               </div>
               <h3 style={{textAlign:'center'}}>Fill Customer Details</h3>
               <div style={{width:'80%',marginLeft:'10%'}}>
                    <TextField style={{marginTop:'10px'}} required type='text' fullWidth 
                    size='small' label='Enter Name' variant='outlined' value={this.state.name}
                    onChange={this.nameHandler.bind(this)}/>
                    <TextField style={{marginTop:'10px'}} required type='number' fullWidth 
                    size='small' label='Enter No' variant='outlined' value={this.state.no}
                    onChange={this.noHandler.bind(this)}/>
                    <TextField style={{marginTop:'10px'}} type='text' fullWidth size='small'
                    value={this.state.address} onChange={this.addressHandler.bind(this)} label='Enter Address' variant='outlined'/>
                    <ButtonGroup disableElevation color='primary' fullWidth variant='contained' style={{display:"flex",marginTop:'10px', flexDirection:'column'}}> 
                        <Button onClick={this.submit}>Save</Button>
                    </ButtonGroup>
               </div>
            </>
        )
    }
    
}


const mapStateToProps=state=>{
    console.log(state.data)
    return{
        users: state.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        add : (payLoad)=>dispatch(NewCustomer(payLoad)),
        access : ()=>dispatch(AccessData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Customer)
