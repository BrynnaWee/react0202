import React, { Component } from 'react';
import './ValidationSample.css';


class ValidationSample extends Component {

    input = React.createRef();

    state = {
        password : '',
        clicked : false,
        validated : false,
    }

    handleChange = (e) =>
    {
       this.setState({password: e.target.value}); 
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        });
        this.handleFocus();
    }

    handleFocus = () =>
    {
        this.input.current.focus();
    }


    render() {
        return (
            <div>
                <input
                    ref={ref=>{this.input=ref}}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : null}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}


export default ValidationSample;