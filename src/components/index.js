import { Component } from 'react';
import Navigation from './ui/Navigation';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor ({children}) {
    super({children});
  }
  render () {
    const {children} = this.props;
    return (
      <div className='app'>
        <Navigation/>
        {children}
      </div>
    );
  }
};

export class Whoops404 extends Component {

  constructor ({ location }) {
    super({location});
  }
  render () {
    return (
      <div className='whoops-404'>
        <h1>Whoops, route not found</h1>
        <p>
          Cannot find content for {this.props.location.pathname}
        </p>
      </div>
    );
  }
};
