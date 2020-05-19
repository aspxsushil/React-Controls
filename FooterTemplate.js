import {Component} from 'react';
import './App.css';

class FooterTemplate extends Component {
  render(){
    return (
       this.props.children
    );
  }
}

export default FooterTemplate;
