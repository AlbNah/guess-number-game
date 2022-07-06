import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input
        onChange={this.props.onChange}
        ref={this.props.propsRef}
        type={this.props.type}
        placeholder={this.props.placeholder}
        className={this.props.className}
      />
    )
  }
}
