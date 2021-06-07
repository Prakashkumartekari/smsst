import React, {  } from 'react';
import {Navbar,Home,Contact,AllMembers, Modal, DonationDetail,Footer,Allnews,Dashboard, Navbottom} from "./components/index"

import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import { Counter } from './features/counter/Counter';


import './App.css';
// import { Addmember } from './components/Dashboard/index';
import "./responsive.css"

function App() {
  // const [show, setShow] = useState(true)
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
      <Route path="/contact" component={Contact}/>
      <Route path="/allmembers" component={AllMembers}/>
      <Route path="/news" component={Allnews}/>
      <Route path="/donationdetail" component={DonationDetail}/>
      <Route path="/admin" component={Dashboard}/>
      {/* <Route path="/admin/addmember" component={Addmember}/> */}
    </Switch>
    <Footer/>
   

    </BrowserRouter>
    
    </div>
  );
}

export default App;
