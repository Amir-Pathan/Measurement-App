import React,{Component} from 'react'
import {AccessData} from '../redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { BiSpreadsheet} from 'react-icons/bi'

class CustomerList extends Component{

    componentDidMount(){
        this.props.data()
        console.log(this.props.list);
    }

    user(i){
        sessionStorage.setItem('user',JSON.stringify(i))
    }

    render(){

        const color=['red','yellow','pink','blue','skyblue','grey','maroon','purple']

        return(
            <div>
                <div>
                    {
                        this.props.list?
                        this.props.list.length>0?
                          this.props.list.map((i,index)=>{

                            let icon;
                            let indx=0;

                            let id = index+1;

                            if(id%2===0||id%4===0){
                                if(id%2===0&&id%4===0){
                                    indx=1
                                }
                                else{
                                    indx=2
                                }
                            }
                            else if(id%3===0||id%6===0){
                                if(id%3===0&&id%6===0){
                                    indx=3
                                }
                                else{
                                    indx=4
                                }
                            }
                            else if(id%2===0||id%5===0){
                                indx=5
                            }
                            else{
                                indx=0
                            }
                           const divede= i.name.split(' ')
                           console.log(icon);
                           if(divede.length>1){
                               const ft = divede[0].split('')
                               const first = ft[0];
                               const st = divede[1].split('')
                               const secound = st[0]

                               icon= first+secound
                            }
                            else{
                               const first= divede[0].split('')
                               icon = first[0]
                            }

                              return <div key={index} style={{display:'flex',flexDirection:'row',justifyContent:"space-between",borderBottom:'2px solid black'}}>
                                  <div style={{width:'90%',display:'flex',flexDirection:'row'}}> 
                                    <h3 style={{backgroundColor:color[indx],width:'8%',paddingTop:'10px',fontSize:'100%',
                                        textAlign:'center',alignItems:'center',
                                        borderRadius:'70%'}}>{icon}</h3>
                                    <h3 style={{marginTop:'25px',marginLeft:'60px'}}>{i.name}</h3>
                               </div>
                                    <div>
                                        <Link to='/details'>
                                            <BiSpreadsheet color='black' style={{marginLeft:'25px',marginTop:'10px'}} 
                                            size='50' onClick={()=>this.user(i)}/>
                                        </Link>
                                    </div>
                                </div>
                          }):
                          <h1>Customers Not AvailAble</h1>:
                          null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    console.log(state.data);
    return{
        list : state.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        data :()=>dispatch(AccessData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomerList)