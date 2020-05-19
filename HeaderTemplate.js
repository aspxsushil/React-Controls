import {Component} from 'react';
import './App.css';

class HeaderTemplate extends Component {
  render(){
    return (
       this.props.children
    );
  }
}

export default HeaderTemplate;
