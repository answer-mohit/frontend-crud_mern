import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import AddPost from './AddPost'
import Edit from './Edit'
import Login from './Login'
import PostDetail from './PostDetail'
import Posts from './Posts'
import Signup from './Signup'

function Router() {

    return (
        <>
         <Switch>
         <Route exact path="/" component={Posts}/>

            <Route exact path="/login" component={Login}/>
         <Route exact path="/signup" component={Signup}/>
             <Route exact path="/add" component={AddPost}/>
             <Route exact path="/edit/:id" component={Edit}/>
             <Route exact path="/posts/:id" component={PostDetail}/>
<Redirect to="/"/>
             
         </Switch>   
        </>
    )
}

export default Router
