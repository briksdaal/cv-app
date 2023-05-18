import { FaRegEnvelope } from 'react-icons/fa';
import { BsTelephoneFill, BsGlobe2 } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import './styles/DetailContainer.css';

export default function DetailContainer({
  children, icon,
}) {
  const iconTypes = {
    email: <FaRegEnvelope />,
    phone: <BsTelephoneFill />,
    address: <IoLocationSharp />,
    url: <BsGlobe2 />,
  };

  return (
    <div className="detail-container">
      <i className="detail-icon">
        {iconTypes[icon]}
      </i>
      {children}
    </div>
  );
}
