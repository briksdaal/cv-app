import { useRef } from 'react';
import ActionButton from './ActionButton';
import './styles/EditableImage.css';

export default function Header({
  handleGlobalStateUpdate,
  url,
}) {
  const hiddenFileInput = useRef(null);

  function handleClick() {
    hiddenFileInput.current.click();
  }

  function handleChange(e) {
    if (e.target.value === '') {
      return;
    }
    const newUrl = URL.createObjectURL(e.target.files[0]);
    handleGlobalStateUpdate(newUrl);
  }

  return (
    <div className="img-container">
      <img src={url} alt="profile portrait" />
      <div className="action-buttons-container">
        <ActionButton
          type="edit"
          onClick={handleClick}
        />
      </div>
      <input
        type="file"
        ref={hiddenFileInput}
        value=""
        accept="image/*"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}
