import React from "react";
import axios from 'axios';
import './App.css';
class App extends React.Component{
    state = {
        advice:''
    };
    componentDidMount()
    {
        console.log('COMPONENT DID MOUNT');
    }
    render(){
        return(
            <h1>App</h1>
        );
    }
}