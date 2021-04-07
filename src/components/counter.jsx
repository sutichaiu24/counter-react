import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value,
  
  };

 
  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };


  render() {
    console.log('props' ,this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={()=> this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
         
        <button
         onClick={() => this.props.onDelete(this.props.counter.id)}
         className = "btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let badgeName = "badge";
    badgeName +=
      this.props.counter.value === 0 ? " bg-primary m-3" : " bg-secondary m-3";
    return badgeName;
  }
  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
