import React from 'react'
import Navbar from './components/Navbar'
import Router from './components/Router'
import axios from 'axios';
axios.defaults.withCredentials=true;
function App() {
    return (
        <div>
        <Navbar/>
<Router/>

        </div>
    )
}

export default App
