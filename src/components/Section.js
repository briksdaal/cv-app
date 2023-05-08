import { Component } from 'react';

export default class Section extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="section">
        {children}
      </div>
    );
  }
}
