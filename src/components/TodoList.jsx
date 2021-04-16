import React, { Component } from 'react'

const TodoItem = props => <li onClick={props.onClick}>{props.item.text}</li>;


export default class TodoList extends Component {
    render() {
        const { items } = this.props;
        return (
          <div>
          <ul>
            {items.map((item, index) => (
              <TodoItem
                item={item}
                key={index}
                onClick={this.handleItemClick.bind(this, item)}
                //onClick={event => this.handleItemClick.call(this, item, event)}
              />
            ))}
          </ul>
          <button className="mr-3 btn btn-primary">Close Shipment</button>
          <button className="mr-3 btn btn-primary active">Close Shipment</button>
          <button className="btn btn-primary" disabled>Close Shipment</button>

          </div>
        );
      }
    
      handleItemClick(item, event) {
        // Write your code here
        if (!item.done) {
          event.persist();
          this.props.onItemClick(item, event);
        }
      }
}

 