import { FaGithub } from 'react-icons/fa';
import './styles/Footer.css';

export default function Footer() {
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
