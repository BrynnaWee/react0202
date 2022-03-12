import React from 'react';
import './App.css';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import EventPracticeFunc from './EventPracticeFunc';
// import ValidationSample from './ValidationSample';
// import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';


function getRandomColor(){
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}


class App extends React.Component {

state = {
  color : '#000000'
}

render(){
  return (
    // // <MyComponent city={'서울'}>보석이</MyComponent>
    // // <Counter />
    // // <Say />
    // // <EventPractice />
    // <EventPracticeFunc />
    // <ValidationSample /> 
    // <IterationSample />

    <div>
    <button onClick={this.handleClick}>랜덤색상</button>

      <ErrorBoundary>
        <LifeCycleSample 
          color = { this.state.color }
        />
      </ErrorBoundary>
    </div>

  );}
/**
 * functions
 */

handleClick = () => {
  this.setState({ color : getRandomColor() });
}

}

export default App;
