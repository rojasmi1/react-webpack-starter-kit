import React from 'react';
import classes from '../css/core.css';

export default class App extends React.Component {
  render() {
    return (
     <div className="jumbotron">
        <h1>Minimalistic React Starter Kit</h1>
        <div><a className={classes.link} target="_blank" href="https://github.com/rojasmi1/react-webpack-starter-kit">Fork me in github</a></div>
     </div>
    );
  }
}
