import React from 'react'
import {Addmember, Addnews, Addslider, Addtestimonial, Home} from "./index"
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import "./dashboard.css"

const Dashboard = () => {
         const {path} = useRouteMatch()
          return (
                  
                    <>
                    <Home/>
                    <Switch>
                      <Route exact path={`${path}/addmember`} component={Addmember}/>        
                      <Route exact path={`${path}/addtestimonial`} component={Addtestimonial}/>        
                      <Route exact path={`${path}/addnews`} component={Addnews}/>        
                      <Route exact path={`${path}/addslider`} component={Addslider}/>        
                    </Switch>
                    
                    </>
                   
                 
          )
}

export default Dashboard
