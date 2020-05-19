import React, { Component } from 'react';
import Repeater from './Repeater';
import ItemTemplate from './ItemTemplate';
//import HeaderTemplate from './HeaderTemplate';
//import FooterTemplate  from './FooterTemplate';
import './App.css';

class App extends Component {
  state = {
    options: [
      { name: "xyz", choices: [{ id: 1, name: 'AA' }, { id: 2, name: 'BB' }] },
      { name: "mno", choices: [{ id: 1, name: 'CC' }, { id: 2, name: 'DD' }] },
      { name: "jkl", choices: [{ id: 1, name: 'EE' }, { id: 2, name: 'FF' }] }
    ],
    employees: [{ id: 1, name: "Sushil" }, { id: 2, name: "Deepshikha" }, { id: 3, name: "Manoj" }]

  };
  onChoiceSelected = function (choice) {
    console.log(choice);
    alert(choice.name);
  }
  render() {
    return (
      <div>
        <h1>Repeater Option Choices UI Demo</h1>
        <hr />
        <Repeater datasource={this.state.options}>
          <ItemTemplate>
            {option => (
              <div>
                <h3>{option.name}</h3>
              <div class="flex-container">
                
                <Repeater datasource={option.choices}>
                  <ItemTemplate>
                    {choice => (
                      <div><button onClick={()=>{this.onChoiceSelected(choice)}}>{choice.name}</button></div>
                    )}
                  </ItemTemplate>
                </Repeater>
              </div>
              </div>
            )}
          </ItemTemplate>
        </Repeater>

      </div>
    );
  }

}

export default App;
