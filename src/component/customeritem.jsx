import React from "react";

function CustomerItem({data}){

    const color=['red','yellow','pink','blue','skyblue','lightsalmon']

    let icon;
     let clr;
    let indx=0;
    if(indx<6){
       indx=indx+1;
    }
    else{
        indx=0;
    }

    const divede= data.name.split(' ')
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

    return(
        <div>
           <h2 style={{backgroundColor:color[indx],width:'7%',height:'50px',
                 alignItems:'center',paddingLeft:'15px',paddingTop:'15px',
                borderRadius:'50px'}}>{icon}</h2>
            <h2>{data.name}</h2>
        </div>
    )
}

export default CustomerItem