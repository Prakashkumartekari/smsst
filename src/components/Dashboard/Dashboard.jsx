import React from 'react'
import {Addmember, Addnews, Addslider, Addtestimonial, Home} from "./index"
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'
import "./dashboard.css"
import { useSelector } from 'react-redux'
const Dashboard = () => {
         const {path} = useRouteMatch()
         const login = useSelector((state)=>state.authReducer.token)
         const history = useHistory()
          return (
                   <div>
                    { login?(
                    <>
                    <Home/>
                    <Switch>
                      <Route exact path={`${path}/addmember`} component={Addmember}/>        
                      <Route exact path={`${path}/addtestimonial`} component={Addtestimonial}/>        
                      <Route exact path={`${path}/addnews`} component={Addnews}/>        
                      <Route exact path={`${path}/addslider`} component={Addslider}/>        
                    </Switch>
                    </>
                    ):(
                      history.push("/")
                    )
                  }
                   </div>
          )
}

export default Dashboard
