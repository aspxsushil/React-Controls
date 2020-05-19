import React, { Component } from 'react';
import './App.css';

class Repeator extends Component {
    render() {
        let childrens = [];
        const headerTemplate = React.Children.toArray(this.props.children).find(x => x.type && x.type.name === "HeaderTemplate");
        childrens.push(headerTemplate);
       

        this.props.datasource.forEach(row => {
            const itemTemplate = React.Children.toArray(this.props.children).find(x => x.type && x.type.name === "ItemTemplate");
            let clonedItemTemplate = React.cloneElement(itemTemplate, { data: row });
            childrens.push(clonedItemTemplate);
        });

        return (childrens);
    }
}
export default Repeator;
