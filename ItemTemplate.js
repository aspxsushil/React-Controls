import {Component} from 'react';
import './App.css';

class ItemTemplate extends Component {
  render(){
    console.log('item template',this.props.children);
    return (
    
      this.props.children(this.props.data)
    );
  }
}

export default ItemTemplate;
