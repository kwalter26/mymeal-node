import { Component } from 'react';
import Navigation from './ui/Navigation';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const App = ({children}) => {
  return (
    <div className='app'>
      <Navigation/>
      {children}
    </div>
  );
};

export const Whoops404 = ({ location }) => {
  return (
    <div className='whoops-404'>
      <h1>Whoops, route not found</h1>
      <p>
        Cannot find content for
        {this.props.location.pathname}
      </p>
    </div>
  );
};
