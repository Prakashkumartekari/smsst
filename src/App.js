import React from 'react';
import {Navbar,Home,AllMembers, 
  Modal, DonationDetail,Footer,Allnews,Dashboard, Navbottom,NewsDetail, ContactDetail, Alert
} from "./components/index"

import {BrowserRouter, Route, Switch, } from 'react-router-dom'
import {updateToken} from "./features/serverReducer/authreducer"


// import { Counter } from './features/counter/Counter';


import './App.css';

import "./responsive.css"
import { useDispatch, useSelector, } from 'react-redux';
import { auth} from './firebase/config';
import { closeModal } from './features/modal/Clickevent';


function App() {
 
  const  value = useSelector((state)=>state.ClickeventReducer.value)
  const dispatch = useDispatch()
  auth.onAuthStateChanged((user)=>{
    if(user){
      dispatch(updateToken(user.uid))
      if(value){
        dispatch(closeModal())
      }
     
    }
    
  })
 
  
  return (
    <div className="App">

      <Modal />
    <BrowserRouter keyLength={12}>
     <Navbar/>
     <div className="bottomNav">
    <Navbottom/>
   </div>
    <Switch>
      <Route exact path="/" component={Home}/>
     
      <Route path="/contact" component={ContactDetail}/>
    
      <Route path="/allmembers" component={AllMembers}/>
      <Route path="/news" component={Allnews}/>
      <Route path="/donationdetail" component={DonationDetail}/>
      <Route path="/admin" component={Dashboard}/>
      <Route exact path="/newsdetail/:id" component={NewsDetail}/>
    </Switch>
    <Footer/>
    <Alert/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
