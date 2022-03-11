import React, { Component } from 'react';

class LifeCycleSample extends Component {
    
    state = {
        number : 0,
        color: null
    }

    myRef = null;

    constructor(props){
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return {color: nextProps.color};
        }
        return null;
    }

    



    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleSample;