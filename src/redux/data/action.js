import 
{ADD_SHIRST_ITEM,
ACCESS_DATA,
ADD_PENTS_ITEM,
REMOVE_SHIRTS_ITEM,
REMOVE_PENT_ITEM,
ADD_CUSTOMER,
SHIRT_MEASUREMENT,
PENT_MEASUREMENT} 
from './createAction'


export function AddShirtItem(payLoad){
    return{
        type : ADD_SHIRST_ITEM,
        payLoad: payLoad
    }
}

export function Access(payLoad){
    return{
        type : ACCESS_DATA,
        payLoad :payLoad
    }
}


export function RemovePent(payLoad){
    return{
        type:REMOVE_PENT_ITEM,
        payLoad :payLoad
    }
}

export function AddPentsItem(payLoad){
    return{
        type : ADD_PENTS_ITEM,
        payLoad: payLoad
    }
}

export function RemoveShirt(payLoad){
    return{
        type : REMOVE_SHIRTS_ITEM,
        payLoad:payLoad
    }
}

export function AddCustomer(payLoad){
    return{
        type : ADD_CUSTOMER,
        payLoad:payLoad
    }
}

export function AccessData(){

    const d = localStorage.getItem('details')

    const data = JSON.parse(d)

    console.log(data);

    return dispatch=>{
        dispatch(Access(data))
    }

}

export function ShirtMeasurement(payLoad){
    return{
        type:SHIRT_MEASUREMENT,
        payLoad : payLoad
    }
}

export function PentMeasurement(payLoad){
    return{
        type : PENT_MEASUREMENT,
        payLoad : payLoad
    }
}

export function ShirtItem(item){

    const d = localStorage.getItem('details')

const data = JSON.parse(d) 

    data.measurement.shirts.push(item)

    console.log(data);

    return dispatch=>{

        console.log('yes');

        dispatch(AddShirtItem(data.measurement.shirts))

        localStorage.setItem('details',JSON.stringify(data))
    }
}

export function PentsItem(item){

    const d = localStorage.getItem('details')

const data = JSON.parse(d) 

     data.measurement.pents.push(item)

     return dispatch=>{
         dispatch(AddPentsItem(data.measurement.pents))
         localStorage.setItem('details',JSON.stringify(data))
     }
}

export function RemoveShirtItem(item){

    const d = localStorage.getItem('details')

const data = JSON.parse(d) 

    data.measurement.shirts=data.measurement.shirts.filter((i)=>{
        return i!==item
    })
    console.log(data.measurement.shirts);
    return dispatch=>{
        dispatch(RemoveShirt(data.measurement.shirts))
        localStorage.setItem('details',JSON.stringify(data))
    }
}

export function RemovePentItem(item){

    const d = localStorage.getItem('details')

const data = JSON.parse(d) 
    data.measurement.pents=data.measurement.pents.filter((i)=>{
        return i!==item
    })
    return dispatch=>{
        dispatch(RemovePent(data.measurement.pents))
        localStorage.setItem('details',JSON.stringify(data))
    }
}

export function NewCustomer(item){

    const d = localStorage.getItem('details')
    const data = JSON.parse(d)

     data.data.unshift(item)
     console.log(data.data);

     return dispatch=>{
         dispatch(AddCustomer(data.data))
         localStorage.setItem('details',JSON.stringify(data))
     }

}

export function UpdateMeasurement(i,details,controll){
    const d = localStorage.getItem('details')

    const data = JSON.parse(d)

    const indx = data.data.findIndex((n)=>{
          return n.no===i;
    })

    if(controll==='Shirts'){
         data.data[indx].shirts=details
         return dispatch=>{
             dispatch(ShirtMeasurement(data))
             console.log(data);
             localStorage.setItem('details',JSON.stringify(data))
         }
    }
    else{
        data.data[indx].pents=details
         return dispatch=>{
             dispatch(PentMeasurement(data.data))
             localStorage.setItem('details',JSON.stringify(data))
         }
    }
}