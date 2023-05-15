import { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import './styles/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Copyright ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Briksdaal
        {' '}
        <a className="footer-link" href="https://github.com/briksdaal" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    );
  }
}
