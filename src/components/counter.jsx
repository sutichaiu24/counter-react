import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

   handleIncrement = (product) => {
     console.log(product)
     this.setState({value: this.state.count + 1})
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
          onClick={(product) => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let badgeName = "badge";
    badgeName +=
      this.state.count === 0 ? " bg-primary m-3" : " bg-secondary m-3";
    return badgeName;
  }
  formatCount() {
    let { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
