import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './component/headers';
import {IconContext} from 'react-icons'
import Setting from './component/setting'
import MeasureMent from './component/measurement';
import { useEffect } from 'react';
import store from './redux/store'
import {Provider} from 'react-redux'
import Customer from './component/customer'
import User from './component/user'
import AddMeasurement from './component/shirtmeasurement';
import Show from './component/measuremetshow';
import Search from './component/search';

function App() {

  let details ={
    measurement :{
      shirts :[],
      pents : []
    },
    data : [],
  }

  useEffect(()=>{
    document.title='Measurement'
    const check = localStorage.getItem('details')
    if(check===null){
      localStorage.setItem('details',JSON.stringify(details))
    }
  },[])


  return (
    <div>
      <Provider store={store}>
      <Router>
        <IconContext.Provider value={{
          size:'25',
        }}>
        <Switch>
          <Route exact path='/Measurement-App'>
            <Header/>
          </Route>
          <Route path='/settingShirts'>
            <Setting controll='Shirts'/>
          </Route>
          <Route path='/settingPents'>
            <Setting controll='Pents'/>
          </Route>
          <Route path='/measurement'>
            <MeasureMent/>
          </Route>
          <Route path='/customer'>
            <Customer/>
          </Route>
        </Switch>
        <Route path='/details'>
          <User/>
        </Route>
        <Route path='/addShirtMeasurement'>
          <AddMeasurement controll='Shirts'/>
        </Route>
        <Route path='/addPentMeasurement'>
          <AddMeasurement controll='Pent'/> 
        </Route>
        <Route path='/showShirtMeasurement'>
          <Show controll='shirts'/>
        </Route>
        <Route path='/showPentMeasurement'>
          <Show controll='pent'/>
        </Route>
        <Route path='/search'>
          <Search/>
        </Route>
        </IconContext.Provider>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
