import { Component } from 'react';
import './styles/Section.css';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="section">
        <h3>{title}</h3>
        {children}
      </div>
    );
  }
}
